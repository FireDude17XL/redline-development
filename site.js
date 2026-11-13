(function () {
  const APPS = window.REDLINE_APPS || [];
  const $ = (s) => document.querySelector(s);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const fmtSize = (b) => (b > 1048576 ? (b / 1048576).toFixed(1) + " MB" : Math.max(1, Math.round(b / 1024)) + " KB");
  const fmtDate = (d) => new Date(d).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
  const appUrl = (a) => `app.html?id=${encodeURIComponent(a.id)}`;
  const ghUrl = (a) => `https://github.com/${a.repo}`;
  const iconHtml = (a) =>
    /\.(png|jpe?g|svg|webp|gif)$/i.test(a.icon || "") ? `<img src="${esc(a.icon)}" alt="">` : esc(a.icon || a.name[0]);
  const tagsHtml = (a) => (a.tags || []).map((t) => `<span>${esc(t)}</span>`).join("");

  // Latest release, cached per page load
  const relCache = {};
  function latestRelease(a) {
    if (a.downloadsPublic === false) return Promise.resolve(null);
    if (!relCache[a.repo]) {
      relCache[a.repo] = fetch(`https://api.github.com/repos/${a.repo}/releases/latest`, { headers: { Accept: "application/vnd.github+json" } })
        .then((r) => (r.ok ? r.json() : null))
        .then((d) => d && { ...d, assets: (d.assets || []).filter((x) => !/\.(sha256|sig|asc)$/i.test(x.name)) })
        .catch(() => null);
    }
    return relCache[a.repo];
  }

  // App tile used on Home and Apps pages
  function tile(a) {
    return `
      <a class="tile" href="${appUrl(a)}">
        <div class="app-icon">${iconHtml(a)}</div>
        <div class="tile-body">
          <h3>${esc(a.name)}</h3>
          <p class="tagline">${esc(a.tagline)}</p>
          <div class="tags">${tagsHtml(a)}</div>
        </div>
        <span class="tile-version" data-repo="${esc(a.repo)}"></span>
        <span class="arrow" aria-hidden="true">→</span>
      </a>`;
  }
  function fillVersions(root) {
    root.querySelectorAll(".tile-version").forEach((el) => {
      const a = APPS.find((x) => x.repo === el.dataset.repo);
      latestRelease(a).then((r) => { if (r) el.textContent = r.tag_name; });
    });
  }

  function renderHome() {
    const grid = $("#featured");
    grid.innerHTML = APPS.slice(0, 6).map(tile).join("");
    fillVersions(grid);
    $("#app-count").textContent = APPS.length;
  }

  function renderApps() {
    const grid = $("#app-grid");
    const input = $("#search");
    const draw = () => {
      const q = (input.value || "").trim().toLowerCase();
      const list = APPS.filter((a) => !q || [a.name, a.tagline, ...(a.tags || [])].join(" ").toLowerCase().includes(q));
      grid.innerHTML = list.length ? list.map(tile).join("") : `<p class="muted empty">No apps match “${esc(input.value)}”.</p>`;
      fillVersions(grid);
    };
    input.addEventListener("input", draw);
    draw();
  }

  function renderApp() {
    const id = new URLSearchParams(location.search).get("id");
    const a = APPS.find((x) => x.id === id);
    const main = $("#app-page");
    if (!a) {
      main.innerHTML = `<section class="notfound"><h1>App not found</h1><p class="muted">We couldn't find that app.</p><a class="btn primary" href="apps.html">Back to all apps</a></section>`;
      return;
    }
    document.title = `${a.name} · Redline Development`;
    const about = (a.about || []).filter(Boolean);
    const features = (a.features || []).filter(Boolean);
    const shots = (a.screenshots || []).filter((s) => s && s.src);
    main.innerHTML = `
      <a class="back" href="apps.html">← All apps</a>
      <section class="app-hero">
        <div class="app-icon xl">${iconHtml(a)}</div>
        <div class="app-hero-text">
          <h1>${esc(a.name)}</h1>
          <p class="lead">${esc(a.tagline)}</p>
          <div class="tags">${tagsHtml(a)}</div>
        </div>
        <div class="app-hero-cta">
          <a class="btn primary lg" id="dl" href="#downloads-sec">Download</a>
          <span class="muted small" id="dl-note">Checking…</span>
        </div>
      </section>

      <div class="app-layout">
        <div class="app-main">
          <section>
            <h2>Screenshots</h2>
            ${shots.length
              ? `<div class="gallery">${shots.map((s) => `<figure><a href="${esc(s.src)}" target="_blank" rel="noopener"><img src="${esc(s.src)}" alt="${esc(s.caption || a.name)}" loading="lazy"></a>${s.caption ? `<figcaption>${esc(s.caption)}</figcaption>` : ""}</figure>`).join("")}</div>`
              : `<div class="gallery placeholder">${[1, 2, 3].map(() => `<div class="shot-ph"><span>Screenshot coming soon</span></div>`).join("")}</div>`}
          </section>
          ${about.length ? `<section><h2>About this app</h2>${about.map((p) => `<p class="prose">${esc(p)}</p>`).join("")}</section>` : ""}
          ${features.length ? `<section><h2>What it does</h2><ul class="features">${features.map((f) => `<li>${esc(f)}</li>`).join("")}</ul></section>` : ""}
          <section id="downloads-sec">
            <h2>Downloads</h2>
            <div id="downloads" class="panel"><span class="muted">Checking latest release…</span></div>
          </section>
        </div>
        <aside class="app-side">
          <div class="panel">
            <h3>Details</h3>
            <dl>
              <dt>Version</dt><dd id="d-version">—</dd>
              <dt>Released</dt><dd id="d-date">—</dd>
              <dt>Category</dt><dd>${esc((a.tags || []).join(", ") || "—")}</dd>
            </dl>
            ${a.downloadsPublic === false ? "" : `<div class="side-links">
              <a href="${ghUrl(a)}/releases">All releases</a>
              ${a.sourcePublic !== false ? `<a href="${ghUrl(a)}">Source code</a>` : ""}
            </div>`}
          </div>
        </aside>
      </div>`;

    latestRelease(a).then((r) => {
      const dl = $("#downloads");
      if (!r) {
        const btn = $("#dl");
        btn.textContent = "Coming soon";
        btn.classList.add("disabled");
        btn.removeAttribute("href");
        $("#dl-note").textContent = "No public release yet";
        dl.innerHTML = a.downloadsPublic === false
          ? `<span class="muted">Downloads for ${esc(a.name)} aren't available yet. Check back soon.</span>`
          : `<span class="muted">No release is published yet. Check <a href="${ghUrl(a)}/releases">GitHub releases</a> for updates.</span>`;
        return;
      }
      $("#dl").href = r.assets.length === 1 ? r.assets[0].browser_download_url : "#downloads-sec";
      $("#d-version").textContent = r.tag_name;
      $("#d-date").textContent = fmtDate(r.published_at);
      $("#dl-note").textContent = `${r.tag_name} · ${fmtDate(r.published_at)}`;
      dl.innerHTML = r.assets.length
        ? `<ul class="assets">${r.assets.map((x) => `<li><a href="${esc(x.browser_download_url)}">${esc(x.name)}</a><span class="muted">${fmtSize(x.size)}</span></li>`).join("")}</ul>`
        : `<span class="muted">This release has no files attached. See <a href="${esc(r.html_url)}">the release on GitHub</a>.</span>`;
    });
  }

  // Shared bits
  document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
  const page = document.body.dataset.page;
  document.querySelectorAll(`.nav nav a[data-nav="${page === "app" ? "apps" : page}"]`).forEach((el) => el.classList.add("active"));
  ({ home: renderHome, apps: renderApps, app: renderApp }[page] || (() => {}))();
})();
