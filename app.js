(() => {
  const data = window.SURVIVAL_DATA;
  if (!data) return;

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const esc = (value = "") => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  // Mobile menu
  const menuBtn = $('#menuBtn');
  const mainNav = $('#mainNav');
  menuBtn?.addEventListener('click', () => {
    const open = mainNav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  mainNav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mainNav.classList.remove('open')));

  // Ctrl/Cmd + K
  const searchInput = $('#searchInput');
  window.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      searchInput?.focus();
    }
  });

  // Render introduction
  const introCopy = $('#intro-copy');
  if (introCopy) {
    introCopy.innerHTML = `
      ${data.intro.paragraphs.map(p => `<p>${esc(p)}</p>`).join('')}
      <div class="focus-list">
        ${data.intro.focusAreas.map(item => `<div class="focus-item">${esc(item)}</div>`).join('')}
      </div>`;
  }
  const programGrid = $('#program-grid');
  if (programGrid) {
    programGrid.innerHTML = data.intro.programs.map(item => `
      <article class="program-card">
        <span class="program-code">${esc(item.code)}</span>
        <h4>${esc(item.name)}</h4>
        <small>${esc(item.type)}</small>
      </article>`).join('');
  }

  // Rights & duties
  const rightsGroups = $('#rights-groups');
  if (rightsGroups) {
    rightsGroups.innerHTML = data.rightsDuties.groups.map(group => `
      <article class="detail-group" id="${esc(group.id)}">
        <div class="detail-group-head">
          <div>
            <span class="mini-label">${esc(group.icon)}</span>
            <h3>${esc(group.title)}</h3>
          </div>
        </div>
        <div class="detail-item-grid">
          ${group.items.map(item => `
            <div class="detail-item">
              <strong>${esc(item.title)}</strong>
              <p>${esc(item.text)}</p>
            </div>`).join('')}
        </div>
        ${group.links?.length ? `<div class="source-links">${group.links.map(link => `<a href="${esc(link.url)}" target="_blank" rel="noopener noreferrer">${esc(link.label)} ↗</a>`).join('')}</div>` : ''}
      </article>`).join('');
  }

  // Activities
  const activityGrid = $('#activity-grid');
  if (activityGrid) {
    activityGrid.innerHTML = data.activities.featured.map(item => `
      <article class="activity-detail-card">
        <img src="${esc(item.image)}" alt="${esc(item.title)}" loading="lazy">
        <div>
          <span>${esc(item.owner)}</span>
          <h3>${esc(item.title)}</h3>
          <p>${esc(item.description)}</p>
        </div>
      </article>`).join('');
  }
  const activityMore = $('#activity-more');
  if (activityMore) activityMore.innerHTML = data.activities.more.map(item => `<li>${esc(item)}</li>`).join('');
  const vjsaCard = $('#vjsa-card');
  if (vjsaCard) {
    vjsaCard.innerHTML = `
      <span class="section-kicker light">STUDENT COMMUNITY</span>
      <h3>${esc(data.activities.vjsa.title)}</h3>
      <p>${esc(data.activities.vjsa.description)}</p>
      <div class="pill-row">${data.activities.vjsa.values.map(v => `<span>${esc(v)}</span>`).join('')}</div>
      <p><strong>Cơ cấu:</strong> ${esc(data.activities.vjsa.departments.join(' · '))}</p>`;
  }

  // People
  const peopleNotice = $('#people-notice');
  if (peopleNotice) peopleNotice.textContent = data.people.notice;
  const peopleGrid = $('#people-grid');
  if (peopleGrid) {
    peopleGrid.innerHTML = data.people.profiles.map(person => {
      const initials = person.name.split(/\s+/).slice(0, 2).map(w => w[0]).join('').toUpperCase();
      return `
        <article class="person-card">
          <div class="person-avatar">${person.photo ? `<img src="${esc(person.photo)}" alt="Ảnh ${esc(person.name)}">` : esc(initials)}</div>
          <h3>${esc(person.name)}</h3>
          <span>${esc(person.role)}</span>
          <p>${esc(person.description)}</p>
          <div class="source-links">
            ${person.email ? `<a href="mailto:${esc(person.email)}">Email ↗</a>` : ''}
            ${person.profileUrl ? `<a href="${esc(person.profileUrl)}" target="_blank" rel="noopener noreferrer">Hồ sơ ↗</a>` : ''}
          </div>
        </article>`;
    }).join('');
  }

  // FAQ
  const faqList = $('#faq-list');
  if (faqList) {
    faqList.innerHTML = data.faq.items.map((item, index) => `
      <article class="faq-item" id="faq-${index}">
        <button class="faq-question" type="button" aria-expanded="false">
          <span>${esc(item.question)}</span><span class="faq-plus">+</span>
        </button>
        <div class="faq-answer"><p>${esc(item.answer)}</p><div class="tag-row">${item.tags.map(t => `<span>${esc(t)}</span>`).join('')}</div></div>
      </article>`).join('');
    $$('.faq-question').forEach(button => button.addEventListener('click', () => {
      const item = button.closest('.faq-item');
      const open = item.classList.toggle('open');
      button.setAttribute('aria-expanded', open ? 'true' : 'false');
    }));
  }

  // Search index
  const searchIndex = [];
  data.intro.paragraphs.forEach((p, i) => searchIndex.push({title: i === 0 ? 'Giới thiệu VJCBI' : 'Sứ mạng VJCBI', body: p, href: '#gioi-thieu-detail', type: 'Giới thiệu'}));
  data.intro.programs.forEach(p => searchIndex.push({title: `${p.code} · ${p.name}`, body: p.type, href: '#gioi-thieu-detail', type: 'Chương trình'}));
  data.rightsDuties.groups.forEach(group => group.items.forEach(item => searchIndex.push({title: item.title, body: item.text, href: `#${group.id}`, type: group.title})));
  data.activities.featured.forEach(item => searchIndex.push({title: item.title, body: `${item.description} ${item.owner}`, href: '#ngoai-khoa-detail', type: 'Hoạt động'}));
  data.activities.more.forEach(item => searchIndex.push({title: item, body: 'Hoạt động ngoại khóa VJCBI', href: '#ngoai-khoa-detail', type: 'Hoạt động'}));
  data.people.profiles.forEach(person => searchIndex.push({title: person.name, body: `${person.role} ${person.description}`, href: '#thay-co-detail', type: 'Liên hệ'}));
  data.faq.items.forEach((item, index) => searchIndex.push({title: item.question, body: `${item.answer} ${item.tags.join(' ')}`, href: `#faq-${index}`, type: 'Hỏi & đáp'}));

  const results = $('#searchResults');
  function normalize(text) {
    return String(text).toLocaleLowerCase('vi').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd');
  }
  function runSearch() {
    const raw = searchInput?.value.trim() || '';
    const q = normalize(raw);
    if (q.length < 2) {
      if (results) { results.hidden = true; results.innerHTML = ''; }
      return;
    }
    const terms = q.split(/\s+/).filter(Boolean);
    const matches = searchIndex.map(item => {
      const title = normalize(item.title);
      const haystack = normalize(`${item.title} ${item.body} ${item.type}`);
      let score = 0;
      terms.forEach(term => {
        if (title.includes(term)) score += 3;
        if (haystack.includes(term)) score += 1;
      });
      if (normalize(item.title).includes(q)) score += 5;
      return {...item, score};
    }).filter(item => item.score > 0).sort((a,b) => b.score - a.score).slice(0, 7);

    if (!results) return;
    results.hidden = false;
    results.innerHTML = matches.length ? matches.map(item => `
      <a class="search-result" href="${esc(item.href)}">
        <span>${esc(item.type)}</span>
        <strong>${esc(item.title)}</strong>
      </a>`).join('') : `<div class="search-empty">Chưa tìm thấy nội dung phù hợp. Thử từ khóa khác hoặc dùng Survival AI.</div>`;
  }
  searchInput?.addEventListener('input', runSearch);
  searchInput?.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      runSearch();
      const first = $('.search-result', results);
      if (first) first.click();
    }
  });
  document.addEventListener('click', e => {
    if (!e.target.closest('.search-wrap') && results) results.hidden = true;
  });

  // Open FAQ if navigated from search
  function openHashTarget() {
    if (!location.hash) return;
    const target = $(location.hash);
    if (target?.classList.contains('faq-item')) {
      target.classList.add('open');
      $('.faq-question', target)?.setAttribute('aria-expanded', 'true');
    }
  }
  window.addEventListener('hashchange', openHashTarget);
  openHashTarget();

  // AI links
  const aiUrl = data.settings.aiAssistantUrl?.trim();
  $$('[data-ai-link]').forEach(link => {
    if (aiUrl) link.href = aiUrl;
    else link.addEventListener('click', e => {
      e.preventDefault();
      alert('AI Assistant chưa được cấu hình. Admin dán link vào data.js → settings → aiAssistantUrl.');
    });
  });
})();
