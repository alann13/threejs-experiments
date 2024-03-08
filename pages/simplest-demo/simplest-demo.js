import '../../styles/reset.css'
import * as THREE from 'three'

window.addEventListener('DOMContentLoaded', () => {
  // Basic things we need to render on the screen.
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000)
  const renderer = new THREE.WebGLRenderer()
  renderer.setSize(innerWidth, innerHeight)

  // item
  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const material = new THREE.MeshBasicMaterial({ color: 'blue' })
  const cube = new THREE.Mesh(geometry, material)

  scene.add(cube)
  camera.position.z = 5 // z position moves camera backward/forward

  // This creates a loop that causes the renderer to draw the scene
  function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera) // render scene from camera POV

    cube.rotation.x += 0.01
    cube.rotation.y += 0.001
  }

  animate()

  document.querySelector('main').appendChild(renderer.domElement)
})
