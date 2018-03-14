const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let x = 100
let y = 100
let radius = 10

const loop = (timestamp) => {
    x += 1
    y += 1

    // 前回のフレームで描画された画像を消す
    context.clearRect(0, 0, canvas.width, canvas.height)
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI*2);
    context.fill();

    // 3秒過ぎたらストップ
    if (timestamp < 3000) {
        // 次のフレームの描画を要求
        window.requestAnimationFrame(loop)
    }
}

// ブラウザの再描画のタイミングでアニメーションを実行する
window.requestAnimationFrame(loop)
