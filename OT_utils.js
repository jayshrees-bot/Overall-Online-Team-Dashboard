// ── SHARED UTILITIES ──
const LOGO = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcng9IjE0IiBmaWxsPSIjOUMyN0IwIi8+PHBvbHlnb24gcG9pbnRzPSI2OS4wLDY4LjAgNzIuNCw3Mi42IDY5LjAsNzYuMCA2NS42LDcyLjYiIGZpbGw9IndoaXRlIi8+PHBvbHlnb24gcG9pbnRzPSI3Ny4wLDc2LjAgNzIuNCw3Mi42IDY5LjAsNzYuMCA3Mi40LDc5LjMiIGZpbGw9IndoaXRlIi8+PHBvbHlnb24gcG9pbnRzPSI2OS4wLDg0LjAgNzIuNCw3OS4zIDY5LjAsNzYuMCA2NS42LDc5LjMiIGZpbGw9IndoaXRlIi8+PHBvbHlnb24gcG9pbnRzPSI2MS4wLDc2LjAgNjUuNiw3Mi42IDY5LjAsNzYuMCA2NS42LDc5LjMiIGZpbGw9IndoaXRlIi8+PHBvbHlnb24gcG9pbnRzPSI1NC4wLDcyLjAgNTcuNCw3Ni42IDU0LjAsODAuMCA1MC42LDc2LjYiIGZpbGw9IndoaXRlIi8+PHBvbHlnb24gcG9pbnRzPSI2Mi4wLDgwLjAgNTcuNCw3Ni42IDU0LjAsODAuMCA1Ny40LDgzLjQiIGZpbGw9IndoaXRlIi8+PHBvbHlnb24gcG9pbnRzPSI1NC4wLDg4LjAgNTcuNCw4My40IDU0LjAsODAuMCA1MC42LDgzLjQiIGZpbGw9IndoaXRlIi8+PHBvbHlnb24gcG9pbnRzPSI0Ni4wLDgwLjAgNTAuNiw3Ni42IDU0LjAsODAuMCA1MC42LDgzLjQiIGZpbGw9IndoaXRlIi8+PHBvbHlnb24gcG9pbnRzPSIzOS4wLDY4LjAgNDIuNCw3Mi42IDM5LjAsNzYuMCAzNS42LDcyLjYiIGZpbGw9IndoaXRlIi8+PHBvbHlnb24gcG9pbnRzPSI0Ny4wLDc2LjAgNDIuNCw3Mi42IDM5LjAsNzYuMCA0Mi40LDc5LjMiIGZpbGw9IndoaXRlIi8+PHBvbHlnb24gcG9pbnRzPSIzOS4wLDg0LjAgNDIuNCw3OS4zIDM5LjAsNzYuMCAzNS42LDc5LjMiIGZpbGw9IndoaXRlIi8+PHBvbHlnb24gcG9pbnRzPSIzMS4wLDc2LjAgMzUuNiw3Mi42IDM5LjAsNzYuMCAzNS42LDc5LjMiIGZpbGw9IndoaXRlIi8+PHBvbHlnb24gcG9pbnRzPSIyOC4wLDU3LjAgMzEuNCw2MS42IDI4LjAsNjUuMCAyNC43LDYxLjYiIGZpbGw9IndoaXRlIi8+PHBvbHlnb24gcG9pbnRzPSIzNi4wLDY1LjAgMzEuNCw2MS42IDI4LjAsNjUuMCAzMS40LDY4LjQiIGZpbGw9IndoaXRlIi8+PHBvbHlnb24gcG9pbnRzPSIyOC4wLDczLjAgMzEuNCw2OC40IDI4LjAsNjUuMCAyNC43LDY4LjQiIGZpbGw9IndoaXRlIi8+PHBvbHlnb24gcG9pbnRzPSIyMC4wLDY1LjAgMjQuNyw2MS42IDI4LjAsNjUuMCAyNC43LDY4LjQiIGZpbGw9IndoaXRlIi8+PHBvbHlnb24gcG9pbnRzPSIyNC4wLDQyLjAgMjcuNCw0Ni42IDI0LjAsNTAuMCAyMC42LDQ2LjYiIGZpbGw9IndoaXRlIi8+PHBvbHlnb24gcG9pbnRzPSIzMi4wLDUwLjAgMjcuNCw0Ni42IDI0LjAsNTAuMCAyNy40LDUzLjQiIGZpbGw9IndoaXRlIi8+PHBvbHlnb24gcG9pbnRzPSIyNC4wLDU4LjAgMjcuNCw1My40IDI0LjAsNTAuMCAyMC42LDUzLjQiIGZpbGw9IndoaXRlIi8+PHBvbHlnb24gcG9pbnRzPSIxNi4wLDUwLjAgMjAuNiw0Ni42IDI0LjAsNTAuMCAyMC42LDUzLjQiIGZpbGw9IndoaXRlIi8+PHBvbHlnb24gcG9pbnRzPSIyOC4wLDI3LjAgMzEuNCwzMS42IDI4LjAsMzUuMCAyNC43LDMxLjYiIGZpbGw9IndoaXRlIi8+PHBvbHlnb24gcG9pbnRzPSIzNi4wLDM1LjAgMzEuNCwzMS42IDI4LjAsMzUuMCAzMS40LDM4LjQiIGZpbGw9IndoaXRlIi8+PHBvbHlnb24gcG9pbnRzPSIyOC4wLDQzLjAgMzEuNCwzOC40IDI4LjAsMzUuMCAyNC43LDM4LjQiIGZpbGw9IndoaXRlIi8+PHBvbHlnb24gcG9pbnRzPSIyMC4wLDM1LjAgMjQuNywzMS42IDI4LjAsMzUuMCAyNC43LDM4LjQiIGZpbGw9IndoaXRlIi8+PHBvbHlnb24gcG9pbnRzPSIzOS4wLDE2LjAgNDIuNCwyMC43IDM5LjAsMjQuMCAzNS42LDIwLjciIGZpbGw9IndoaXRlIi8+PHBvbHlnb24gcG9pbnRzPSI0Ny4wLDI0LjAgNDIuNCwyMC43IDM5LjAsMjQuMCA0Mi40LDI3LjQiIGZpbGw9IndoaXRlIi8+PHBvbHlnb24gcG9pbnRzPSIzOS4wLDMyLjAgNDIuNCwyNy40IDM5LjAsMjQuMCAzNS42LDI3LjQiIGZpbGw9IndoaXRlIi8+PHBvbHlnb24gcG9pbnRzPSIzMS4wLDI0LjAgMzUuNiwyMC43IDM5LjAsMjQuMCAzNS42LDI3LjQiIGZpbGw9IndoaXRlIi8+PHBvbHlnb24gcG9pbnRzPSI1NC4wLDEyLjAgNTcuNCwxNi42IDU0LjAsMjAuMCA1MC42LDE2LjYiIGZpbGw9IndoaXRlIi8+PHBvbHlnb24gcG9pbnRzPSI2Mi4wLDIwLjAgNTcuNCwxNi42IDU0LjAsMjAuMCA1Ny40LDIzLjQiIGZpbGw9IndoaXRlIi8+PHBvbHlnb24gcG9pbnRzPSI1NC4wLDI4LjAgNTcuNCwyMy40IDU0LjAsMjAuMCA1MC42LDIzLjQiIGZpbGw9IndoaXRlIi8+PHBvbHlnb24gcG9pbnRzPSI0Ni4wLDIwLjAgNTAuNiwxNi42IDU0LjAsMjAuMCA1MC42LDIzLjQiIGZpbGw9IndoaXRlIi8+PHBvbHlnb24gcG9pbnRzPSI2OS4wLDE2LjAgNzIuNCwyMC43IDY5LjAsMjQuMCA2NS42LDIwLjciIGZpbGw9IndoaXRlIi8+PHBvbHlnb24gcG9pbnRzPSI3Ny4wLDI0LjAgNzIuNCwyMC43IDY5LjAsMjQuMCA3Mi40LDI3LjQiIGZpbGw9IndoaXRlIi8+PHBvbHlnb24gcG9pbnRzPSI2OS4wLDMyLjAgNzIuNCwyNy40IDY5LjAsMjQuMCA2NS42LDI3LjQiIGZpbGw9IndoaXRlIi8+PHBvbHlnb24gcG9pbnRzPSI2MS4wLDI0LjAgNjUuNiwyMC43IDY5LjAsMjQuMCA2NS42LDI3LjQiIGZpbGw9IndoaXRlIi8+PC9zdmc+';

const SUBTEAM_COLORS = {
  'Clive':'#7c3aed','Email':'#2563eb','Experience':'#16a34a','OMNI':'#0891b2',
  'Post Sale - Inbound':'#c8a846','Post Sale - Outbound':'#ea580c',
  'Post Sale - Whatsapp':'#be185d','Presale - Inbound':'#16a34a',
  'Presale - Outbound':'#0891b2','WhatsApp':'#6d28d9','TAH':'#dc2626'
};

function getAVColor(subteam) {
  return SUBTEAM_COLORS[subteam] || '#8a7a60';
}

function initials(name) {
  return name.split('_').filter(Boolean).map(p=>p[0].toUpperCase()).join('').slice(0,2);
}

function cqClass(cq) {
  if(cq>=95) return {bar:'bg',pct:'cg',label:'Excellent'};
  if(cq>=90) return {bar:'bg',pct:'cg',label:'Good'};
  if(cq>=80) return {bar:'bgg',pct:'cgg',label:'Average'};
  return {bar:'bo',pct:'co',label:'Needs Improvement'};
}

function toggleDark() {
  const h = document.documentElement;
  const d = h.getAttribute('data-theme')==='dark';
  h.setAttribute('data-theme', d?'light':'dark');
  const btn = document.getElementById('dmBtn');
  if(btn) btn.textContent = d ? '🌙 Dark' : '☀️ Light';
  localStorage.setItem('cq-theme', d?'light':'dark');
}

(function(){
  const s = localStorage.getItem('cq-theme');
  if(s==='dark') {
    document.documentElement.setAttribute('data-theme','dark');
    document.addEventListener('DOMContentLoaded', ()=>{
      const b = document.getElementById('dmBtn');
      if(b) b.textContent='☀️ Light';
    });
  }
})();

function countUp(el, target, suffix, dur) {
  const st = performance.now();
  const fn = now => {
    const p = Math.min((now-st)/dur,1), e=1-Math.pow(1-p,3);
    el.textContent = Math.round(target*e)+(suffix||'');
    if(p<1) requestAnimationFrame(fn);
  };
  requestAnimationFrame(fn);
}

function animateBars() {
  document.querySelectorAll('.bar-fill[data-w]').forEach(b => {
    setTimeout(() => { b.style.width = b.getAttribute('data-w')+'%'; }, 200);
  });
}

function renderHeader(activePage) {
  const pages = [
    {href:'index.html', label:'Overview'},
    {href:'presales.html', label:'Presales'},
    {href:'postsales.html', label:'Postsales'},
    {href:'queries.html', label:'Customer Queries'},
    {href:'findings.html', label:'Findings & AOIs'},
  ];
  const nav = pages.map(p=>
    `<a href="${p.href}" class="nav-link${activePage===p.href?' active':''}">${p.label}</a>`
  ).join('');
  return `<header class="hdr">
    <div class="hdr-logo-wrap">
      <img src="${LOGO}" style="width:34px;height:34px;border-radius:6px;" alt="CL">
      <div class="hdr-brand"><div class="hdr-name">CaratLane</div><div class="hdr-tata">A Tata Product</div></div>
    </div>
    <div class="hdr-sep"></div>
    <div class="hdr-title">CQ Dashboard &nbsp;&middot;&nbsp; Online Team &nbsp;&middot;&nbsp; March 2026</div>
    <nav class="hdr-nav">${nav}</nav>
    <div class="hdr-actions">
      <button class="pdf-btn" onclick="window.print()">⬇ PDF</button>
      <button class="dm-btn" id="dmBtn" onclick="toggleDark()">🌙 Dark</button>
    </div>
  </header>`;
}

function renderFooter(page) {
  return `<footer class="footer">
    <div class="ft-l">
      <img src="${LOGO}" style="height:26px;width:26px;border-radius:4px;" alt="CL">
      <div><div class="ft-brand">CaratLane</div><div class="ft-tata">A Tata Product</div></div>
    </div>
    <div class="ft-r"><strong>CQ Dashboard — Online Team</strong><br>March 2026 · Quality Assurance</div>
  </footer>`;
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.querySelectorAll('[data-cu]').forEach(el => {
      countUp(el, parseInt(el.getAttribute('data-cu')), el.getAttribute('data-suf')||'', 1200);
    });
  }, 300);
  animateBars();
});
