import "./styles.css";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 600;

console.log(ctx);
ctx.lineWidth = 50;
ctx.lineCap = "round";
ctx.strokeStyle = "green";
ctx.fillStyle = "blue";
class Fractal {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.size = this.width * 0.4;
    this.sides = 3;
    this.maxLevel = 2;
  }
  draw(context) {
    context.save();
    context.translate(this.width / 2, this.height / 2);
    context.scale(1, 1);
    context.rotate(0);
    for (let i = 0; i < this.sides; i++) {
      this.#drawLine(context, 0);
      context.rotate((Math.PI * 2) / this.sides);
    }
    context.restore();
  }
  #drawLine(context, level) {
    if (level > this.maxLevel) return;
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(this.size, 0);
    context.stroke();
    context.save();
    context.rotate(1);
    this.#drawLine(context, level + 1);
    context.restore();
  }
}

const fractal1 = new Fractal(canvas.width, canvas.height);
fractal1.draw(ctx);
class Particle {}
class Rain {}
