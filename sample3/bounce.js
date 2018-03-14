const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let x = canvas.width / 2
let y = 0
let radius = 10
let speed = 0
let gravity = 1
let repulsion = 0.7
let requestId;

const bottom = canvas.height - radius

const loop = () => {
    requestId = window.requestAnimationFrame(loop)
    // 加速
    speed += gravity
    // 座標を更新
    y += speed

    // 衝突判定
    if (bottom < y) {
        y = bottom
        // speedを反転（跳ね返り）
        speed = -speed * repulsion
        // speedの小数点を切り捨てて、値が0ならストップ
        if ( !~~speed ) window.cancelAnimationFrame(requestId)
    }

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath()
    context.arc(x, y, radius, 0, Math.PI*2)
    context.fill()
}

window.requestAnimationFrame(loop)
