import * as CANNON from "https://cdn.jsdelivr.net/npm/cannon-es@0.20.0/dist/cannon-es.js";

const canvas = document.getElementById("diceCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Physics world
const world = new CANNON.World();
world.gravity.set(0, -9.82, 0);

// Dice body
const diceShape = new CANNON.Box(new CANNON.Vec3(1,1,1));
const diceBody = new CANNON.Body({
  mass: 1,
  shape: diceShape
});
diceBody.position.set(0,5,0);
world.addBody(diceBody);

// Roll button
document.getElementById("rollBtn").addEventListener("click", () => {
  diceBody.velocity.set(
    (Math.random()-0.5)*10,
    5 + Math.random()*5,
    (Math.random()-0.5)*10
  );
  diceBody.angularVelocity.set(
    Math.random()*10,
    Math.random()*10,
    Math.random()*10
  );
});

// Render loop (placeholder: draws a square for dice)
function animate() {
  world.step(1/60);

  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = "white";
  ctx.strokeStyle = "black";
  ctx.lineWidth = 3;

  // Project dice position (simplified 2D projection)
  const x = canvas.width/2 + diceBody.position.x*20;
  const y = canvas.height/2 - diceBody.position.y*20;

  ctx.fillRect(x-20,y-20,40,40);
  ctx.strokeRect(x-20,y-20,40,40);

  requestAnimationFrame(animate);
}
animate();
