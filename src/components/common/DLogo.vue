<template>
<div id="logo">
    <div id="container"></div>
    <div>
        <p>DARJAN<span class="small">.dev</span></p>
    </div>

</div>
</template>

<script>
import * as Three from 'three'

export default {
    name: 'DLogo',
    props: ['color'],
    data() {
        return {
        camera: null,
        scene: null,
        renderer: null,
        mesh: null
        }
    },
    watch: {
        color(val) {
            this.scene.remove(this.mesh)
            //this.init(val)
            this.createMesh(val)
        }
    },
    methods: {
    init: function(color) {
        //document.getElementById('container').remove();
        let container = document.getElementById('container');

        this.camera = new Three.PerspectiveCamera(30, container.clientWidth/container.clientHeight, 0.1);
        this.camera.position.z = 1;
        

        this.scene = new Three.Scene();
        this.scene.background = new Three.Color( 1184274 );
        
        this.createMesh(color);
        const light = new Three.AmbientLight( 0x404040 ); // soft white light
        this.scene.add( light );
        this.scene.background = null;
        this.renderer = new Three.WebGLRenderer({antialias: true, alpha: true});
        this.renderer.setPixelRatio(window.devicePixelRatio)
        this.renderer.setClearColor( 0x000000, 0 )
        this.renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(this.renderer.domElement);

    },
    createMesh(color) {
        let geometry = new Three.SphereGeometry( 0.2, 6, 4 );
        let material = new Three.MeshBasicMaterial({
            wireframe: true,
            color,
        });

        this.mesh = new Three.Mesh(geometry, material);

        this.scene.add(this.mesh);
    },
    animate: function() {
        requestAnimationFrame(this.animate);
        this.mesh.rotation.y += 0.002;
        this.mesh.rotation.x -= 0.002;
        this.renderer.render(this.scene, this.camera);
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

#container
  width: 60px
  margin-left: -15px
  min-height: 60px
  margin-right: 5px
  background: none

.small
  font-size: 13px
  font-weight: 300
  letter-spacing: 1px
  opacity: 0.5

@media (max-width: 520px)
  #container 
    min-height: 45px
    max-height: 45px
    width: 50px
  #logo
    margin-left: -10px
    & > div
      margin-left: 0
      & > p
        font-size: 12px
  .small
    font-size: 8px
    font-weight: 100
</style>