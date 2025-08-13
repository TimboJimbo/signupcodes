
// GA4: swap with your Measurement ID
window.SC_GA4 = { enabled: true, id: "G-2LGPRK5NX6" };


  // Ensure buttons are anchors for accessibility/fallback
  function promoteToAnchor(el, url){
     // If element is a button, wrap it in an <a> or set attributes
     if (el.tagName.toLowerCase() === 'button') {
        el.setAttribute('data-url', url);
        el.setAttribute('aria-label','Open Amazon in a new tab');
        // also mirror to parent link if exists
        const a = document.createElement('a');
        a.className = el.className;
        a.textContent = el.textContent || 'View on Amazon';
        a.href = url;
        a.target = '_blank';
        a.rel = 'sponsored nofollow noopener';
        a.addEventListener('click', scOutbound);
        el.replaceWith(a);
        return a;
     } else {
        el.href = url;
        el.target = '_blank';
        el.rel = 'sponsored nofollow noopener';
        return el;
     }
  }

// Amazon affiliate
window.SC_AMZ = {
  tagUS: "signupcodes-20",
  // Use Amazon OneLink if the account is configured; we still build clean Amazon.com links by default.
  buildSearchURL(query){
     const base = "https://www.amazon.com/s";
     const params = new URLSearchParams({ k: query, tag: this.tagUS, ref: "sc_search" });
     return `${base}?${params.toString()}`;
  },
  // If you have ASINs, you can swap to this:
  buildAsinURL(asin){
     const base = `https://www.amazon.com/dp/${asin}`;
     const params = new URLSearchParams({ tag: this.tagUS, ref: "sc_dp" });
     return `${base}?${params.toString()}`;
  }
};

// Outbound click handler
function scOutbound(event){
  const el = event.currentTarget;
  const url = el.dataset.url;
  if(!url) return;
  try{
    if (window.gtag && window.SC_GA4.enabled) {
      gtag('event','click_out',{
        'event_category':'affiliate',
        'event_label': url,
        'transport_type':'beacon',
        'value':1
      });
    }
  }catch(e){}
  // navigate
  location.href = url;
}

);

function wireAffiliateLinks(){
  const els = document.querySelectorAll('[data-amz-asin],[data-amz-query]');
  els.forEach(el=>{
    const url = scBuildAmazonUrl(el);
    // convert to accessible anchor
    const a = document.createElement('a');
    a.className = el.className;
    a.textContent = el.textContent || 'View on Amazon';
    a.href = url;
    a.target = '_blank';
    a.rel = 'sponsored nofollow noopener';
    a.addEventListener('click', scOutbound);
    el.replaceWith(a);
  });
}
document.addEventListener('DOMContentLoaded', wireAffiliateLinks);
