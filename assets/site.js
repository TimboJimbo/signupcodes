
(function(){
  // External link hygiene
  const isExternal = (href) => {
    try { const u = new URL(href, location.href); return u.origin !== location.origin; } catch(e){ return false; }
  };
  document.querySelectorAll('a[href]').forEach(a=>{
    const href = a.getAttribute('href');
    if(!href) return;
    if(isExternal(href)){
      a.setAttribute('target','_blank');
      let rel = (a.getAttribute('rel')||'').split(/\s+/);
      ['noopener','noreferrer'].forEach(x=>{ if(!rel.includes(x)) rel.push(x); });
      a.setAttribute('rel', rel.filter(Boolean).join(' '));
    }
  });

  // Cookie consent (UK-friendly neutral messaging)
  try{
    if(!localStorage.getItem('cookieconsent')){
      const bar = document.createElement('div');
      bar.className='cookiebar';
      bar.innerHTML = '<span>We use cookies for basic site functionality and analytics. <a href="/privacy.html">Learn more</a>.</span><button class="btn">OK</button>';
      bar.querySelector('.btn').onclick = ()=>{ localStorage.setItem('cookieconsent','1'); bar.remove(); };
      document.body.appendChild(bar);
    }
  }catch(e){}

  // Image fallback
  document.querySelectorAll('img').forEach(img=>{
    img.addEventListener('error', function(){
      if(this.dataset && this.dataset.fallback) {
        this.src = this.dataset.fallback;
      } else {
        this.src = '/assets/fallback-amazon-uk.png';
      }
    }, {once:true});
  });
})();
