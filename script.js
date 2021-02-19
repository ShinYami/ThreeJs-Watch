const scene = new THREE.Scene() // Declaration de la scène
const renderer = new THREE.WebGLRenderer() // Declaration du moteur de rendu
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000) // Declaration de la caméra (de type perspective ici)
// creation du mesh
const geometry = new THREE.OctahedronGeometry(5, 5, 20, 32)  // notre forme
const material = new THREE.MeshBasicMaterial({ color: 0x4040FF, wireframe: true })
const cylinder = new THREE.Mesh(geometry, material)

// add scene et positionnement cam
scene.add(cylinder)
camera.position.z = 10 // pos camera

renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)
          
//animation
function animate() {
    cylinder.rotation.x += 0.01
    cylinder.rotation.y += 0.01
    renderer.render(scene, camera)
    requestAnimationFrame(animate)
}

animate()