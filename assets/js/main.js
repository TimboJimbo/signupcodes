
(function(){'use strict';
  const AFF_TAG = window.__AFFILIATE_TAG__ || 'signupcodes-21';
  const MEASUREMENT_ID = window.__MEASUREMENT_ID__ || '';
  const qs = (sel, ctx=document)=>ctx.querySelector(sel);
  const qsa = (sel, ctx=document)=>Array.from(ctx.querySelectorAll(sel));

  // ---- Amazon TLD selector & rewriter ----
  const TLD_KEY = 'sc.amazon_tld';
  const VALID_TLDS = new Set(['co.uk','com','de','ca','com.au']);
  function getInitialTLD(){
    const qp = new URLSearchParams(location.search);
    const tldParam = qp.get('tld');
    if(tldParam && VALID_TLDS.has(tldParam)){ localStorage.setItem(TLD_KEY, tldParam); return tldParam; }
    const stored = localStorage.getItem(TLD_KEY);
    if(stored && VALID_TLDS.has(stored)) return stored;
    return 'co.uk'; // default aligns with -21 tag
  }
  function setTLD(tld){
    if(!VALID_TLDS.has(tld)) return;
    localStorage.setItem(TLD_KEY, tld);
    applyAmazonTLD();
    sendGAEvent('locale_change', { selected_tld: tld });
  }
  function applyAmazonTLD(){
    const tld = getInitialTLD();
    qsa('a[href*="amazon."]').forEach(a=>{
      try{ const u=new URL(a.href, location.origin); if(!/amazon\./.test(u.host)) return;
        const parts=u.host.split('.'); const sub=parts.slice(0,-2).join('.')||'www'; u.host=sub+'.amazon.'+tld; a.href=u.toString(); }catch(e){}
    });
    const sel = qs('#amazon-tld'); if(sel) sel.value=tld;
  }

  // ---- Amazon link rewrite & hygiene ----
  function rewriteAmazonLinks(){
    qsa('a[href*="amazon."]').forEach(a=>{
      try{ const url=new URL(a.href, location.origin);
        if(!/amazon\./.test(url.host)) return;
        if(url.searchParams.get('tag') !== AFF_TAG) url.searchParams.set('tag', AFF_TAG);
        a.href=url.toString();
        a.setAttribute('target','_blank');
        a.setAttribute('rel','nofollow sponsored noopener noreferrer');
        a.classList.add('amazon-link');
      }catch(e){}
    });
  }

  // ---- Outbound click tracking (GA4) ----
  function isExternal(href){ try{const u=new URL(href, location.href); return u.host !== location.host;}catch(e){return false} }
  function isAmazon(href){ return /https?:\/\/[^\s]*amazon\./i.test(href); }
  function sendGAEvent(name, params){ if(!window.gtag) return; window.gtag('event', name, params||{}); }
  function setupOutboundTracking(){
    document.addEventListener('click', function(e){
      const a = e.target.closest('a[href]'); if(!a) return;
      const href = a.href; if(!isExternal(href)) return;
      sendGAEvent('outbound_click', {
        destination: href, link_text: (a.textContent||'').trim().slice(0,120),
        is_amazon: isAmazon(href), cta_variant: a.getAttribute('data-cta-variant') || 'n/a'
      });
    }, true);
  }

  // ---- Consent Mode & GA4 loader (after consent only) ----
  const CONSENT_KEY = 'sc.ga_consent';
  function applyConsent(consented){
    if(!window.gtag){ window.dataLayer=window.dataLayer||[]; window.gtag=function(){dataLayer.push(arguments);};
      gtag('consent','default',{'ad_storage':'denied','analytics_storage':'denied','ad_user_data':'denied','ad_personalization':'denied'});
    }
    const mode = consented ? 'granted' : 'denied';
    gtag('consent','update',{'analytics_storage':mode});
    if(consented && MEASUREMENT_ID && !window.__GA_LOADED__){ window.__GA_LOADED__=true;
      const s=document.createElement('script'); s.async=true; s.src='https://www.googletagmanager.com/gtag/js?id='+MEASUREMENT_ID; document.head.appendChild(s);
      window.dataLayer=window.dataLayer||[]; gtag('js', new Date()); gtag('config', MEASUREMENT_ID, { transport_type:'beacon', anonymize_ip:true });
    }
  }
  function showConsentIfNeeded(){
    const val=localStorage.getItem(CONSENT_KEY); const el=qs('#consent');
    if(!el) return;
    if(val==='granted'){ el.classList.add('hidden'); applyConsent(true); }
    else if(val==='denied'){ el.classList.add('hidden'); applyConsent(false); }
    else{ el.classList.remove('hidden'); applyConsent(false);
      el.addEventListener('click', (e)=>{ const btn=e.target.closest('[data-consent]'); if(!btn) return;
        const choice=btn.getAttribute('data-consent')==='accept'?'granted':'denied'; localStorage.setItem(CONSENT_KEY, choice);
        el.classList.add('hidden'); applyConsent(choice==='granted'); });
    }
  }

  // ---- Sanitize all external links ----
  function sanitizeExternalLinks(){
    qsa('a[href]').forEach(a=>{ const href=a.getAttribute('href'); if(!href) return; if(isExternal(href)){ const rel=(a.getAttribute('rel')||'').split(/\s+/); ['noopener','noreferrer'].forEach(t=>{if(!rel.includes(t)) rel.push(t)}); a.setAttribute('rel', rel.filter(Boolean).join(' ').trim()); } });
  }

  // ---- CTA variant experiments ----
  function setupCTAVariants(){
      const variant = new URLSearchParams(location.search).get('ctaVariant');
      if(!variant) return;
      const show = new Set(variant.split('+'));
      qsa('.cta-hero,.cta-mid,.cta-end').forEach(el=>el.style.display='none');
      if(show.has('hero')) qsa('.cta-hero').forEach(el=>el.style.display='block');
      if(show.has('mid')) qsa('.cta-mid').forEach(el=>el.style.display='block');
      if(show.has('end')) qsa('.cta-end').forEach(el=>el.style.display='block');
  }

  // ---- Seasonal rotation ----
  function rotateHomeGrid(){
    const month=(new Date()).getMonth()+1;
    if(location.pathname==='/' && (month>=6 && month<=9)){ const grid=qs('.grid'); if(!grid) return; const tents=Array.from(grid.querySelectorAll('.card h3 a')).find(a=>/Camping Tents/i.test(a.textContent||'')); if(tents) grid.prepend(tents.closest('.card')); }
  }

  document.addEventListener('DOMContentLoaded', function(){
    rewriteAmazonLinks();
    applyAmazonTLD();
    setupOutboundTracking();
    showConsentIfNeeded();
    setupCTAVariants();
    rotateHomeGrid();
    sanitizeExternalLinks();
    // Hook selector if present
    const sel = qs('#amazon-tld'); if(sel) sel.addEventListener('change', e=>setTLD(e.target.value));
  });
})();
