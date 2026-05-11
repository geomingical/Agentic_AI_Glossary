# Agentic AI Glossary Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a GitHub-ready static glossary website for agentic AI terms with a polished card interface, search, filters, and cleaning-project analogies.

**Architecture:** The site is a framework-free static application. `index.html` provides semantic shell content, `styles.css` defines the visual system, `data/glossary.js` stores terms, and `app.js` renders cards and interactions from data.

**Tech Stack:** HTML, CSS, vanilla JavaScript, GitHub Pages.

---

## File Structure

- Create `index.html`: homepage narrative, search controls, category controls, glossary grid, detail dialog.
- Create `styles.css`: responsive editorial card design, typography, color system, modal layout.
- Create `app.js`: category rendering, glossary rendering, search, filter state, dialog behavior.
- Create `data/glossary.js`: structured 50-70 term data set.
- Create `assets/README.md`: explains how reference-derived visual assets are used.
- Create `README.md`: repository purpose, data sources, preview, deployment instructions.
- Create `.gitignore`: keep OS artifacts and generated local files out of commits.

## Task 1: Repository Baseline

- [ ] Create `.gitignore` with `.DS_Store`, local logs, and temporary folders.
- [ ] Create `README.md` with purpose, audience, data sources, local preview command, and GitHub Pages instructions.
- [ ] Create `assets/README.md` to document visual reference usage.
- [ ] Run `git status --short` and confirm the intended files are visible.

## Task 2: Glossary Data

- [ ] Create `data/glossary.js` exporting `glossaryTerms`.
- [ ] Add 50-70 structured entries across the six categories.
- [ ] Ensure every entry has `term`, `zh`, `category`, `summary`, `analogy`, `definition`, `related`, and `tags`.
- [ ] Include terms from the reference images and the public glossary source.
- [ ] Run a syntax check with `node --check data/glossary.js`.

## Task 3: Static HTML Shell

- [ ] Create `index.html` with hero narrative, category summary region, search field, glossary grid, empty state, and detail dialog.
- [ ] Link `styles.css`, `data/glossary.js`, and `app.js`.
- [ ] Use semantic headings and accessible button labels.
- [ ] Open the page through a local static server to confirm files load.

## Task 4: Visual System

- [ ] Create `styles.css` with paper/ink editorial styling inspired by the reference images.
- [ ] Implement responsive layouts for desktop and mobile.
- [ ] Keep cards compact and readable.
- [ ] Style active filters, search, count badges, card tags, and modal details.
- [ ] Verify no text overlaps at common viewport widths.

## Task 5: Interactions

- [ ] Create `app.js` to render category buttons and glossary cards from data.
- [ ] Implement search across English, Chinese, summary, analogy, definition, related terms, and tags.
- [ ] Implement category filtering and reset behavior.
- [ ] Implement detail dialog open/close and Escape-key close.
- [ ] Update visible count and empty state as filters change.

## Task 6: Verification and Commit

- [ ] Run `node --check app.js`.
- [ ] Run `node --check data/glossary.js`.
- [ ] Serve locally with `python3 -m http.server 4173`.
- [ ] Use browser verification for desktop and mobile screenshots.
- [ ] Fix visual or interaction defects found during verification.
- [ ] Commit the completed static site.
