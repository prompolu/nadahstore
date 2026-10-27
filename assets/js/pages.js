/* NADAH STORE — logique par page (accueil, boutique, fiche produit) */
(function () {
  "use strict";
  const P = window.NADAH_PRODUCTS || [];
  const t = window.NADAH_T;
  const card = window.NADAH_CARD;
  const ICONS = window.NADAH_ICONS;
  const page = document.body.dataset.page;
  const CATS = ["crampons", "minifoot", "tenues", "sneakers", "vetements"];

  /* ---------- Accueil : nouveautés ---------- */
  function renderHome() {
    const grid = document.getElementById("new-grid");
    if (!grid) return;
    const fresh = P.filter(p => p.isNew);
    const list = fresh.concat(P.filter(p => !p.isNew)).slice(0, 8);
    grid.innerHTML = list.map(card).join("");
  }

  /* ---------- Boutique : filtres ---------- */
  const state = { cat: "all", size: "all", q: "" };

  function readParams() {
    const cat = new URLSearchParams(location.search).get("cat");
    if (cat && CATS.includes(cat)) state.cat = cat;
  }
  function writeParams() {
    const sp = new URLSearchParams();
    if (state.cat !== "all") sp.set("cat", state.cat);
    const qs = sp.toString();
    history.replaceState(null, "", qs ? `?${qs}` : location.pathname);
  }

  function buildShopControls() {
    const chips = document.getElementById("cat-chips");
    chips.innerHTML = ["all"].concat(CATS).map(c =>
      `<button class="chip" type="button" data-cat="${c}" aria-pressed="${state.cat === c}">${t(c === "all" ? "cat.all" : "cat." + c)}</button>`
    ).join("");
    chips.querySelectorAll(".chip").forEach(b => b.addEventListener("click", () => {
      state.cat = b.dataset.cat; writeParams(); buildShopControls(); renderShop();
    }));

    const sizes = [...new Set(P.flatMap(p => p.sizes).filter(s => typeof s === "number"))].sort((a, b) => a - b);
    const size = document.getElementById("f-size");
    size.innerHTML = `<option value="all">${t("size.all")}</option>` + sizes.map(s => `<option value="${s}">${s}</option>`).join("");
    size.value = state.size;
  }

  function matches(p) {
    if (state.cat !== "all" && p.cat !== state.cat) return false;
    if (state.size !== "all" && p.sizes.length && !p.sizes.includes(Number(state.size))) return false;
    if (state.q) {
      const hay = `${p.brand} ${p.name} ${t("cat." + p.cat)}`.toLowerCase();
      if (!state.q.toLowerCase().split(/\s+/).every(w => hay.includes(w))) return false;
    }
    return true;
  }

  function renderShop() {
    const list = P.filter(matches);
    const grid = document.getElementById("shop-grid");
    const count = document.getElementById("result-count");
    count.textContent = list.length === 1 ? t("count.one") : t("count", { n: list.length });
    if (!list.length) {
      grid.innerHTML = `<div class="empty-state"></div>`;
      grid.firstChild.textContent = t("empty");
      return;
    }
    grid.innerHTML = list.map(card).join("");
  }

  function initShop() {
    readParams();
    buildShopControls();
    document.getElementById("f-size").addEventListener("change", e => { state.size = e.target.value; renderShop(); });
    let timer;
    document.getElementById("f-search").addEventListener("input", e => {
      clearTimeout(timer);
      timer = setTimeout(() => { state.q = e.target.value.trim(); renderShop(); }, 150);
    });
    renderShop();
  }

  /* ---------- Fiche produit ---------- */
  let picked = null;
  function renderProduct() {
    const root = document.getElementById("pdp");
    const id = new URLSearchParams(location.search).get("id");
    const p = P.find(x => x.id === id);
    if (!p) {
      root.innerHTML = `<div class="empty-state"><p></p><a class="btn btn--navy" href="boutique.html"></a></div>`;
      root.querySelector("p").textContent = t("pdp.notfound");
      root.querySelector("a").textContent = t("pdp.back");
      return;
    }
    document.title = `${p.brand} ${p.name} — Nadah Store`;
    const crumbCat = document.getElementById("crumb-cat");
    crumbCat.textContent = t("cat." + p.cat);
    crumbCat.href = `boutique.html?cat=${p.cat}`;
    document.getElementById("crumb-name").textContent = p.name;

    const sizeBlock = p.sizes.length
      ? `<div class="size-grid" role="group" aria-label="${t("sizes.label")}">${p.sizes.map(s => `<button class="size-btn" type="button" data-size="${s}" aria-pressed="${String(picked) === String(s)}">${s}</button>`).join("")}</div>
         <p class="hint" id="size-hint" aria-live="polite">${picked ? t("pdp.picked", { s: picked }) : t("pdp.pick")}</p>`
      : `<p class="hint">${t("sizes.ask")} — ${t("pdp.nosize")}</p>`;

    root.innerHTML = `
      <div class="pdp-media"><img src="images/products/${p.id}.jpg" alt="${p.brand} ${p.name}" width="640" height="800"></div>
      <div class="pdp-info">
        <span class="brand-name">${p.brand} · ${t("cat." + p.cat)}</span>
        <h1 class="display">${p.name}</h1>
        <div class="tags" style="display:flex;gap:6px;margin-bottom:18px">${p.isNew ? `<span class="tag">${t("tag.new")}</span>` : ""}<span class="tag">${t("tag.mc")}</span></div>
        <p class="pdp-price">${window.NADAH_PRICE(p)}</p>
        <p class="pdp-note">${t("pdp.mc")}</p>
        <div class="size-block">
          <div class="label"><span>${t("sizes.label")}</span><span dir="ltr" style="color:var(--muted);font-weight:500">${window.NADAH_SIZES(p.sizes)}</span></div>
          ${sizeBlock}
        </div>
        <div class="pdp-actions">
          <a class="btn btn--wa" id="order-btn" target="_blank" rel="noopener">${ICONS.chat}<span>${t("pdp.order")}</span></a>
          <a class="btn btn--ghost" href="tel:${window.NADAH_STORE.phoneIntl}">${ICONS.phone}<span>${t("pdp.call")}</span></a>
        </div>
        <ul class="pdp-perks">
          <li>${ICONS.truck}<span>${t("pdp.perk1")}</span></li>
          <li>${ICONS.cash}<span>${t("pdp.perk2")}</span></li>
          <li>${ICONS.pin}<span>${t("pdp.perk3")}</span></li>
        </ul>
      </div>`;

    const orderBtn = document.getElementById("order-btn");
    const updateOrder = () => {
      const label = `${p.brand} ${p.name}`;
      orderBtn.href = window.NADAH_WA(t("wa.msg", { p: label, s: picked ? t("wa.size", { s: picked }) : "" }));
    };
    updateOrder();
    root.querySelectorAll(".size-btn").forEach(b => b.addEventListener("click", () => {
      picked = b.dataset.size;
      root.querySelectorAll(".size-btn").forEach(x => x.setAttribute("aria-pressed", String(x === b)));
      document.getElementById("size-hint").textContent = t("pdp.picked", { s: picked });
      updateOrder();
    }));

    const similar = P.filter(x => x.cat === p.cat && x.id !== p.id).slice(0, 4);
    document.getElementById("similar-grid").innerHTML = similar.map(card).join("");
    document.getElementById("similar-wrap").hidden = !similar.length;
  }

  function render() {
    if (page === "home") renderHome();
    if (page === "shop") { buildShopControls(); renderShop(); }
    if (page === "product") renderProduct();
  }

  if (page === "shop") initShop(); else render();
  document.addEventListener("nadah:lang", render);
})();
