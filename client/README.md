k-society

## Getting Started

```bash
npm run dev
# or
yarn dev
```

## Folder structure

.
├── components (for component share to the whole project, share >2 times )
│ ├── Button (sample component in folder)
│ │ ├── Button.tsx
│ │ ├── ButtonIcon.tsx
│ │ └── index.ts
│ └── Header.tsx (sample component single file)
├── containers (the content of the page in here)
│ ├── HomePage.tsx
│ └── SamplePage.tsx
├── pages
│ ├── \_app.tsx
│ ├── \_document.tsx
│ ├── index.tsx (export default from the containers folder)
│ └── sample-page.tsx
├── shared (for global shared utilities functions, constant variables)
├── styles (global styles, css variable, ...)
└── types (type for model from DB, e.g User, Skill, Event,...)
