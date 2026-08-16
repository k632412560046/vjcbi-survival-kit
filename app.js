
const menuBtn=document.getElementById('menuBtn');
const mainNav=document.getElementById('mainNav');
menuBtn?.addEventListener('click',()=>{const open=mainNav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open)});
mainNav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>mainNav.classList.remove('open')));
const search=document.getElementById('searchInput');
window.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();search?.focus()}});
search?.addEventListener('keydown',e=>{if(e.key==='Enter'){const q=search.value.trim();if(!q)return;alert('Prototype: sau khi kết nối database, tìm kiếm sẽ trả kết quả cho “'+q+'”.')}});
