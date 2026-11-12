# Redline Development

Static download hub for Redline Development apps, hosted on GitHub Pages.

## Adding an app
Open `apps.js` and copy one of the blocks. Set `repo` to the app's `owner/repo`.
The page reads that repo's latest GitHub release and lists its downloads automatically.
The repo (or at least its releases) must be public for visitors to download.

An app that hosts its own downloads can list them instead: add `links: [{ label, url }]`
(and an optional `note`) to its block, and those buttons replace the release ones.

## Publishing
Settings → Pages → Deploy from branch → `main` / root.
