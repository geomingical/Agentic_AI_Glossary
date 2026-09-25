const categories = [
  {
    id: "all",
    label: "全部",
    description: "查看所有名詞卡。",
    icon: "＊"
  },
  {
    id: "foundation",
    label: "基礎設施與開發層",
    description: "模型、Agent、API、框架與系統編排。",
    icon: "01"
  },
  {
    id: "reasoning",
    label: "思考、推理與規劃",
    description: "目標、拆解、推理、反思與自主性。",
    icon: "02"
  },
  {
    id: "tools",
    label: "工具、技能與資源",
    description: "Tool use、RAG、知識庫與外部系統連接。",
    icon: "03"
  },
  {
    id: "memory",
    label: "記憶與上下文",
    description: "從 Context、Memory 總覽開始，再認識容量、記憶類型與狀態。",
    icon: "04"
  },
  {
    id: "performance",
    label: "效能、評估與異常",
    description: "成本、延遲、評估、幻覺與可觀測性。",
    icon: "05"
  },
  {
    id: "security",
    label: "安全、防護與治理",
    description: "權限、護欄、注入攻擊、隱私與稽核。",
    icon: "06"
  }
];

const state = {
  query: "",
  category: "all"
};

const els = {
  categoryMap: document.querySelector("#categoryMap"),
  filterTabs: document.querySelector("#filterTabs"),
  cards: document.querySelector("#cards"),
  searchInput: document.querySelector("#searchInput"),
  resetButton: document.querySelector("#resetButton"),
  resultCount: document.querySelector("#resultCount"),
  emptyState: document.querySelector("#emptyState"),
  dialog: document.querySelector("#termDialog"),
  dialogClose: document.querySelector("#dialogClose"),
  dialogCategory: document.querySelector("#dialogCategory"),
  dialogTitle: document.querySelector("#dialogTitle"),
  dialogZh: document.querySelector("#dialogZh"),
  dialogSummary: document.querySelector("#dialogSummary"),
  dialogAnalogy: document.querySelector("#dialogAnalogy"),
  dialogDefinition: document.querySelector("#dialogDefinition"),
  dialogAliases: document.querySelector("#dialogAliases"),
  dialogNoteSection: document.querySelector("#dialogNoteSection"),
  dialogNote: document.querySelector("#dialogNote"),
  dialogExamplesSection: document.querySelector("#dialogExamplesSection"),
  dialogExamples: document.querySelector("#dialogExamples"),
  dialogRelated: document.querySelector("#dialogRelated")
};

function normalize(value) {
  return String(value || "").toLowerCase().trim();
}

function categoryLabel(id) {
  return categories.find((category) => category.id === id)?.label || id;
}

function searchableText(term) {
  return normalize([
    term.term,
    term.zh,
    term.category,
    term.summary,
    term.analogy,
    term.definition,
    term.note,
    ...(term.aliases || []),
    ...(term.searchTerms || []),
    ...(term.examples || []).map((example) => `${example.label} ${example.value}`),
    term.related.join(" "),
    term.tags.join(" ")
  ].join(" "));
}

function filteredTerms() {
  const query = normalize(state.query);
  const ranked = [];
  for (const term of window.glossaryTerms) {
    if (state.category !== "all" && term.category !== state.category) continue;
    const names = [term.term, term.zh, ...(term.aliases || [])].map(normalize);
    let rank = 0;
    if (query) {
      if (names.includes(query)) rank = 0;
      else if (names.some((name) => name.includes(query))) rank = 1;
      else if ((term.searchTerms || []).some((name) => normalize(name) === query)) rank = 2;
      else if (searchableText(term).includes(query)) rank = 3;
      else continue;
    }
    ranked.push({ term, rank });
  }
  return ranked.sort((a, b) => a.rank - b.rank).map(({ term }) => term);
}

function setCategory(categoryId) {
  state.category = categoryId;
  render();
}

function renderCategoryMap() {
  els.categoryMap.innerHTML = categories
    .filter((category) => category.id !== "all")
    .map((category) => {
      const count = window.glossaryTerms.filter((term) => term.category === category.id).length;
      return `
        <button class="category-card" type="button" data-category="${category.id}">
          <span class="category-card__icon">${category.icon}</span>
          <span class="category-card__title">${category.label}</span>
          <span class="category-card__description">${category.description}</span>
          <span class="category-card__count">${count} 個詞</span>
        </button>
      `;
    })
    .join("");

  els.categoryMap.querySelectorAll("[data-category]").forEach((button) => {
    button.addEventListener("click", () => {
      setCategory(button.dataset.category);
      document.querySelector("#glossary").scrollIntoView({ behavior: "smooth" });
    });
  });
}

function renderTabs() {
  els.filterTabs.innerHTML = categories
    .map((category) => {
      const active = category.id === state.category ? "true" : "false";
      return `
        <button class="filter-tab" type="button" aria-pressed="${active}" data-category="${category.id}">
          ${category.label}
        </button>
      `;
    })
    .join("");

  els.filterTabs.querySelectorAll("[data-category]").forEach((button) => {
    button.addEventListener("click", () => setCategory(button.dataset.category));
  });
}

function renderCards() {
  const terms = filteredTerms();
  els.cards.innerHTML = terms.map((term, index) => `
    <article class="term-card" data-index="${window.glossaryTerms.indexOf(term)}">
      <div class="term-card__top">
        <span class="term-card__category">${categoryLabel(term.category)}${term.overview ? " · 總覽入口" : ""}</span>
        <span class="term-card__number">${String(index + 1).padStart(2, "0")}</span>
      </div>
      <h3>${term.term}</h3>
      <p class="term-card__zh">${term.zh}</p>
      <p class="term-card__summary">${term.summary}</p>
      <p class="term-card__analogy">${term.analogy}</p>
      <div class="term-card__tags" aria-label="相關詞">
        ${term.related.slice(0, 3).map((related) => `<span>${related}</span>`).join("")}
      </div>
    </article>
  `).join("");

  els.cards.querySelectorAll(".term-card").forEach((card) => {
    card.addEventListener("click", () => openDialog(window.glossaryTerms[Number(card.dataset.index)]));
  });

  els.resultCount.textContent = `${terms.length} / ${window.glossaryTerms.length} 個名詞`;
  els.emptyState.hidden = terms.length !== 0;
}

function openDialog(term) {
  els.dialogCategory.textContent = categoryLabel(term.category);
  els.dialogTitle.textContent = term.term;
  els.dialogZh.textContent = term.zh;
  els.dialogSummary.textContent = term.summary;
  els.dialogAnalogy.textContent = term.analogy;
  els.dialogDefinition.textContent = term.definition;
  els.dialogAliases.textContent = term.aliases?.length ? `常見別名：${term.aliases.join("、")}` : "";
  els.dialogAliases.hidden = !term.aliases?.length;
  els.dialogNoteSection.hidden = !term.note;
  els.dialogNote.textContent = term.note || "";
  els.dialogExamplesSection.hidden = !term.examples?.length;
  els.dialogExamples.replaceChildren();
  for (const example of term.examples || []) {
    const label = document.createElement("dt");
    label.textContent = example.label;
    const value = document.createElement("dd");
    value.textContent = example.value;
    els.dialogExamples.append(label, value);
  }
  els.dialogRelated.innerHTML = term.related.map((item) => `<button type="button">${item}</button>`).join("");

  els.dialogRelated.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      els.dialog.close();
      els.searchInput.value = button.textContent;
      state.query = button.textContent;
      state.category = "all";
      render();
      document.querySelector("#glossary").scrollIntoView({ behavior: "smooth" });
    });
  });

  els.dialog.showModal();
}

function render() {
  renderTabs();
  renderCards();
}

els.searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderCards();
});

els.resetButton.addEventListener("click", () => {
  state.query = "";
  state.category = "all";
  els.searchInput.value = "";
  render();
});

els.dialogClose.addEventListener("click", () => els.dialog.close());

els.dialog.addEventListener("click", (event) => {
  const rect = els.dialog.getBoundingClientRect();
  const isBackdrop =
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom;
  if (isBackdrop) {
    els.dialog.close();
  }
});

renderCategoryMap();
render();
