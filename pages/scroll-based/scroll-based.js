import '../../styles/reset.css'
import './style.css'
import * as THREE from 'three'
import * as dat from 'dat.gui'

addEventListener('DOMContentLoaded', () => {
  // Basic Setup
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  }
  const parameters = {
    materialColor: '#ffeded',
  }

  const canvas = document.querySelector('canvas.webgl')
  const gui = new dat.GUI()
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 100)
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
  })

  camera.position.z = 6
  scene.add(camera)

  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

  gui.addColor(parameters, 'materialColor')

  // Items
  const cube = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: '#ff0000' }),
  )
  scene.add(cube)

  animate()

  window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  })

  function animate() {
    renderer.render(scene, camera)
    requestAnimationFrame(animate)
  }
})
