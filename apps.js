// ─────────────────────────────────────────────────────────────
//  Redline Development — app catalog
//  To add a new app, copy one block below and fill it in.
//  The site reads each repo's latest GitHub release automatically
//  (the repo must be public for visitors to see downloads).
// ─────────────────────────────────────────────────────────────
window.REDLINE_APPS = [
  {
    name: "Redline Mods",
    repo: "FireDude17XL/redline-mods-releases", // public releases-only repo (source stays private)
    tagline: "Mods built by the Redline team.", // TODO: one-line pitch
    description:
      "TODO: a short paragraph on what Redline Mods does and who it's for.",
    tags: ["Mods"],
    icon: "RM"                                   // 1–2 letters, or a path like "assets/redline-mods.png"
  },
  {
    name: "Scrambl",
    repo: "CrackerJackM/scrambl-app",
    tagline: "Private chat that only the people in it can read.",
    description:
      "End-to-end encrypted group chats and direct messages for friends and small teams. " +
      "Start a temporary chat that deletes itself or a steady one that stays, add people with a link, QR code or friend code, " +
      "and share photos, videos and files. The server only ever holds scrambled data, so it cannot read anything. " +
      "No phone number or email needed.",
    tags: ["Chat", "Encrypted", "Windows", "Mac", "Web"],
    icon: "assets/scrambl.png",
    // Scrambl hosts its own downloads, so these replace the GitHub release buttons.
    // They always serve the newest build, and the app updates itself after that.
    note: "Always the newest version. The app updates itself once installed. On iPhone, open the web app and add it to your Home Screen.",
    links: [
      { label: "Download for Windows", url: "https://caidens-macbook-pro.tail670831.ts.net:10000/download/windows" },
      { label: "Download for Mac", url: "https://caidens-macbook-pro.tail670831.ts.net:10000/download/mac" },
      { label: "Open web app", url: "https://crackerjackm.github.io/scrambl-app/" }
    ]
  }
];
