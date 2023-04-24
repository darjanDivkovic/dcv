<template>
  <div id="logo" :style="{ 'top': `${top}%`, 'bottom': `${bottom}%`, 'right': `${right}%`, 'left': `${left}%` }">
    <div class="container"></div>
  </div>
</template>
    
<script>
import * as Three from 'three'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { UnrealBloomPass} from 'three/examples/jsm/postprocessing/UnrealBloomPass'
export default {
  name: 'DThreeObject',
  props: ['color', 'top', 'bottom', 'right', 'left'],
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null,
      renderPass: null,
      composer: null,
      bloomPass: null,
    }
  },
  watch: {
    color(val) {
      const rotationY = this.mesh.rotation.y
      const rotationX = this.mesh.rotation.x
      this.scene.remove(this.mesh)
      this.createMesh(val, rotationX, rotationY)
    }
  },
  methods: {
    init: function (color) {
      let container = document.getElementsByClassName('container')[0];

      this.camera = new Three.PerspectiveCamera(30, container.clientWidth / container.clientHeight, 0.1);
      this.camera.position.z = 1;


      this.scene = new Three.Scene();
      this.scene.background = new Three.Color(1184274);

      this.createMesh(color);
      const light = new Three.AmbientLight(0x404040); // soft white light
      this.scene.add(light);
      this.scene.background = null;
      this.renderer = new Three.WebGLRenderer({ antialias: true, alpha: true });
      this.renderer.setPixelRatio(window.devicePixelRatio)
      this.renderer.setClearColor(0x000000, 0)
      this.renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(this.renderer.domElement);

      this.renderScene = new RenderPass(this.scene, this.camera)
      this.composer = new EffectComposer(this.renderer)
      this.composer.addPass(this.renderScene)

      const bloomPass = new UnrealBloomPass(
        new  Three.Vector2(window.innerWidth, window.innerHeight),
        3,
        1,
        0.1
      )

      this.composer.addPass(bloomPass)
    },
    createMesh(color, rotationX, rotationY) {
      let geometry = new Three.RingGeometry(0, 1, 10);
      let material = new Three.MeshBasicMaterial({
        wireframe: true,
        color,
      });

      this.mesh = new Three.Mesh(geometry, material);
      this.mesh.rotation.x = rotationX || 0
      this.mesh.rotation.y = rotationY || 0
      this.scene.add(this.mesh);
    },
    animate: function () {
      requestAnimationFrame(this.animate);
      this.mesh.rotation.y += 0.0015;
      this.mesh.rotation.x -= 0.0015;
      // this.renderer.render(this.scene, this.camera);
      this.composer.render()
    }
  },
  mounted() {
    this.init(this.color);
    this.animate();
  }
}
</script>
    
<style lang="sass" scoped>
    #logo
      display: flex
      flex-direction: row
      justify-content: center
      align-items: center
      width: max-content
      position: absolute
      opacity: 0.2
      height: 60px
      & > div
        font-family: 'secondary'
        margin-left: 3px
        line-height: 0.8
        & > p
          margin: 0
          font-size: 24px
          font-weight: 400
          letter-spacing: 3px
          color: #e4e6eb
          font-family: primary
    .position
      color: rgba(108,100,100, 0.3)
      font-size: 18px
    
    .container
      width: 100vw
      margin-left: -15px
      min-height: 100vh
      margin-right: 5px
      background: none
      position: absolute
    .small
      font-size: 13px
      font-weight: 300
      letter-spacing: 1px
      opacity: 0.5
    </style>