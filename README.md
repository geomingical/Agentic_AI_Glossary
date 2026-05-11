# Agentic AI Glossary

A beginner-friendly glossary for people who have used ChatGPT or Claude but are new to agentic AI terminology.

The site explains each term through a consistent house-cleaning analogy, then anchors the analogy with a concise technical definition. It is designed as a static GitHub Pages site with searchable glossary cards and category filters.

## Audience

This project is for readers who already understand basic AI chat interfaces, but want to understand how agentic AI systems plan, use tools, retrieve information, remember context, evaluate outputs, and apply safety controls.

## Sources

- Local reference images in `reference/`
- Public glossary terms from [awesome-agentic-ai-zh](https://github.com/WenyuChiou/awesome-agentic-ai-zh/blob/main/resources/glossary.md)

## Local Preview

Run a static server from the repository root:

```bash
python3 -m http.server 4173
```

Then open:

```text
http://localhost:4173
```

## GitHub Pages

After pushing this repository to GitHub:

1. Open repository settings.
2. Go to Pages.
3. Select deployment from the `main` branch.
4. Use the repository root as the Pages source.

No build step is required.

