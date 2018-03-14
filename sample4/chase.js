const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let x = canvas.width / 2
let y = canvas.height / 2
let mouseX = x
let mouseY = y
let radius = 10
let speed = 0.05 // 1未満で指定

document.addEventListener('mousemove', (e) => {
    mouseX = e.pageX
    mouseY = e.pageY
})

const loop = () => {
    x += (mouseX - x) * speed
    y += (mouseY - y) * speed
    
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath()
    context.arc(x, y, radius, 0, Math.PI*2)
    context.fill()

    window.requestAnimationFrame(loop)
}

window.requestAnimationFrame(loop)
