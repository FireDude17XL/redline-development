# Redline Development

Static download hub for Redline Development apps, hosted on GitHub Pages.

## Pages
- `index.html`: home page with featured apps
- `apps.html`: grid of every app, with search
- `app.html?id=<app id>`: one page per app (about, features, screenshots, downloads)

## Adding or editing an app
Everything comes from `apps.js`. Copy a block, give it a unique `id`, and fill in
`about`, `features` and `screenshots`. Put images in `assets/<app id>/`.
Downloads are read from the latest GitHub release of `repo`, which must be public.
