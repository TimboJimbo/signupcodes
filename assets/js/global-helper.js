document.addEventListener('DOMContentLoaded',()=>{
  // Inline disclosure under first H1 on deal/article pages
  const h1=document.querySelector('main h1, .article h1'); 
  if(h1 && !document.querySelector('.aff-disclosure')){
    const p=document.createElement('p'); p.className='aff-disclosure'; 
    p.textContent='As an Amazon Associate we earn from qualifying purchases.'; 
    h1.insertAdjacentElement('afterend', p);
  }
  // Link hygiene
  document.querySelectorAll('a[href*="amazon."]').forEach(a=>{
    try{ const u=new URL(a.href); if(!u.searchParams.get('tag')) u.searchParams.set('tag','signupcodes-21'); a.href=u.toString(); }catch(e){}
    a.setAttribute('rel','nofollow sponsored noopener');
    a.setAttribute('target','_blank');
  });
});