import '../../styles/reset.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

window.addEventListener('DOMContentLoaded', () => {
  // Basic setup
  const scene = new THREE.Scene()
  const renderer = new THREE.WebGLRenderer()
  const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000)
  const controls = new OrbitControls(camera, renderer.domElement)

  renderer.setSize(innerWidth, innerHeight)
  camera.position.z = 5

  // Lights
  const ambiantLight = new THREE.AmbientLight(0xffffff, 1)
  scene.add(ambiantLight)

  // Materials
  const material = new THREE.MeshStandardMaterial()
  material.roughness = 0.4

  // Items
  const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.5, 32, 32), material)
  scene.add(sphere)

  function animate() {
    controls.update()
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
  }

  animate()

  document.querySelector('main').appendChild(renderer.domElement)
})
