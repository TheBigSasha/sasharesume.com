# Frontend Developer Guide

This guide covers the technical implementation of the `sasharesume.com` frontend.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (Pages Router)
- **CMS**: [Sanity.io](https://www.sanity.io/) (Headless CMS)
- **Styling**: 
  - [Styled Components](https://styled-components.com/) for component-level styling.
  - SASS/SCSS for some global styles (`styles/index.scss`).
  - `tbsui` / `tbsui-ssr`: A custom or external UI library used in the project.
- **Languages**: TypeScript (`.ts`, `.tsx`)

## Project Structure

- `pages/`: Next.js pages. `index.tsx` is the homepage. `studio/` contains the embedded Sanity Studio.
- `components/`: React components.
  - `global/`: App-wide components like `Navbar`, `Footer`.
  - `pages/`: Page-specific components (e.g., `home/HomePage.tsx`).
  - `shared/`: Reusable UI components (e.g., `Header`, `ImageBox`).
- `lib/`: Utility functions and Sanity clients.
  - `sanity.client.ts`: Functions to fetch data (`getHomePage`, `getSettings`).
  - `sanity.queries.ts`: GROQ queries used to fetch data.
  - `sanity.api.ts`: Configuration constants.
- `schemas/`: Sanity Content Lake schemas.
- `styles/`: Global styles.

## Data Fetching

Data is fetched at build time (SSG) or request time (SSR) using `getStaticProps` or `getServerSideProps` in the page files.
Data fetching logic is abstracted into `lib/sanity.client.ts`.

Example flow (`pages/index.tsx`):
1. `getStaticProps` calls `getHomePage` from `lib/sanity.client.ts`.
2. `getHomePage` executes a GROQ query defined in `lib/sanity.queries.ts`.
3. Data is passed as props to the `HomePage` component.

## Preview Mode

The site supports Sanity Live Preview.
- If `preview` is true in `getStaticProps`, the page renders a `PreviewSuspense` boundary.
- `components/preview/PreviewWrapper` handles the visual wrap for preview.
- `components/pages/home/HomePagePreview.tsx` (lazy loaded) is used to render the preview version which subscribes to live updates.

## Styling Patterns

- Use **Styled Components** for mostly everything.
- Global variables (fonts, colors) are often defined in CSS/SCSS files or injected via `_app.tsx`.
- Responsive design is handled via media queries in Styled Components or utility classes if available.

## Development

Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
This starts Next.js on `localhost:3000`. The Sanity Studio is available at `/studio`.
