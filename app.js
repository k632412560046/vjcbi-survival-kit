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

  // Embedded Survival AI
  const aiPanel = $('#aiPanel');
  const aiBackdrop = $('#aiBackdrop');
  const aiClose = $('#aiClose');
  const aiFab = $('#aiFab');
  const aiMessages = $('#aiMessages');
  const aiForm = $('#aiForm');
  const aiInput = $('#aiInput');
  const aiSend = $('#aiSend');
  const aiSuggestions = $('#aiSuggestions');
  const aiApiUrl = data.settings.aiApiUrl || '/api/chat';
  const aiHistory = [];
  let aiBusy = false;

  function openAI(prefill='') {
    aiPanel?.classList.add('open');
    aiPanel?.setAttribute('aria-hidden','false');
    if (aiBackdrop) aiBackdrop.hidden = false;
    document.body.classList.add('ai-open');
    if (prefill && aiInput) aiInput.value = prefill;
    setTimeout(() => aiInput?.focus(), 150);
  }
  function closeAI() {
    aiPanel?.classList.remove('open');
    aiPanel?.setAttribute('aria-hidden','true');
    if (aiBackdrop) aiBackdrop.hidden = true;
    document.body.classList.remove('ai-open');
  }
  $$('[data-ai-link]').forEach(link => link.addEventListener('click', e => { e.preventDefault(); openAI(); }));
  aiFab?.addEventListener('click', () => openAI());
  aiClose?.addEventListener('click', closeAI);
  aiBackdrop?.addEventListener('click', closeAI);
  window.addEventListener('keydown', e => { if (e.key === 'Escape' && aiPanel?.classList.contains('open')) closeAI(); });

  function addAIMessage(role, text, sources=[]) {
    if (!aiMessages) return;
    const wrap=document.createElement('div');
    wrap.className=`ai-message ${role}`;
    const bubble=document.createElement('div');
    bubble.className='ai-bubble';
    bubble.textContent=text;
    wrap.appendChild(bubble);
    if (role === 'assistant' && sources?.length) {
      const src=document.createElement('div'); src.className='ai-sources';
      const label=document.createElement('span'); label.textContent='Nguồn liên quan'; src.appendChild(label);
      sources.forEach(s=>{
        const el=s.url ? document.createElement('a') : document.createElement('button');
        if (s.url) { el.href=s.url; el.target='_blank'; el.rel='noopener noreferrer'; }
        else el.type='button';
        el.textContent=`${s.id || 'Nguồn'} · ${s.title || s.category || 'Survival Kit'}`;
        src.appendChild(el);
      });
      wrap.appendChild(src);
    }
    aiMessages.appendChild(wrap);
    aiMessages.scrollTop=aiMessages.scrollHeight;
    return wrap;
  }
  function addTyping() {
    const wrap=document.createElement('div'); wrap.className='ai-message assistant ai-typing-wrap';
    wrap.innerHTML='<div class="ai-bubble ai-typing"><i></i><i></i><i></i></div>';
    aiMessages?.appendChild(wrap); aiMessages.scrollTop=aiMessages.scrollHeight; return wrap;
  }
  async function askAI(question) {
    const q=String(question||'').trim();
    if (!q || aiBusy) return;
    aiBusy=true; aiSend?.setAttribute('disabled',''); aiInput?.setAttribute('disabled','');
    aiSuggestions?.classList.add('used');
    addAIMessage('user',q);
    if (aiInput) { aiInput.value=''; aiInput.style.height='auto'; }
    const typing=addTyping();
    try {
      const response=await fetch(aiApiUrl, {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({message:q,history:aiHistory.slice(-6)})
      });
      const payload=await response.json().catch(()=>({}));
      typing?.remove();
      if (!response.ok) throw new Error(payload.error || 'AI chưa phản hồi được.');
      addAIMessage('assistant', payload.answer || 'Mình chưa có câu trả lời.', payload.sources || []);
      aiHistory.push({role:'user',content:q},{role:'assistant',content:payload.answer || ''});
      if (aiHistory.length>10) aiHistory.splice(0,aiHistory.length-10);
    } catch (err) {
      typing?.remove();
      addAIMessage('assistant', `${err.message || 'Có lỗi khi kết nối AI.'} Vui lòng thử lại sau.`);
    } finally {
      aiBusy=false; aiSend?.removeAttribute('disabled'); aiInput?.removeAttribute('disabled'); aiInput?.focus();
    }
  }
  aiForm?.addEventListener('submit', e=>{e.preventDefault(); askAI(aiInput?.value);});
  aiInput?.addEventListener('keydown', e=>{
    if (e.key==='Enter' && !e.shiftKey) { e.preventDefault(); askAI(aiInput.value); }
  });
  aiInput?.addEventListener('input', ()=>{
    aiInput.style.height='auto'; aiInput.style.height=Math.min(aiInput.scrollHeight,120)+'px';
  });
  aiSuggestions?.querySelectorAll('button').forEach(btn=>btn.addEventListener('click',()=>askAI(btn.textContent)));

})();
