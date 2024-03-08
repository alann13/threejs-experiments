import '../../styles/reset.css'
import * as THREE from 'three'

window.addEventListener('DOMContentLoaded', () => {
  const scene = new THREE.Scene()
  const renderer = new THREE.WebGLRenderer()
  const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000)
  const clock = new THREE.Clock()

  renderer.setSize(innerWidth, innerHeight)

  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const material = new THREE.MeshBasicMaterial({ color: 'green' })
  const cube = new THREE.Mesh(geometry, material)

  scene.add(cube)
  camera.position.z = 5

  function animate() {
    // Because some device are stronger than others, FPS might differ when animating.
    // This will ensure all devices will run on same speed.
    const elaptedTime = clock.getElapsedTime()

    cube.rotation.y = elaptedTime

    requestAnimationFrame(animate)
    renderer.render(scene, camera)
  }

  animate()

  document.querySelector('main').appendChild(renderer.domElement)
})
