<template>
    <div class="particles-container">
        <vue-particles
        :color="'#fff'"
        :particleOpacity="0.1"
        :particlesNumber="10"
        shapeType="circle"
        :particleSize="particleSize"
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
    props: ['windowh'],
    computed: {
        particleSize() {
            return this.windowh > 1200 ? this.windowh * 0.001 : this.windowh * 0.006
        },
        particlesNumber() {
            return this.windowh > 1200 ? 10 : 20
        }
    }
}
</script>

<style lang="sass" scoped>
.particles-container
    position: absolute !important
    z-index: 0
    top: -4vh
    left: 0
    width: 100vw !important
    height: 101vh !important

#particles-js
    width: 100vw !important
    height: 101vh !important
</style>