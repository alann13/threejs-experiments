import '../../styles/reset.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

window.addEventListener('DOMContentLoaded', () => {
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000)
  const renderer = new THREE.WebGLRenderer()

  const sizes = {
    width: innerWidth,
    height: innerHeight,
  }

  renderer.setSize(innerWidth, innerHeight)

  // item
  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const material = new THREE.MeshBasicMaterial({ color: 'seagreen' })
  const greenCube = new THREE.Mesh(geometry, material)

  scene.add(greenCube)
  camera.position.z = 5

  const controls = new OrbitControls(camera, renderer.domElement)

  function animate() {
    requestAnimationFrame(animate)

    controls.update()

    renderer.render(scene, camera)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  }

  window.addEventListener('resize', () => {
    sizes.width = innerWidth
    sizes.height = innerHeight

    camera.aspect = sizes.width / sizes.height

    camera.updateProjectionMatrix()

    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  })

  animate()

  document.querySelector('main').appendChild(renderer.domElement)
})
