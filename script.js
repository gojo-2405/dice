// Scene setup
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xf0f0f0);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.set(4,4,6);

const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("container").appendChild(renderer.domElement);

// Controls
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Lighting
scene.add(new THREE.AmbientLight(0xffffff, 0.6));
const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(10,10,10);
scene.add(pointLight);

// Dice textures (replace with your own PNGs if needed)
const loader = new THREE.TextureLoader();
const materials = [
  new THREE.MeshStandardMaterial({ map: loader.load('assets/dice1.png') }),
  new THREE.MeshStandardMaterial({ map: loader.load('assets/dice6.png') }),
  new THREE.MeshStandardMaterial({ map: loader.load('assets/dice2.png') }),
  new THREE.MeshStandardMaterial({ map: loader.load('assets/dice5.png') }),
  new THREE.MeshStandardMaterial({ map: loader.load('assets/dice3.png') }),
  new THREE.MeshStandardMaterial({ map: loader.load('assets/dice4.png') }),
];

// Dice cube
const geometry = new THREE.BoxGeometry(2,2,2);
const dice = new THREE.Mesh(geometry, materials);
scene.add(dice);

// Roll animation
function rollDice() {
  const targetX = Math.random() * Math.PI * 4;
  const targetY = Math.random() * Math.PI * 4;
  const targetZ = Math.random() * Math.PI * 4;

  let frame = 0;
  const animateRoll = () => {
    if (frame < 100) {
      dice.rotation.x += (targetX - dice.rotation.x) / 10;
      dice.rotation.y += (targetY - dice.rotation.y) / 10;
      dice.rotation.z += (targetZ - dice.rotation.z) / 10;
      frame++;
      requestAnimationFrame(animateRoll);
    }
  };
  animateRoll();
}

document.getElementById("rollBtn").addEventListener("click", rollDice);

// Render loop
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();

// Resize handling
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
