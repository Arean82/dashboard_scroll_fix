document.addEventListener('DOMContentLoaded',function(){

try{
 let cfg=window.DSFix||{};
 let container=document.querySelector('.issues_container');
 if(!container)return;

 let content=document.querySelector('#content');
 if(content)content.style.overflow='visible';

 if(!container.parentElement.classList.contains('rsf-scroll-wrapper')){
    let w=document.createElement('div');
    w.className='rsf-scroll-wrapper';
    container.parentNode.insertBefore(w,container);
    w.appendChild(container);
 }

 let cols=container.querySelectorAll('.status_column');
 cols.forEach(c=>{
   c.classList.add('rsf-status-column');
   c.style.display='inline-block';
   c.style.whiteSpace='normal';
 });

 if(cfg.autoShrink && cols.length>cfg.shrinkThreshold){
   document.documentElement.classList.add('rsf-shrink');
 }else{
   document.documentElement.classList.remove('rsf-shrink');
 }

 /* Scroll mode */
 let wrap=container.parentElement;
 if(cfg.scrollMode==='full_width'){
    wrap.style.display='block';
    wrap.style.width='100%';
 }else{
    wrap.style.display='inline-block';
 }

 /* Scrollbar size */
 let size=null;
 switch(cfg.scrollSizeMode){
   case 'normal': size='8px';break;
   case 'slim': size='4px';break;
   case 'large': size='14px';break;
   case 'custom': size=cfg.scrollSizeCustom+'px';break;
 }
 if(size){
   wrap.style.setProperty('--sb-size',size);
   wrap.style.scrollbarWidth='auto';
 }
}catch(e){console.error(e);}
});
