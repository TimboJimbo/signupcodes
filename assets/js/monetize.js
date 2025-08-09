// GA4 and AdSense are loaded in <head>. This file adds affiliate safeguards and behaviors.
document.addEventListener('DOMContentLoaded', ()=>{
  // Append signupcodes-21 to any Amazon link missing tag
  document.querySelectorAll('a[href*="amazon."]').forEach(a=>{
    try{
      const u = new URL(a.href, location.href);
      if(!u.searchParams.get('tag')) u.searchParams.set('tag','signupcodes-21');
      a.href = u.toString();
    }catch(e){}
  });
  // Mark external Amazon links as sponsored noopener
  document.querySelectorAll('a[href*="amazon."]').forEach(a=>{
    if(!a.rel) a.rel = "nofollow sponsored noopener";
    else if(!/sponsored/.test(a.rel)) a.rel += " sponsored";
  });
});