// Basic Three.js setup
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xf0f0f0);

const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(3, 3, 5);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("container").appendChild(renderer.domElement);

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(10, 10, 10);
scene.add(pointLight);

// Dice geometry (cube with dots)
const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
const dice = new THREE.Mesh(geometry, material);
scene.add(dice);

// Add black dots (simple spheres)
function addDot(x, y, z) {
  const dotGeo = new THREE.SphereGeometry(0.1, 16, 16);
  const dotMat = new THREE.MeshStandardMaterial({ color: 0x000000 });
  const dot = new THREE.Mesh(dotGeo, dotMat);
  dot.position.set(x, y, z);
  dice.add(dot);
}

// Example: add dots for one face
addDot(0.5, 0.5, 1); // front face
addDot(-0.5, -0.5, 1);

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  dice.rotation.x += 0.01;
  dice.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

// Handle resize
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
