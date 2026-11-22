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
    tagline: "A Windows mod manager for a variety of games.",
    tags: ["Mods", "Windows"],
    icon: "assets/redline-mods/icon.png",        // 1–2 letters, or an image path
    about: [
      "Redline Mods is a Windows mod manager for a variety of games, with a built-in Mod Store for finding and installing mods.",
      "TODO: a sentence or two more about who it's for and what makes it different."
    ],
    features: [
      "Manage mods for multiple games in one place",
      "Browse and install mods from the built-in Mod Store",
      // "TODO: another key feature",
    ],
    screenshots: [
      // { src: "assets/redline-mods/shot-1.png", caption: "Main menu" },
    ]
  },
  {
    id: "overdrive-rgb",
    name: "Overdrive RGB",
    repo: "FireDude17XL/overdrive-rgb-releases", // public releases-only repo (source stays private)
    sourcePublic: false,                          // hides the "Source code" link
    tagline: "RGB lighting, fan control and PC monitoring in one Windows app.",
    tags: ["RGB", "Fans", "Windows"],
    icon: "assets/overdrive-rgb/icon.png",
    about: [
      "Overdrive RGB brings your PC's lighting, fans and sensors together in one app, so you don't need a separate vendor program for each device.",
      "It runs quietly in the system tray, keeps your fan curves and lighting going in the background, and updates itself when a new version is out."
    ],
    features: [
      "Live PC monitoring: CPU, GPU, memory, drives and fan speeds",
      "Fan curves with smoothing and a safe 100% fallback if a sensor is lost",
      "RGB lighting for fan controllers, motherboard headers, keyboards and DDR5 memory",
      "Mouse DPI stages and keyboard lighting",
      "Audio: switch devices, per-app volume and a 10-band EQ",
      "Updates itself automatically"
    ],
    screenshots: [
      // { src: "assets/overdrive-rgb/shot-1.png", caption: "PC Monitoring" },
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
  },
  {
    id: "redline-tones",
    name: "Redline Tones",
    repo: "FireDude17XL/redline-tones-releases", // not created yet; downloadsPublic keeps links hidden
    downloadsPublic: false,                      // no public download yet: page shows "Coming soon"
    sourcePublic: false,
    tagline: "A guitar amp and effects studio for Windows, as an app and a VST3 plugin.",
    tags: ["Audio", "Guitar", "Windows", "VST3"],
    icon: "assets/redline-tones/icon.png",
    version: "1.3.6",
    about: [
      "Redline Tones is a guitar amp and effects app for Windows. Plug in your guitar through an audio interface and build a full rig: pedals, amp, cabinet and microphones, all with original DSP and artwork. It runs as a standalone app or as a VST3 plugin in your DAW.",
      "Lay out pedals on a pedalboard, run the amp through a modelled cab or your own impulse response, and save the whole rig as a tone you can come back to, share, or pick up from the online Tone Store."
    ],
    features: [
      "Seven built-in amp voices, from sparkling cleans and blues to plexi crunch and modern high gain, oversampled 4× for a smooth top end",
      "Load Neural Amp Modeler (.nam) captures in place of the built-in amps",
      "Cabinet section with six modelled cabs and two virtual mics, or load your own impulse responses",
      "31 pedals: gate, compressor, drives and fuzz, modulation, delays and reverb, wah, octave and pitch shifters, harmonizer, synth and more",
      "Free-form pedalboard with cables, where the chain order is the signal order; place pedals before or after the amp",
      "Tone Library with favourites and recents, plus nine factory tones to start from",
      "Online Tone Store for sharing and downloading tones",
      "Built-in tuner and MIDI learn on any control",
      "In-app updates that verify each download before installing"
    ],
    sections: [
      {
        title: "Requirements",
        bullets: [
          "Windows 10 or 11, 64-bit, with a CPU that supports AVX2",
          "An audio interface is recommended; ASIO drivers give the lowest latency",
          "The VST3 plugin works in any VST3 host"
        ]
      }
    ],
    screenshots: []
  }
];
