// ─────────────────────────────────────────────────────────────
//  Redline Development: app catalog
//
//  Every app on the site comes from this list. To add an app,
//  copy one block, give it a unique `id` (used in its page URL:
//  app.html?id=<id>), and fill in the rest. Anything left empty
//  is simply hidden on the page.
//
//  Downloads come from the latest GitHub release of `repo`
//  (the repo must be public for visitors to download). For an
//  app whose repo is private, set `downloadsPublic: false` and
//  the page shows "Coming soon" instead of broken GitHub links.
// ─────────────────────────────────────────────────────────────
window.REDLINE_APPS = [
  {
    id: "redline-mods",
    name: "Redline Mods",
    repo: "FireDude17XL/redline-mods-releases", // public releases-only repo (source stays private)
    sourcePublic: false,                         // hides the "Source code" link
    tagline: "A Windows mod manager for Species: Unknown and Black Ops III.",
    tags: ["Mods", "Windows"],
    icon: "RM",                                  // 1–2 letters, or an image path like "assets/redline-mods/icon.png"
    about: [
      "Redline Mods is a Windows mod manager for Species: Unknown and Black Ops III, with a built-in Mod Store for finding and installing mods.",
      "TODO: a sentence or two more about who it's for and what makes it different."
    ],
    features: [
      "Manage mods for Species: Unknown and Black Ops III in one place",
      "Browse and install mods from the built-in Mod Store",
      // "TODO: another key feature",
    ],
    screenshots: [
      // { src: "assets/redline-mods/shot-1.png", caption: "Main menu" },
    ]
  },
  {
    id: "scrambl",
    name: "Scrambl",
    repo: "CrackerJackM/Scrambl",
    downloadsPublic: false,                      // repo is private: hides GitHub links, shows "Coming soon"
    sourcePublic: false,
    tagline: "TODO: one-line pitch for Scrambl.",
    tags: ["App"],
    icon: "S",
    about: [
      "TODO: a short paragraph on what Scrambl is and who it's for."
    ],
    features: [],
    screenshots: []
  }
];
