
/* Core utilities */
(function(){'use strict';
  const AFF_TAG = window.__AFFILIATE_TAG__ || 'signupcodes-21';
  const MEASUREMENT_ID = window.__MEASUREMENT_ID__ || '';
  const qs = (sel, ctx=document)=>ctx.querySelector(sel);
  const qsa = (sel, ctx=document)=>Array.from(ctx.querySelectorAll(sel));

  // ---- Amazon link auto-rewrite & hygiene ----
  function rewriteAmazonLinks(){ 
    qsa('a[href*="amazon."]').forEach(a=>{
      try{
        const url = new URL(a.href, location.origin);
        if(!/amazon\./.test(url.host)) return;
        // Ensure tag param
        if(url.searchParams.get('tag') !== AFF_TAG) {
          url.searchParams.set('tag', AFF_TAG);
        }
        a.href = url.toString();
        // Required attributes
        a.setAttribute('target','_blank');
        a.setAttribute('rel','nofollow sponsored noopener noreferrer');
        a.classList.add('amazon-link');
      }catch(e){/* ignore */}
    });
  }

  // ---- Outbound click tracking (GA4) ----
  function isExternal(href){ try{const u=new URL(href, location.href); return u.host !== location.host;}catch(e){return false} }
  function isAmazon(href){ return /https?:\/\/[^\s]*amazon\./i.test(href); }

  function sendGAEvent(name, params){ 
    if(!window.gtag) return;
    window.gtag('event', name, params || {});
  }

  
  // ---- Sanitize all external links (noopener noreferrer) ----
  function sanitizeExternalLinks(){
    qsa('a[href]').forEach(a=>{
      const href = a.getAttribute('href');
      if(!href) return;
      if(isExternal(href)){
        const rel = (a.getAttribute('rel') || '').split(/\s+/);
        ['noopener','noreferrer'].forEach(token=>{ if(!rel.includes(token)) rel.push(token) });
        a.setAttribute('rel', rel.filter(Boolean).join(' ').trim());
      }
    });
  }

  function setupOutboundTracking(){
    document.addEventListener('click', function(e){
      const a = e.target.closest('a[href]');
      if(!a) return;
      const href = a.href;
      if(!isExternal(href)) return;
      const label = isAmazon(href) ? 'amazon' : 'external';
      sendGAEvent('outbound_click', {
        destination: href,
        link_text: (a.textContent||'').trim().slice(0,120),
        is_amazon: isAmazon(href),
        cta_variant: a.getAttribute('data-cta-variant') || 'n/a'
      });
    }, true);
  }

  // ---- Consent Mode & GA4 loader (only after consent) ----
  const CONSENT_KEY = 'sc.ga_consent';
  function applyConsent(consented){
    if(!window.gtag){ 
      window.dataLayer = window.dataLayer || [];
      function gtag(){ dataLayer.push(arguments); }
      window.gtag = gtag;
      gtag('consent', 'default', {
        'ad_storage': 'denied',
        'analytics_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied'
      });
    }
    const mode = consented ? 'granted' : 'denied';
    window.gtag('consent', 'update', {
      'analytics_storage': mode
    });
    if(consented && MEASUREMENT_ID && !window.__GA_LOADED__){ 
      window.__GA_LOADED__ = true;
      const s = document.createElement('script');
      s.async = true;
      s.src = 'https://www.googletagmanager.com/gtag/js?id=' + MEASUREMENT_ID;
      document.head.appendChild(s);
      window.dataLayer = window.dataLayer || [];
      window.gtag('js', new Date());
      window.gtag('config', MEASUREMENT_ID, {
        transport_type: 'beacon',
        anonymize_ip: true
      });
    }
  }

  function showConsentIfNeeded(){
    const val = localStorage.getItem(CONSENT_KEY);
    const consentEl = qs('#consent');
    if(!consentEl) return;
    if(val === 'granted'){ consentEl.classList.add('hidden'); applyConsent(true); }
    else if(val === 'denied'){ consentEl.classList.add('hidden'); applyConsent(false); }
    else {
      consentEl.classList.remove('hidden');
      applyConsent(false);
      consentEl.addEventListener('click', (e)=>{
        const btn = e.target.closest('[data-consent]');
        if(!btn) return;
        const choice = btn.getAttribute('data-consent') === 'accept' ? 'granted' : 'denied';
        localStorage.setItem(CONSENT_KEY, choice);
        consentEl.classList.add('hidden');
        applyConsent(choice === 'granted');
      });
    }
  }

  // ---- CTA variant experiments ----
  function setupCTAVariants(){
      const urlParams = new URLSearchParams(location.search);
      const variant = urlParams.get('ctaVariant'); // 'hero' | 'hero+mid' | 'hero+mid+end'
      if(!variant) return;
      const show = new Set(variant.split('+'));
      // Hide all then show chosen
      qsa('.cta-hero,.cta-mid,.cta-end').forEach(el=>el.style.display='none');
      if(show.has('hero')) qsa('.cta-hero').forEach(el=>el.style.display='block');
      if(show.has('mid')) qsa('.cta-mid').forEach(el=>el.style.display='block');
      if(show.has('end')) qsa('.cta-end').forEach(el=>el.style.display='block');
  }

  // ---- Seasonal category rotation (simple) ----
  function rotateHomeGrid(){
    const month = (new Date()).getMonth()+1; // 1-12
    // Example: ensure camping tents are prominent in summer months
    if(location.pathname==='/' && (month>=6 && month<=9)){
      // Move Camping Tents card to the top of the grid
      const grid = qs('.grid');
      if(!grid) return;
      const tents = Array.from(grid.querySelectorAll('.card h3 a')).find(a=>/Camping Tents/i.test(a.textContent||''));
      if(tents) grid.prepend(tents.closest('.card'));
    }
  }

  document.addEventListener('DOMContentLoaded', function(){
    rewriteAmazonLinks();
    setupOutboundTracking();
    showConsentIfNeeded();
    setupCTAVariants();
    rotateHomeGrid();
    sanitizeExternalLinks();
  });
})();
