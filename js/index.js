console.clear()
const stage = document.querySelector('svg')
const imgFg = document.querySelector('#imgFg')
const imgBg = document.querySelector('#imgBg')
const imgs = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=2000&q=50',
  'https://images.unsplash.com/photo-1511576661531-b34d7da5d0bb?w=2000&q=50',
  'https://images.unsplash.com/photo-1476610182048-b716b8518aae?w=2000&q=50',
  'https://images.unsplash.com/photo-1502657877623-f66bf489d236?w=2000&q=50',
  'https://images.unsplash.com/photo-1506361797048-46a149213205?w=2000&q=50'
]

const pos = {x:innerWidth/2, y:innerHeight/2}

for (let i=0; i<imgs.length; i++){
  const img = document.createElementNS("http://www.w3.org/2000/svg", "image")
  imgBg.appendChild(img)
  gsap.set(img, {attr:{x:'-5%', y:'-5%', width:'110%', height:'110%', href:imgs[i], preserveAspectRatio:'xMidYMid slice'}})
}

window.addEventListener('resize', ()=>{
  pos.x = innerWidth/2
  pos.y = innerHeight/2
  gsap.set('circle', {duration:0.3, attr:{cx:pos.x, cy:pos.y}})
})

stage.addEventListener('mouseenter', (e)=>{
  loop.pause()
  stage.addEventListener('mousemove', mouseFollow)
  mouseClickOn()
})

stage.addEventListener('mouseleave', (e)=>{
  mouseClickOff()
  stage.removeEventListener('mousemove', mouseFollow)
  pos.x = innerWidth/2
  pos.y = innerHeight/2
  gsap.to('circle', {attr:{cx:pos.x, cy:pos.y}, ease:'power2.inOut'})
  gsap.to(imgFg.children[0], {attr:{x:'-5%', y:'-5%'}})
  loop.play(0)
})
