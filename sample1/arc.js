const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const x = 100
const y = 100
const radius = 10

context.beginPath()
// 円弧を描画（角度はラジアンで指定）
context.arc(x, y, radius, 0, Math.PI*2)
context.fill()
