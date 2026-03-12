// Physics world
const world = new CANNON.World();
world.gravity.set(0, -9.82, 0);
world.broadphase = new CANNON.NaiveBroadphase();
world.solver.iterations = 10;

// Ground plane
const groundBody = new CANNON.Body({ mass: 0 });
groundBody.addShape(new CANNON.Plane());
world.addBody(groundBody);

// Three.js scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.set(5,5,10);

const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("diceCanvas"), antialias:true });
renderer.setSize(window.innerWidth, window.innerHeight);

// Lighting
scene.add(new THREE.AmbientLight(0xffffff, 0.6));
const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(10,10,10);
scene.add(pointLight);

// Dice textures
const loader = new THREE.TextureLoader();
const materials = [
  new THREE.MeshStandardMaterial({ map: loader.load('assets/dice1.png') }),
  new THREE.MeshStandardMaterial({ map: loader.load('assets/dice6.png') }),
  new THREE.MeshStandardMaterial({ map: loader.load('assets/dice2.png') }),
  new THREE.MeshStandardMaterial({ map: loader.load('assets/dice5.png') }),
  new THREE.MeshStandardMaterial({ map: loader.load('assets/dice3.png') }),
  new THREE.MeshStandardMaterial({ map: loader.load('assets/dice4.png') }),
];

// Dice body (physics)
const diceShape = new CANNON.Box(new CANNON.Vec3(1,1,1));
const diceBody = new CANNON.Body({ mass: 1 });
diceBody.addShape(diceShape);
diceBody.position.set(0,5,0);
world.addBody(diceBody);

// Dice mesh (visual)
const geometry = new THREE.BoxGeometry(2,2,2);
const diceMesh = new THREE.Mesh(geometry, materials);
scene.add(diceMesh);

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

// Sync physics & rendering
function animate() {
  world.step(1/60);

  diceMesh.position.copy(diceBody.position);
  diceMesh.quaternion.copy(diceBody.quaternion);

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
animate();

// Resize
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
