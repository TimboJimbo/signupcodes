
(function(){
  const TAG = "signupcodes-20";

  // Consent Mode v2 will be set in <head> (default denied). Here we only do events.

  // Safety net: tag amazon.* links & attach tracking
  function isAmazonHost(h){ return /(^|\.)amazon\./i.test(h); }
  function ensureTag(url){
    try {
      const u = new URL(url, location.origin);
      if (!isAmazonHost(u.hostname)) return url;
      if (!u.searchParams.get('tag')) u.searchParams.set('tag', TAG);
      return u.toString();
    } catch(e){ return url; }
  }

  function getVariant(){
    try{
      let v = localStorage.getItem('cta_variant');
      if(!v){ v = (Math.random()<0.5 ? 'A' : 'B'); localStorage.setItem('cta_variant', v); }
      return v;
    }catch(e){ return 'A'; }
  }

  document.addEventListener('DOMContentLoaded', function(){
    const variant = getVariant(); // A: "View on Amazon" | B: "See Price on Amazon"

    // Tag & track amazon links
    document.querySelectorAll('a[href*="amazon."]').forEach(a=>{
      const fixed = ensureTag(a.href);
      if (fixed !== a.href) a.href = fixed;

      // Apply CTA text experiment on product CTAs (heuristic: .btn class)
      if (a.classList.contains('btn')) {
        if (variant === 'B') a.textContent = 'See Price on Amazon';
        a.dataset.ctaVariant = variant;
      }

      a.addEventListener('click', function(){
        let asin = null;
        const m = a.href.match(/\/dp\/([A-Z0-9]{10})/i);
        if (m) asin = m[1];
        const label = a.getAttribute('data-label') || a.textContent.trim().slice(0,60);
        try{
          gtag('event','affiliate_click',{
            event_category:'monetization',
            event_label:label,
            asin:asin,
            page_path:location.pathname,
            cta_variant: a.dataset.ctaVariant || 'A'
          });
        }catch(e){}
      });
    });

    // Track sticky/rail clicks separately
    function tagDeal(a, label){
      a.addEventListener('click', function(){
        try{
          gtag('event','deal_nav_click',{
            event_category:'navigation',
            event_label: label || a.textContent.trim(),
            page_path: location.pathname
          });
        }catch(e){}
      });
    }
    document.querySelectorAll('.nav-bottom a').forEach(a=>tagDeal(a, a.getAttribute('data-label')));
    document.querySelectorAll('.rail a').forEach(a=>tagDeal(a, a.getAttribute('data-label')));

    // Deal Sheet modal — once per session + a11y focus trap
    const modal = document.getElementById('dealSheet');
    if (modal){
      const KEY='dealSheetShown';
      function openModal(){
        try{ if(sessionStorage.getItem(KEY)) return; }catch(e){}
        modal.setAttribute('open','');
        try{ sessionStorage.setItem(KEY,'1'); }catch(e){}
        const focusable = modal.querySelectorAll('a,button,[tabindex]:not([tabindex="-1"])');
        const first = focusable[0], last = focusable[focusable.length-1];
        (first||modal).focus();
        function keyHandler(e){
          if(e.key==='Tab'){
            if(e.shiftKey && document.activeElement===first){ e.preventDefault(); (last||first).focus(); }
            else if(!e.shiftKey && document.activeElement===last){ e.preventDefault(); (first||last).focus(); }
          }
          if(e.key==='Escape'){ closeModal(); }
        }
        modal.addEventListener('keydown', keyHandler);
      }
      function closeModal(){ modal.removeAttribute('open'); }
      setTimeout(openModal, 12000);
      document.addEventListener('mouseleave', (e)=>{ if(e.clientY<=0) openModal(); }, {once:true});
      const closeBtn = modal.querySelector('.close');
      if (closeBtn) closeBtn.addEventListener('click', closeModal);
      modal.addEventListener('click', (e)=>{ if(e.target===modal) closeModal(); });
    }
  });
})();
