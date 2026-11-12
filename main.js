(function () {
  document.getElementById("year").textContent = new Date().getFullYear();
  const grid = document.getElementById("app-grid");
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const fmtSize = (b) => (b > 1048576 ? (b / 1048576).toFixed(1) + " MB" : Math.max(1, Math.round(b / 1024)) + " KB");
  const fmtDate = (d) => new Date(d).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });

  function card(app, i) {
    const repoUrl = `https://github.com/${app.repo}`;
    // An app that hosts its own downloads lists them in `links` instead of using GitHub releases.
    const links = Array.isArray(app.links) && app.links.length ? app.links.filter((l) => /^https:\/\//i.test(l.url)) : null;
    const icon = /\.(png|jpe?g|svg|webp|gif)$/i.test(app.icon || "")
      ? `<img src="${esc(app.icon)}" alt="">`
      : esc(app.icon || app.name[0]);
    const el = document.createElement("article");
    el.className = "card";
    el.innerHTML = `
      <div class="card-head">
        <div class="app-icon">${icon}</div>
        <div>
          <h3>${esc(app.name)}</h3>
          <p class="tagline">${esc(app.tagline)}</p>
        </div>
      </div>
      <p class="desc">${esc(app.description)}</p>
      <div class="tags">${(app.tags || []).map((t) => `<span>${esc(t)}</span>`).join("")}</div>
      ${links
        ? `${app.note ? `<div class="release"><span class="muted">${esc(app.note)}</span></div>` : ""}
      <div class="actions">
        ${links.map((l, n) => `<a class="btn ${n ? "ghost" : "primary"}" href="${esc(l.url)}">${esc(l.label)}</a>`).join("")}
      </div>`
        : `<div class="release" id="rel-${i}"><span class="muted">Checking latest release…</span></div>
      <div class="actions">
        <a class="btn primary" id="dl-${i}" href="${repoUrl}/releases/latest">Download latest</a>
        <a class="btn ghost" href="${repoUrl}">Source</a>
        <a class="btn ghost" href="${repoUrl}/releases">All releases</a>
      </div>`}`;
    grid.appendChild(el);
    if (!links) loadRelease(app, i);
  }

  async function loadRelease(app, i) {
    const rel = document.getElementById(`rel-${i}`);
    try {
      const r = await fetch(`https://api.github.com/repos/${app.repo}/releases/latest`, { headers: { Accept: "application/vnd.github+json" } });
      if (!r.ok) throw new Error(r.status);
      const data = await r.json();
      const assets = (data.assets || []).filter((a) => !/\.(sha256|sig|asc)$/i.test(a.name));
      rel.innerHTML = `
        <div class="rel-meta"><span class="badge">${esc(data.tag_name)}</span><span class="muted">Released ${fmtDate(data.published_at)}</span></div>
        ${assets.length ? `<ul class="assets">${assets.map((a) => `<li><a href="${esc(a.browser_download_url)}">${esc(a.name)}</a><span class="muted">${fmtSize(a.size)}</span></li>`).join("")}</ul>` : ""}`;
      if (assets.length === 1) document.getElementById(`dl-${i}`).href = assets[0].browser_download_url;
    } catch (e) {
      rel.innerHTML = `<span class="muted">See GitHub for the latest release.</span>`;
    }
  }

  (window.REDLINE_APPS || []).forEach(card);
})();
