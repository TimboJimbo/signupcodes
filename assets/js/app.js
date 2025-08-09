
// Simple lazy load for placeholder -> actual when provided later
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('img[data-src]').forEach(img=>{
    const src = img.getAttribute('data-src');
    if(src){ img.setAttribute('src',src); }
  });
  // Track outbound clicks (basic)
  document.querySelectorAll('a[rel*="sponsored"]').forEach(a=>{
    a.addEventListener('click',()=>{
      try{ localStorage.setItem('last_click', a.href); }catch(e){}
    });
  });
});
