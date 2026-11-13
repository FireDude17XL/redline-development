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
    downloadsPublic: false,                      // repo is private: downloads come from `downloads` below
    sourcePublic: false,
    tagline: "Free, anonymous chat where every message is end-to-end encrypted.",
    tags: ["Chat", "Windows", "Mac", "iPhone", "Web"],
    icon: "assets/scrambl/icon.png",
    version: "1.6.0",
    released: "2026-11-12",
    about: [
      "Scrambl is a free, anonymous chat app for Windows, Mac, iPhone and the web. Every message is end-to-end encrypted, there are no sign-ups and no tracking, and the server only ever stores and relays ciphertext it can't read.",
      "It's made for small groups and pairs who want a private chat without handing over a phone number or email. Start a chat, share its link, and talk. Everything else is optional."
    ],
    features: [
      "A chat code is the key: anyone holding it can read the chat, and nobody else can, including the server",
      "Steady chats keep their history; temporary chats delete themselves after a set time",
      "Add friends by code, link or QR code, with no phone number needed",
      "Replies, reactions, edits, typing indicators and delivery receipts",
      "Send photos, PDFs and videos; files up to 1 GB go straight device to device",
      "Blips: camera photos and videos that open once or stay in the chat",
      "Shared notes in every chat that everyone can edit live, plus private notes",
      "Optional account that backs everything up, encrypted with your password",
      "Blue-Mint and Crimson-Orange themes, each in light and dark"
    ],
    sections: [
      {
        title: "Privacy",
        paragraphs: [
          "The server sees traffic patterns, never content. It can see room ids, message timing and size, member counts and connection IP addresses. It can't see message text, files, Blips, notes, names, chat names or account backups."
        ],
        bullets: [
          "Every message is signed by the sender's device; only the original sender can edit or delete it",
          "Photos are redrawn before sending, which strips location and camera details",
          "Anyone with a chat's code can read it, so share invite links only with people you trust"
        ]
      }
    ],
    downloads: [
      // os: windows | mac | iphone | web. The big button picks the visitor's platform.
      { os: "windows", platform: "Windows", label: "Download installer (86 MB)", url: "https://caidens-macbook-pro.tail670831.ts.net:10000/download/windows", note: "Unsigned: if SmartScreen warns, choose More info → Run anyway. Runs in the system tray." },
      { os: "mac", platform: "Mac", label: "Download disk image (181 MB)", url: "https://caidens-macbook-pro.tail670831.ts.net:10000/download/mac", note: "Apple Silicon and Intel. Unsigned: allow it once under Privacy & Security → Open Anyway." },
      { os: "iphone", platform: "iPhone", label: "Open in Safari", button: "Open Scrambl", url: "https://crackerjackm.github.io/scrambl-app/", note: "Open in Safari, then Share → Add to Home Screen. iOS 16.4+ for notifications." },
      { os: "web", platform: "Web", label: "Open web app", button: "Open Scrambl", url: "https://crackerjackm.github.io/scrambl-app/", note: "Works in any modern browser." }
    ],
    screenshots: []
  }
];
