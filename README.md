# Car Dealer App

## Notes

- [`generateStaticParams`](https://nextjs.org/docs/app/api-reference/functions/generate-static-params) is set up to generate only first 50 result pages. That is because of rate-limit from API
- `Husky / lint-staged` for automatic linting and prettifying code before commit
- Use [`tailwind-merge`](https://github.com/dcastil/tailwind-merge) for merging Tailwind classes
- `App` folder only for routing purposes
- Structure of component's folder is the following:

```
- ComponentFolder
  - Component.tsx (main file of the component)
  - Component.types.ts (types used in the component)
  - Component.helpers.ts (functions (helpers) used in the component)
  - Component.const.ts (constants used in the component)
```

## Requirements

- Node v20.17.0
- [Editorconfig](https://editorconfig.org/) (development only)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) (development only, if you use VSCode)
- React snippets plugin for IDE (development only)

## Development

```bash
npm ci
```

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Production

```bash
npm run build
```

```bash
npm start
```

## Deployment

Used Github Actions and Vercel.  
Link - https://car-dealer-app-amber.vercel.app/

## UI
[Figma template](https://www.figma.com/design/8I4hoXJoysiDrdth6OPESq/Task-Management-Dashboard---Pickolab-Studio-(Community))
