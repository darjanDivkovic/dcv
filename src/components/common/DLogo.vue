<template>
<div id="logo">
    <div id="container"></div>
    <div>
        <p>Darjan</p>
        <span class="position">Web Developer / UI | UX</span>
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
            console.log(val)
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

        this.renderer = new Three.WebGLRenderer({antialias: true});
        this.renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(this.renderer.domElement);

    },
    createMesh(color) {
        let geometry = new Three.DodecahedronGeometry(0.2, 0);
        let material = new Three.MeshBasicMaterial({
            wireframe: true,
            color,
            wireframeLinewidth: 0
        });

        this.mesh = new Three.Mesh(geometry, material);

        this.scene.add(this.mesh);
    },
    animate: function() {
        requestAnimationFrame(this.animate);
        this.mesh.rotation.y += 0.005;
        this.renderer.render(this.scene, this.camera);
    }
  },
  mounted() {
      this.init(3153511);
      this.animate();
  }
}
</script>

<style lang="sass" scoped>
#logo
  display: flex
  margin-left: -10px
  flex-direction: row
  width: max-content
  & > div
    font-family: 'secondary'
    margin-left: 13px
    & > p
      margin: 0
      font-size: 24px
      color: #fff
.position
  color: rgba(108,100,100,0.5)
  font-size: 16px

#container
  width: 37px
</style>