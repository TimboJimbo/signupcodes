
// Lazy-load Amazon images already use full src; we keep basic events
document.addEventListener('DOMContentLoaded',()=>{
  // Updated timestamp
  document.querySelectorAll('[data-updated-today]').forEach(el=>{
    const d = new Date(); const f = d.toLocaleDateString(undefined,{year:'numeric',month:'long',day:'numeric'});
    el.textContent = "Updated " + f;
  });
  // Hero carousel
  const track = document.querySelector('.deal-carousel .track');
  if(track){
    let idx = 0;
    function go(n){ const slides = track.children.length; idx=(n+slides)%slides; track.style.transform = `translateX(-${idx*100}%)`; }
    setInterval(()=>go(idx+1), 5000);
    document.querySelectorAll('.deal-carousel [data-goto]').forEach(b=>b.addEventListener('click',()=>go(parseInt(b.dataset.goto))));
  }
  // Outbound click tracking (simple)
  document.querySelectorAll('a[rel*="sponsored"]').forEach(a=>{
    a.addEventListener('click',()=>{ try{ localStorage.setItem('last_click', a.href); }catch(e){} });
  });
});
// Amazon OneLink placeholder (user can add their provided script if needed)


// --- Affiliate search & tag enforcement ---
document.addEventListener('DOMContentLoaded',()=>{
  const f = document.getElementById('site-search');
  if(f){
    f.addEventListener('submit', (e)=>{
      e.preventDefault();
      const v = (new FormData(f).get('q')||'').trim();
      if(!v) return;
      try{ 
        const u = new URL(v);
        if(/amazon\./i.test(u.hostname)){
          if(!u.searchParams.get('tag')) u.searchParams.set('tag','signupcodes-21');
          if(!u.searchParams.get('linkCode')) u.searchParams.set('linkCode','osi');
          window.location.href = u.toString();
          return;
        }
      }catch(_e){}
      // Fallback: site search by keywords
      const q = encodeURIComponent(v);
      window.location.href = '/articles/top-tech-deals.html#q=' + q;
    });
  }
  // Append tag to all outbound amazon links
  document.querySelectorAll('a[href*="amazon."]').forEach(a=>{
    try{
      const u = new URL(a.href); 
      if(!u.searchParams.get('tag')) u.searchParams.set('tag','signupcodes-21');
      a.href = u.toString();
    }catch(e){}
  });
});

// --- While You're Here carousel injection ---
function injectWhileYoureHere(){
  const targets = document.querySelectorAll('main.article');
  targets.forEach(t=>{
    if(t.querySelector('#while-youre-here')) return;
    const box = document.createElement('section');
    box.className='section';
    box.id='while-youre-here';
    box.innerHTML = `
      <h2>While you’re here</h2>
      <div class="grid deals">
        <article class="deal-card">
          <a class="img-wrap" href="/articles/biggest-savings-today.html"><span class="badge">HOT TODAY</span><img src="/assets/img/placeholder.webp" alt="Biggest Savings"></a>
          <h3>Today’s Biggest Savings</h3>
          <p class="pitch">Fastest way to see the best buys right now.</p>
          <a class="btn" href="/articles/biggest-savings-today.html">Open</a>
        </article>
        <article class="deal-card">
          <a class="img-wrap" href="/articles/under-50-deals.html"><img src="/assets/img/placeholder.webp" alt="Under £50"></a>
          <h3>Best Under £50</h3>
          <p class="pitch">Giftable, useful, and cheap — easy wins.</p>
          <a class="btn" href="/articles/under-50-deals.html">Open</a>
        </article>
        <article class="deal-card">
          <a class="img-wrap" href="/articles/seasonal-hot-deals.html"><img src="/assets/img/placeholder.webp" alt="Seasonal"></a>
          <h3>Seasonal Hot Deals</h3>
          <p class="pitch">Trending picks that sell out fast.</p>
          <a class="btn" href="/articles/seasonal-hot-deals.html">Open</a>
        </article>
      </div>`;
    t.appendChild(box);
  });
}
document.addEventListener('DOMContentLoaded', injectWhileYoureHere);
