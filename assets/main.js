(function(){
var btn=document.getElementById('menu-btn'),nav=document.getElementById('nav');
btn.addEventListener('click',function(){
var open=nav.classList.toggle('open');
btn.setAttribute('aria-expanded',open);
});
nav.addEventListener('click',function(e){
if(e.target.tagName==='A'){nav.classList.remove('open');btn.setAttribute('aria-expanded','false');}
});
document.querySelectorAll('[data-copy]').forEach(function(b){
var label=b.textContent,el=document.getElementById(b.getAttribute('data-copy'));
b.addEventListener('click',function(){
var done=function(){b.textContent='복사됨';setTimeout(function(){b.textContent=label;},1800);};
var select=function(){var r=document.createRange();r.selectNodeContents(el);var s=getSelection();s.removeAllRanges();s.addRange(r);};
try{navigator.clipboard.writeText(el.textContent).then(done,select);}catch(err){select();}
});
});
if(Date.now()>new Date('2026-10-19T21:00:00+09:00').getTime()){
['notice','seminar'].forEach(function(id){var el=document.getElementById(id);if(el)el.hidden=true;});
}
})();
(function(){
var root=document.documentElement,bar=document.getElementById('bar');
if(bar){
var tick=false,upd=function(){var h=root.scrollHeight-innerHeight;bar.style.transform='scaleX('+(h>0?Math.min(1,scrollY/h):0)+')';tick=false;};
addEventListener('scroll',function(){if(!tick){tick=true;requestAnimationFrame(upd);}},{passive:true});upd();
}
var dock=document.querySelector('.dock'),hc=document.querySelector('.hero .cta');
if(dock&&hc&&'IntersectionObserver' in window){
root.classList.add('dk');
new IntersectionObserver(function(es){var e=es[es.length-1];dock.classList.toggle('show',!e.isIntersecting&&e.boundingClientRect.top<0);}).observe(hc);
}
var calm=matchMedia('(prefers-reduced-motion: reduce)').matches;
var ph=document.querySelector('.photos');
if(ph){
var cnt=ph.querySelectorAll('img').length,tm=null;
var go=function(){ph.setAttribute('data-i',String((+ph.getAttribute('data-i')+1)%cnt));};
var play=function(){clearInterval(tm);if(!calm)tm=setInterval(go,2000);};
ph.setAttribute('data-i','0');
ph.addEventListener('click',function(){go();play();});
if('IntersectionObserver' in window)new IntersectionObserver(function(es){if(es[es.length-1].isIntersecting)play();else clearInterval(tm);},{threshold:.3}).observe(ph);
}
var cards=[].slice.call(document.querySelectorAll('.pillar')),mqm=matchMedia('(max-width:760px)');
if(!calm&&cards.length){
var sq=false,stack=function(){
sq=false;
cards.forEach(function(c,i){
var nx=cards[i+1];
if(!nx||!mqm.matches){c.style.transform='';c.style.filter='';return;}
var r=c.getBoundingClientRect(),p=Math.max(0,Math.min(1,((r.bottom-nx.getBoundingClientRect().top)/r.height-0.35)/0.55));
c.style.transform='scale('+(1-p*0.05).toFixed(4)+')';c.style.filter=p>0?'brightness('+(1-p*0.22).toFixed(3)+')':'';
});
};
addEventListener('scroll',function(){if(!sq){sq=true;requestAnimationFrame(stack);}},{passive:true});
addEventListener('resize',stack);stack();
}
if(calm||!('IntersectionObserver' in window))return;
root.classList.add('js');
var io=new IntersectionObserver(function(es){es.forEach(function(e){
if(!e.isIntersecting)return;
var el=e.target;io.unobserve(el);el.classList.add('in');
var done=function(ev){if(ev.target!==el||ev.propertyName!=='opacity')return;el.removeEventListener('transitionend',done);el.removeAttribute('data-r');el.style.removeProperty('--d');};
el.addEventListener('transitionend',done);
});},{rootMargin:'0px 0px -8% 0px',threshold:.08});
var sel='.stats,.head>*,.pain,.turn,.pillar,.seats,.sixteen>div:last-child,.table,.mentor,.photos img,.chips,.plan,.perk,.steps li,.pt-list li,.pt-card,.seminar,.faq details,.ch,.place>*';
if(matchMedia('(max-width:760px)').matches)sel=sel.replace('.pillar,','.pillars,').replace('.photos img','.photos').replace('.steps li','.steps');
document.querySelectorAll(sel).forEach(function(el){
var i=0,p=el.previousElementSibling;while(p&&i<5){i++;p=p.previousElementSibling;}
el.setAttribute('data-r','');el.style.setProperty('--d',(i*0.09)+'s');io.observe(el);
});
document.querySelectorAll('.seats span').forEach(function(sp,i){sp.style.setProperty('--i',(i*0.11)+'s');});
var io2=new IntersectionObserver(function(es){es.forEach(function(e){
if(!e.isIntersecting)return;
var b=e.target,m=b.textContent.match(/^(\d+)(.*)$/);io2.unobserve(b);if(!m)return;
var n=+m[1],t0=null,step=function(t){if(t0===null)t0=t;var k=Math.min(1,(t-t0)/1200);k=1-Math.pow(1-k,3);b.textContent=Math.round(n*k)+m[2];if(k<1)requestAnimationFrame(step);};
requestAnimationFrame(step);
});},{threshold:.6});
document.querySelectorAll('.stats b').forEach(function(b){io2.observe(b);});
})();
