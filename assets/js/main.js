
// GA4: swap with your Measurement ID
window.SC_GA4 = { enabled: true, id: "G-2LGPRK5NX6" };

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

function wireAffiliateLinks(){
  document.querySelectorAll('[data-amz-query]').forEach(btn=>{
    const url = SC_AMZ.buildSearchURL(btn.dataset.amzQuery);
    btn.dataset.url = url;
    btn.addEventListener('click', scOutbound);
  });
  document.querySelectorAll('[data-amz-asin]').forEach(btn=>{
    const url = SC_AMZ.buildAsinURL(btn.dataset.amzAsin);
    btn.dataset.url = url;
    btn.addEventListener('click', scOutbound);
  });
}
document.addEventListener('DOMContentLoaded', wireAffiliateLinks);

// Lazy sizes fallback
document.addEventListener('DOMContentLoaded', ()=>{
  if('loading' in HTMLImageElement.prototype) return;
  const imgs = document.querySelectorAll('img[loading="lazy"]');
  if('IntersectionObserver' in window){
    const io = new IntersectionObserver((entries, obs)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          const img = entry.target;
          img.src = img.dataset.src;
          obs.unobserve(img);
        }
      });
    });
    imgs.forEach(img=>io.observe(img));
  } else {
    imgs.forEach(img=>{ img.src = img.dataset.src; });
  }
});
