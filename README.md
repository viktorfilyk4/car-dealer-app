# Car Dealer App

## Notes
- `generateStaticParams` is set up to generate only first 50 result pages. That is because of rate-limit from API
- `Husky / lint-staged` used for automatically linting and prettifying code before commit
- Structure of components is the following:
```
- ComponentFolder
  - Component.tsx (main file of the component)
  - Component.types.ts (types used in the component)
  - Component.helpers.ts (functions (helpers) used in the component)
  - Component.const.ts (constants used in the component)
```

## Requirements

- Node v20.17.0

## Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Production

Run:

```bash
npm run build
```

```bash
npm start
```

## Deploy

Coming soon...