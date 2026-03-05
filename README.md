<p align="center">
  <a href="https://dev.lucaszapico.space">
    <img alt="dev.lucaszapico.space mark" src="./src/assets/mark.svg" width="60" />
  </a>
</p>
<h1 align="center">
   Dev.LucasZapico.Space - 2022
</h1>

## About

Dev portfolio site built with Gatsby and Chakra UI. Houses projects, articles, and notes.

[![Netlify Status](https://api.netlify.com/api/v1/badges/e312fb7a-70a2-457a-b0a4-f79e0a698c7a/deploy-status)](https://app.netlify.com/sites/devlucaszapicospace-v4/deploys)

## Stack

- Gatsby
- Chakra UI
- MDX
- GraphQL

## Getting Started

```bash
npm install
npm run dev        # http://localhost:8006
npm run build      # production build
```

## Project Structure

```
src/
├── assets/          # images, sass, static files
├── components/
│   ├── base/        # layout, nav, footer, header
│   ├── elements/    # cards, tags, MDX components
│   ├── modules/     # breadcrumbs, TOC, subject-tree
│   ├── pages/       # page-specific components (home, articles, styleguide)
│   └── sections/    # reusable section layouts
├── content/         # MDX content (articles, notes, projects)
├── templates/       # article, note, case templates
└── theme/           # Chakra UI theme (colors, typography, buttons, links, gradients)
```

## Design Language

A dev-only styleguide is available at `/styleguide` during development. It is excluded from production builds.

Covers: color palette, typography, buttons, links, gradients, spacing, shadows, border radius, breakpoints, z-index, and transitions.
