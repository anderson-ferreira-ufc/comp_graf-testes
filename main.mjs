// Configuração da cena
const scene = new THREE.Scene();
// Configuração da câmera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//camera.position.z = 5;

// Configuração do renderizador
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshNormalMaterial()
const mesh = new THREE.Mesh(geometry, material)

// movimenta câmera para trás
camera.position.z = 4

// classe especial para representar vetored 3D
const pos2 = new THREE.Vector3(2, 2, 0)

const mesh2 = mesh.clone()
const mesh3 = mesh.clone()

scene.add(mesh2, mesh3)
mesh2.position.x = -2
mesh3.position.x = 3

mesh2.scale.multiplyScalar(1.2)
mesh.scale.y = 2
mesh3.scale.set(0.5, 0.75, 3)

const axesHelper = new THREE.AxesHelper(2)
mesh.add(axesHelper.clone())
mesh2.add(axesHelper.clone())
mesh3.add(axesHelper.clone())

mesh2.rotation.y = THREE.MathUtils.degToRad(45)
mesh2.rotation.z = THREE.MathUtils.degToRad(-15)
mesh2.rotation.order = 'ZXY'

console.log(THREE.MathUtils.radToDeg(mesh2.rotation.y))

mesh.quaternion.copy(new THREE.Quaternion())
console.log(mesh.rotation)

camera.position.y = 1
camera.position.set(-2, 1, 2)

const group = new THREE.Group()
group.add(mesh2, mesh3)
scene.add(group)

group.position.set(0, 1, 1)
group.scale.multiplyScalar(0.5)

const v = new THREE.Vector3()
mesh2.getWorldPosition(v)

camera.lookAt(v)

// Animação
function tic(){
    renderer.render(scene, camera);
    requestAnimationFrame(tic);

    group.rotation.y += 0.01;
};

// Iniciar a animação
requestAnimationFrame(tic);