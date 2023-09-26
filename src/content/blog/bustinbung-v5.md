---
title: "learning astro"
date: 2023-09-25
tags: [ web ]
isDraft: true
---

While rewriting my site for v5.0, I decided to take a spin at learning [Astro](https://astro.build). While learning Svelte was definitely helpful, it did complicate things more than I wanted. A framework dedicated to static site generation was really appealing to me, so I decided to try Astro. Here are some things I learned.

## content collections

While following the tutorial on Astro's [documentation site](https://docs.astro.build/en/getting-started/), I started by creating a folder at `src/pages/posts/`, and placing all of my site contents there. However, looking through the documentation brought up [Content Collections](https://docs.astro.build/en/guides/content-collections/). According to the docs, the main benefits of using content collections are type safety and organization. So, I migrated to content collections, moving my site content to `src/content/[collection]`. This helped clean things up so that my `src/pages/` directory wasn't filled with all of my content, but everything was still organized logically within the folder structure of the project.

### type safety
