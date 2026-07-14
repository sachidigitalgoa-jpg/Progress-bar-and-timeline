gsap.registerPlugin(ScrollTrigger);
document.addEventListener('mousemove',e=>{const g=document.querySelector('.cursor-glow');g.style.left=e.clientX+'px';g.style.top=e.clientY+'px';});
gsap.to('.progress-line',{height:'100%',scrollTrigger:{trigger:'.timeline',start:'top center',end:'bottom center',scrub:true}});
gsap.utils.toArray('.timeline-item').forEach(i=>{let x=i.classList.contains('left')?-150:150;gsap.to(i,{opacity:1,x:0,duration:1,scrollTrigger:{trigger:i,start:'top 80%'}});gsap.set(i,{x});});
gsap.utils.toArray('.icon').forEach(i=>gsap.to(i,{scale:1,duration:.6,scrollTrigger:{trigger:i,start:'top 85%'}}));