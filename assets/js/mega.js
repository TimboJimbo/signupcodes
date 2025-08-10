(function(){
const TAG='signupcodes-21';
function h(t){return t.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]))}
function amzImg(asin){return `https://ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=${asin}&Format=_SL1000_&ID=AsinImage&MarketPlace=GB&ServiceVersion=20070822&WS=1&tag=${TAG}`}
function amzSearch(q){const u=new URL('https://www.amazon.co.uk/s');u.searchParams.set('k',q);u.searchParams.set('tag',TAG);return u.toString()}
async function init(){
  const featured=await fetch('/assets/data/featured.json').then(r=>r.json()).catch(()=>[]);
  const list=await fetch('/assets/data/deals.json').then(r=>r.json()).catch(()=>[]);
  const $f=document.getElementById('featured');
  // rotate 6 items
  for (const it of featured.sort(()=>Math.random()-0.5).slice(0,6)){
    $f.insertAdjacentHTML('beforeend',`
      <article class="card">
        <a href="${h(it.link)}" target="_blank" rel="nofollow sponsored noopener"><img class="deal" src="${amzImg(it.asin)}" alt="${h(it.name)}" width="800" height="600" loading="lazy"></a>
        <h3>${h(it.name)}</h3>
        <a class="btn" href="${h(it.link)}" target="_blank" rel="nofollow sponsored noopener">View on Amazon</a>
      </article>`);
  }
  const cats=[...new Set(list.map(x=>x.category))].sort();
  const sel=document.getElementById('cat'); cats.forEach(c=>{const o=document.createElement('option');o.value=c;o.textContent=c;sel.appendChild(o)});
  const q=document.getElementById('q'); const $r=document.getElementById('results');
  function render(){
    const qv=(q.value||'').toLowerCase(); const cv=sel.value;
    const out=list.filter(x=>(!qv||x.name.toLowerCase().includes(qv)||x.query.toLowerCase().includes(qv)) && (!cv||x.category===cv));
    $r.innerHTML=out.map(x=>`<article class="card"><h3>${h(x.name)}</h3><p>${h(x.category)}</p><a class="btn" href="${amzSearch(x.query)}" target="_blank" rel="nofollow sponsored noopener">Browse on Amazon</a></article>`).join('');
  }
  q.addEventListener('input',render); sel.addEventListener('change',render); render();
}
document.addEventListener('DOMContentLoaded',init);
})();