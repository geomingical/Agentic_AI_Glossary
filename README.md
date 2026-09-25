# Agentic AI Glossary

A beginner-friendly glossary for people who have used ChatGPT or Claude but are new to agentic AI terminology.

The site explains each term through a consistent house-cleaning analogy, then anchors the analogy with a concise technical definition. It is designed as a static GitHub Pages site with searchable glossary cards and category filters.

## Audience

This project is for readers who already understand basic AI chat interfaces, but want to understand how agentic AI systems plan, use tools, retrieve information, remember context, evaluate outputs, and apply safety controls.

## GitHub Pages

Static website:

https://geomingical.github.io/Agentic_AI_Glossary/

No build step is required.

## Learning and search

- Start with the **Context** and **Memory** overview cards in the memory category, then follow related terms to the detailed concepts.
- **Webhook** explains how external events can trigger workflows; the **Schema** dialog compares a parameter, its schema, and actual arguments using `get_weather`.
- Search ignores case and surrounding whitespace. Exact English/Chinese names and aliases rank first, partial name/alias matches next, exact related search terms next, then matches in descriptions and other content. Ties preserve glossary order.
- `Tool Calling` finds **Function Calling** as a common alias. `Tool Result` / `Tool Output` find **Observation** as a broader concept, not a synonym. `Parameters` / `Arguments` lead to **Schema**.
- Related-term buttons clear the category filter so cross-category links remain reachable.

## Local verification

Run `node scripts/validate-glossary.mjs` to check required fields and terms, categories, duplicate names, related-term references, and optional alias/search-term arrays and example fields. The validator does not pin the total entry count.

Serve locally with `python3 -m http.server 8765 --bind 127.0.0.1` and open http://127.0.0.1:8765/.
Check the searches above, the Context/Memory ordering, Schema examples on a narrow viewport, and Webhook → API navigation from the tools category. Stop the server with Ctrl-C.
