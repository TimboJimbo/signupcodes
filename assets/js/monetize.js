// GA4 + AdSense + Amazon tag safeguard
(function(){'use strict';
  // GA4
  if(!window.gtag){var s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id=G-2LGPRK5NX6';document.head.appendChild(s);
    window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments);};gtag('js', new Date());gtag('config','G-2LGPRK5NX6');}
  // AdSense Auto Ads
  if(!window._adsbygoogle_loaded){var a=document.createElement('script');a.async=true;a.src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8757905862194096';a.setAttribute('crossorigin','anonymous');document.head.appendChild(a);window._adsbygoogle_loaded=true;}
  // Append tag to all Amazon links
  document.addEventListener('DOMContentLoaded',function(){
    document.querySelectorAll('a[href*="amazon."]').forEach(function(el){
      try{var u=new URL(el.href);if(!u.searchParams.get('tag'))u.searchParams.set('tag','signupcodes-21');el.href=u.toString();}catch(e){}
    });
  });
})();