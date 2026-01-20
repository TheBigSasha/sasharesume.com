# Administrator Guide

This guide covers deployment, configuration, and maintenance of the `sasharesume.com` project.

## Deployment

The project is a Next.js application that can be deployed to Vercel or any hosting platform supporting Node.js/Next.js.
Since the Sanity Studio is embedded within the application (at `/studio`), deploying the Next.js app also deploys the CMS interface.

### Build Command
```bash
npm run build
```
This command builds the Next.js application.

## Environment Variables

The application requires specific environment variables to function, particularly for connecting to Sanity.io.

| Variable | Description |
|Data Source| |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | The Project ID from Sanity.io. |
| `NEXT_PUBLIC_SANITY_DATASET` | The Dataset name (usually `production`). |
| `NEXT_PUBLIC_SANITY_API_VERSION` | THe API version date (e.g., `2022-11-15`) |
| `NEXT_PUBLIC_SANITY_PROJECT_TITLE` | (Optional) Title for the Sanity Studio. |
|Analytics| |
| `NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID` | GA4 Measurement ID. |
|Preview & Security| |
| `SANITY_API_READ_TOKEN` | Token with read permissions. Required for Preview Mode and potentially for reading private datasets. |

## Sanity Configuration

- **Configuration File**: `sanity.config.ts`
- **Schemas**: Located in `schemas/`. If you need to add new content types, they must be added here and imported into `sanity.config.ts`.
- **CORS**: Ensure the production domain is added to the CORS origins in the Sanity project settings (manage.sanity.io).

## Maintenance

### Updating Dependencies
Use `npm update` or `yarn upgrade` to keep dependencies fresh.
Pay special attention to `sanity`, `next-sanity`, and `@sanity/*` packages to ensure compatibility.

### Webhook
To ensure the site updates when content is published (since it uses `getStaticProps` for SSG), you likely need a **Sanity Webhook** configured to trigger a deployment (e.g., Vercel Deploy Hook) on content changes.
