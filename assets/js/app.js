
document.addEventListener('DOMContentLoaded',()=>{
  // Updated timestamp
  document.querySelectorAll('[data-updated-today]').forEach(el=>{
    const d=new Date(); const f=d.toLocaleDateString(undefined,{year:'numeric',month:'long',day:'numeric'});
    el.textContent="Updated "+f;
  });
  // Carousel
  const track=document.querySelector('.deal-carousel .track');
  if(track){
    let idx=0; const go=n=>{const slides=track.children.length; idx=(n+slides)%slides; track.style.transform=`translateX(-${idx*100}%)`;};
    setInterval(()=>go(idx+1),5000);
    document.querySelectorAll('.deal-carousel [data-goto]').forEach(b=>b.addEventListener('click',()=>go(parseInt(b.dataset.goto))));
  }
  // Outbound click tracking placeholder
  document.querySelectorAll('a[rel*="sponsored"]').forEach(a=>{
    a.addEventListener('click',()=>{ try{ localStorage.setItem('last_click', a.href); }catch(e){} });
  });
});
