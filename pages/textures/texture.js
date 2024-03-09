import '../../styles/reset.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

window.addEventListener('DOMContentLoaded', () => {
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 1, 1000)
  const renderer = new THREE.WebGLRenderer()
  const clock = new THREE.Clock()

  // Use LoadingManager class to load multiple textures.
  const textureLoader = new THREE.TextureLoader()
  const texture = textureLoader.load('/textures/door/color.jpg')
  texture.colorSpace = THREE.SRGBColorSpace // research this line

  const controls = new OrbitControls(camera, renderer.domElement)

  renderer.setSize(innerWidth, innerHeight)
  camera.position.z = 5

  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const material = new THREE.MeshBasicMaterial({ map: texture })
  const cube = new THREE.Mesh(geometry, material)

  scene.add(cube)

  function animate() {
    const elaptedTime = clock.getElapsedTime()

    controls.update()

    requestAnimationFrame(animate)
    renderer.render(scene, camera)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  }

  animate()

  document.querySelector('main').appendChild(renderer.domElement)
})
