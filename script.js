// Setup scene, camera, renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, 500);
document.getElementById('dice-container').appendChild(renderer.domElement);

// Lighting
const light = new THREE.PointLight(0xffffff, 1);
light.position.set(10, 10, 10);
scene.add(light);

// Dice geometry
const geometry = new THREE.BoxGeometry(2, 2, 2);

// Dice materials (each face has dots texture)
const loader = new THREE.TextureLoader();
const materials = [
  new THREE.MeshLambertMaterial({ map: loader.load('assets/dice1.png') }),
  new THREE.MeshLambertMaterial({ map: loader.load('assets/dice2.png') }),
  new THREE.MeshLambertMaterial({ map: loader.load('assets/dice3.png') }),
  new THREE.MeshLambertMaterial({ map: loader.load('assets/dice4.png') }),
  new THREE.MeshLambertMaterial({ map: loader.load('assets/dice5.png') }),
  new THREE.MeshLambertMaterial({ map: loader.load('assets/dice6.png') }),
];

const dice = new THREE.Mesh(geometry, materials);
scene.add(dice);

camera.position.z = 5;

// Quotes
const quotes = {
  1: "Believe in yourself and all that you are.",
  2: "Every day is a new beginning.",
  3: "Push yourself, because no one else will.",
  4: "Dream big and dare to fail.",
  5: "Stay positive, work hard, make it happen.",
  6: "Success is not final, failure is not fatal."
};

const quoteBox = document.getElementById('quote');

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

// Roll logic
document.getElementById('rollBtn').addEventListener('click', () => {
  const roll = Math.floor(Math.random() * 6) + 1;

  // Random tumbling animation
  const targetRotation = {
    x: Math.random() * 4 * Math.PI,
    y: Math.random() * 4 * Math.PI
  };

  let frame = 0;
  const interval = setInterval(() => {
    dice.rotation.x += (targetRotation.x - dice.rotation.x) * 0.1;
    dice.rotation.y += (targetRotation.y - dice.rotation.y) * 0.1;
    frame++;
    if (frame > 30) {
      clearInterval(interval);
      quoteBox.textContent = quotes[roll];
    }
  }, 50);
});
