<template>
    <div class="particles-container">
        <vue-particles
        :color="'#fff'"
        :particleOpacity="0.1"
        :particlesNumber="10"
        shapeType="circle"
        :particleSize="5"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="false"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="2"
        :hoverEffect="false"
        hoverMode="repulse"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
    </div>
</template>

<script>
export default {
    name: 'DParticles',
}
</script>

<style lang="sass" scoped>
.particles-container
    position: absolute !important
    z-index: -1
    top: -4vh
    left: 0
    width: 99vw
    height: 101vh
</style>