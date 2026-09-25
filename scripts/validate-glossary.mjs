import { readFile } from "node:fs/promises";
import vm from "node:vm";

const expectedTerms = [
  "Context",
  "Memory",
  "Webhook",
  "Artificial General Intelligence",
  "Harness Engineering",
  "Plugin",
  "Command Line Interface",
  "Pretraining",
  "Fine-tuning",
  "Post-training",
  "Instruction Tuning",
  "SFT",
  "RL",
  "Chain-of-Thought",
  "RLHF",
  "Alignment",
  "Base Model",
  "Inference",
  "Agent Loop",
  "Action",
  "Observation",
  "Environment",
  "State Machine",
  "Routing",
  "Planner",
  "Executor",
  "Critic",
  "Structured Output",
  "Schema",
  "Retrieval",
  "Reranking",
  "Agentic Workflow",
  "Model Distillation"
];

const validCategories = new Set([
  "foundation",
  "reasoning",
  "tools",
  "memory",
  "performance",
  "security"
]);

const source = await readFile(new URL("../data/glossary.js", import.meta.url), "utf8");
const context = { window: {} };
vm.createContext(context);
vm.runInContext(source, context);

const terms = context.window.glossaryTerms;

if (!Array.isArray(terms)) {
  throw new Error("window.glossaryTerms must be an array");
}

const byTerm = new Map();
for (const entry of terms) {
  if (byTerm.has(entry.term)) {
    throw new Error(`Duplicate term: ${entry.term}`);
  }
  byTerm.set(entry.term, entry);

  for (const field of ["term", "zh", "category", "summary", "analogy", "definition"]) {
    if (typeof entry[field] !== "string" || entry[field].trim() === "") {
      throw new Error(`${entry.term || "Unknown term"} has invalid ${field}`);
    }
  }

  if (!validCategories.has(entry.category)) {
    throw new Error(`${entry.term} has invalid category: ${entry.category}`);
  }

  if (!Array.isArray(entry.related) || entry.related.length === 0) {
    throw new Error(`${entry.term} must have related terms`);
  }

  if (!Array.isArray(entry.tags) || entry.tags.length === 0) {
    throw new Error(`${entry.term} must have tags`);
  }

  for (const field of ["aliases", "searchTerms"]) {
    if (field in entry && (
      !Array.isArray(entry[field]) ||
      entry[field].length === 0 ||
      entry[field].some((value) => typeof value !== "string" || value.trim() === "")
    )) {
      throw new Error(`${entry.term} has invalid ${field}`);
    }
  }

  if ("examples" in entry && (
    !Array.isArray(entry.examples) ||
    entry.examples.length === 0 ||
    entry.examples.some((example) => !example ||
      ["label", "value"].some((field) =>
        typeof example[field] !== "string" || example[field].trim() === ""
      )
    )
  )) {
    throw new Error(`${entry.term} has invalid examples`);
  }
}

for (const term of expectedTerms) {
  if (!byTerm.has(term)) {
    throw new Error(`Missing expected term: ${term}`);
  }
}

for (const entry of terms) {
  for (const related of entry.related) {
    if (!byTerm.has(related)) {
      throw new Error(`${entry.term} has related term not in glossary: ${related}`);
    }
  }
}

console.log(`Validated ${terms.length} glossary terms.`);
