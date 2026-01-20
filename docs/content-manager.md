# Content Manager Guide

This guide is for content editors and managers who maintain the content on `sasharesume.com`. The site uses **Sanity.io** as its Headless CMS.

## Accessing the CMS

To access the Content Management System (CMS), navigate to:
`https://sasharesume.com/studio` (or `http://localhost:3000/studio` if running locally).

You will need to log in with your credentials.

## Content Types

The CMS is organized into several content types:

### Singletons
These are unique pages or global settings that have only one instance.

- **Home**: Manages the landing page content.
  - **Showcase Projects**: Select which projects appear on the homepage.
  - **Menu Items**: Configure the navigation menu.
  - **Overview**: The main intro text.
- **Settings**: Global site settings.
  - **Site Title**, **OG Description/Image** (for social sharing).
  - **Footer Info**.
  - **Menu Items** (Global fallback).
- **Resume**: Specific content for the resume page.

### Documents
These are collections of content items.

- **Project**: Represents a portfolio project.
  - **Title**, **Slug**: Essential identifiers.
  - **Overview**: Brief description (used for SEO).
  - **Cover Image**: Main image for listings.
  - **Content Modules**: The body of the project page. You can add various modules like:
    - *Rich Text (Block)*
    - *Code Blocks*
    - *Timeline*
    - *Link Cards*
    - *Embeds*
    - *Images with Captions*
  - **Tags**: Categories for the project.
  - **Link Cards**: Related links at the bottom.

- **Blog Post**: Articles or thoughts. (Similar structure to Projects but for blog content).

## Workflow

1. **Create/Edit**: Navigate to the desired content type and click the "Create" button or select an existing item.
2. **Draft**: Content is autosaved as "Draft". It will not be visible on the live site until published.
3. **Preview**: Use the "Preview" tab (if available in the Studio split pane) to see how your changes might look.
4. **Publish**: Click the green "Publish" button to make your changes live.

## Media
Images are uploaded directly to Sanity. You can perform basic cropping and set "hotspots" to ensure the most important part of the image is always visible.
