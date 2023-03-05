k-society

## Tech Stack

Node v18.14.2\
NextJS v13\
React v18
## Getting Started

```bash
yarn dev
```
preview on localhost:80
## Folder structure
```
.src
├── components
│   ├── atoms
│   │   ├── Button.tsx
│   │   └── ButtonIcon.tsx
│   └── molecues
│       └── Header.tsx
├── containers (page code in here)
│   ├── HomePage.tsx
│   └── SamplePage.tsx
├── pages
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── index.tsx (export default from container)
│   └── sample-page.tsx
├── shared (for shared utilities, functions, ...)
├── styles (global style, css variables)
└── types (type of DB Model, e.g User, Skill, Event,...)
```