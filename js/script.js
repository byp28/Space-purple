
let g = 220
const tk = gsap.timeline()
tk.staggerTo(".comete",4,{
    top: "-70%",
    left: "-100%",
},1)
tk.staggerTo(".comete-2",5,{
    top: "50%",
    left: "100%",
    transform: "rotate("+180+g+25+"deg)"
},0.5)
tk.repeat(-1)

const lk = gsap.timeline()

lk.To(".planete",5,{
    duration:10,
    transform: "rotate(100deg)"
})

