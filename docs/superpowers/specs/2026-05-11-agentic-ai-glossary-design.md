# Agentic AI Glossary Static Site Design

## Goal

Build a GitHub-ready static website that explains agentic AI terminology for people who have used ChatGPT or Claude but are unfamiliar with agentic AI systems.

## Audience

The first-version audience already understands conversational AI at a basic level. They need help moving from "I chat with an AI assistant" to "I can delegate goals to a system that plans, uses tools, retrieves information, checks work, and asks humans when needed."

## Core Analogy

The site uses a house-cleaning project as the primary analogy:

- Traditional programs are like a broom: they move only when the user gives direct step-by-step instructions.
- Web chatbots are like a smart helper who can answer and draft, but usually works turn by turn.
- Agentic AI is like hiring a professional cleaning team: a manager plans, agents specialize, tools are selected, records are checked, safety rules constrain action, and uncertain decisions return to the owner.

This analogy should remain consistent across all cards, but every card must also include a concise formal definition so users do not learn only the metaphor.

## Information Architecture

The site has three learning layers:

1. Background narrative: a short first-screen explanation of the cleaning-team analogy.
2. Category exploration: six major categories that help users understand where each term fits.
3. Searchable glossary cards: 50-70 terms with Chinese translation, simple explanation, analogy, formal definition, related terms, and tags.

The six categories are:

- Foundation and Development
- Reasoning and Planning
- Tools, Skills, and Resources
- Memory and Context
- Performance, Evaluation, and Issues
- Security, Safety, and Governance

## Visual Direction

Use the supplied `reference/` images as tone references. The site should feel like an editorial concept atlas, not a generic documentation site:

- Warm paper background with restrained ink-like texture.
- High-contrast typography for readability.
- Neutral grayscale base with a limited electric-blue accent for search, active filters, and links.
- Card layout with crisp borders, shallow shadows, and compact spacing.
- Responsive design that works on desktop and mobile.

The interface should be polished and beautiful, but not decorative at the expense of reading. Text must fit within cards and buttons on mobile.

## Functional Requirements

- Static files only, suitable for GitHub Pages.
- Search must match English terms, Chinese terms, aliases, explanations, analogies, tags, and related terms.
- Category filters must update visible cards without page navigation.
- Clicking a card opens a detail panel or modal with full content.
- The URL should not require a build step.
- The README must explain purpose, source material, local preview, and GitHub Pages deployment.

## Data Requirements

Use a local structured data file for glossary entries. First version should include roughly 50-70 terms, drawing from:

- The user's existing reference images.
- The public `awesome-agentic-ai-zh` glossary.
- Additional adjacent terms needed to make the six-category learning model coherent.

Each term entry should include:

- `term`
- `zh`
- `category`
- `summary`
- `analogy`
- `definition`
- `related`
- `tags`

## Technical Approach

Use framework-free HTML, CSS, and JavaScript:

- `index.html` for semantic structure.
- `styles.css` for visual system and responsive layout.
- `app.js` for rendering, search, filtering, and modal behavior.
- `data/glossary.js` for glossary entries.
- `assets/` for curated images copied from `reference/`.

This keeps the site portable, easy to inspect, and directly publishable through GitHub Pages.

## Validation

Before completion:

- Run a local static server.
- Verify search and category filters manually.
- Verify card modal open/close behavior.
- Inspect desktop and mobile layouts with browser screenshots.
- Check git status so unrelated files are not accidentally included unless intended.
