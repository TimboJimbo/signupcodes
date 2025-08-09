
(function(){
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  gtag('consent','default',{
    ad_user_data:'denied',
    ad_personalization:'denied',
    ad_storage:'denied',
    analytics_storage:'denied',
    functionality_storage:'granted',
    security_storage:'granted'
  });
  try{
    var c = JSON.parse(localStorage.getItem('sc_consent_v2')||'{}');
    if(c.choice==='accept'){
      gtag('consent','update',{ad_user_data:'granted',ad_personalization:'granted',ad_storage:'granted',analytics_storage:'granted'});
    }
  }catch(e){}
  function inject(){
    if(document.getElementById('sc-consent')) return;
    var el=document.createElement('div');
    el.id='sc-consent';
    el.style.cssText='position:fixed;left:0;right:0;bottom:0;background:#111827;color:#fff;padding:14px;z-index:9999;border-top:2px solid #dc2626;display:flex;gap:12px;align-items:center;flex-wrap:wrap';
    el.innerHTML='<div style="flex:1;min-width:220px">We use cookies for analytics and ads. <a href="/privacy.html" style="color:#93c5fd">Learn more</a>.</div>'+
                 '<div style="display:flex;gap:8px"><button id="sc-acc" style="background:#16a34a;color:#fff;border:0;padding:10px 14px;border-radius:8px;min-width:120px">Accept</button>'+
                 '<button id="sc-rej" style="background:#374151;color:#fff;border:0;padding:10px 14px;border-radius:8px;min-width:120px">Reject</button>'+
                 '<a href="/privacy.html#manage" style="background:#f59e0b;color:#111827;border:0;padding:10px 14px;border-radius:8px;min-width:120px;text-decoration:none;text-align:center">Manage</a></div>';
    document.body.appendChild(el);
    document.getElementById('sc-acc').onclick=function(){gtag('consent','update',{ad_user_data:'granted',ad_personalization:'granted',ad_storage:'granted',analytics_storage:'granted'});try{localStorage.setItem('sc_consent_v2',JSON.stringify({choice:'accept',ts:Date.now()}));}catch(e){};el.remove();};
    document.getElementById('sc-rej').onclick=function(){try{localStorage.setItem('sc_consent_v2',JSON.stringify({choice:'reject',ts:Date.now()}));}catch(e){};el.remove();};
  }
  document.addEventListener('DOMContentLoaded', function(){ try{var c=JSON.parse(localStorage.getItem('sc_consent_v2')||'{}'); if(!c.choice) inject();}catch(e){inject();} });
})();