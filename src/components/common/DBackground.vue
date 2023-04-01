<template>
    <div id="d-background">
        <div id="circle-container">
            <div id="circle">
            </div>
        </div>
    </div>
</template>

<script>
import { gsap } from 'gsap'
import DLogo from '@/components/common/DLogo.vue';

const PURPLE_GRADIENT = 'hsla(255, 55%, 18%, 0.5)';
const BLUE_GRADIENT = 'hsla(227, 78%, 18%, 0.5)';
const BACKGROUND_GRADIENT = 'hsla(0, 0%, 7%, 0.5)';
const GOLDEN_GRADIENT = 'hsla(35, 45%, 18%, 0.5)';
const ORANGE_GRADIENT = 'hsla(13, 49%, 18%, 0.5)';
const GREEN_GRADIENT = 'hsla(171, 40%, 18%, 0.5)';

export default {
    name: 'DBackground',
    props: ['position'],
    components: {
        DLogo
    },
    data() {
        return {
            xPosition: 0,
            yPoistion: 10,
            gradientColor: PURPLE_GRADIENT,
        }
    },
    mounted() {
        this.breathe();
        this.changeToNewPosition(this?.position);
    },
    watch: {
        position(val) {
           this.changeToNewPosition(val);
        }
    },
    methods: {
        changeToNewPosition(newPosition) {
            switch(newPosition) {
                case 0:
                    this.moveToPosition(PURPLE_GRADIENT, 0, 0, 0.5);
                    break;
                case 1: 
                    this.moveToPosition(BLUE_GRADIENT, 10, 10, 0.5);
                    break;
                case 2:
                    this.moveToPosition(ORANGE_GRADIENT, -20, 20, 0.5);
                    break;
                case 3:
                    this.moveToPosition(GOLDEN_GRADIENT, -20, -20, 0.5);
                    break;
                case 4:
                    this.moveToPosition(GREEN_GRADIENT, -10, 40, 0.5);
                    break;
            } 
        },
        breathe() {
            gsap.fromTo('#circle', {transform: "scale(1)"}, 
            
                                   {transform: "scale(1.3)", duration: 1.5, repeat: -1, yoyo: true})
        },
        moveToPosition(gradient, xPosition, yPoistion, opacity) {
            const oldXPosition = this.xPosition
            const oldYPosition = this.yPoistion
            const gradientColor = this.gradientColor
            const backgroundGradient = `hsla(0, 0%, 7%, ${opacity})`

            gsap.fromTo('#circle',
            {background: `radial-gradient(circle, ${gradientColor} 0%, ${BACKGROUND_GRADIENT} 70%)`,
             xPercent: oldXPosition, yPercent: oldYPosition},
            {xPercent: xPosition, yPercent: yPoistion, repeat: 0, background: `radial-gradient(circle, ${gradient} 0%, ${backgroundGradient} 70%)`, duration: 1})
            
            this.xPosition = xPosition
            this.yPoistion = yPoistion
            this.gradientColor = gradient
        }
        /*
        moveToFirstPosition() {
            gsap.fromTo('#circle', 
                {background: `radial-gradient(circle, ${PURPLE_GRADIENT} 0%, ${BACKGROUND_GRADIENT} 70%)`}, 
                {xPercent: 0, yPercent:20, repeat: 0, background: `radial-gradient(circle, ${BLUE_GRADIENT} 0%, ${BACKGROUND_GRADIENT} 70%)`, duration: 1})
            },
        moveToSecondPosition() {
            gsap.fromTo('#circle', 
                {background: `radial-gradient(circle, ${PURPLE_GRADIENT} 0%, ${BACKGROUND_GRADIENT} 70%)`}, 
                {xPercent: 20, yPercent:20, repeat: 0, background: `radial-gradient(circle, ${BLUE_GRADIENT} 0%, ${BACKGROUND_GRADIENT} 70%)`, duration: 1})
            },
        */
        // {transform: "scale(1)"},  {transform: "scale(1.8)", duration: 5.5, ease: "power3.inOut", 
    },
}
</script>

<style lang="sass" scoped>
#d-background
    position: absolute
    z-index: -1
    top: 0
    left: 0
    width: 100%
    height: 100vh
    overflow: hidden
#circle-container
    position: relative
    height: 100%
    width: 100%
#circle
    position: absolute
    height: 120vh
    width: 120vh
    top: -20%
    left: calc(50% - 60vh)
    background: radial-gradient(circle, hsla(255, 55%, 26%, 0.5) 0%, hsla(0, 0%, 7%, 0.5) 70%)
    border-radius: 50%
</style>

PURPLE
background: radial-gradient(circle, hsla(255, 55%, 26%, 0.5) 0%, hsla(0, 0%, 7%, 0.5) 70%)
BLUE
background: radial-gradient(circle, hsla(227, 78%, 25%. 0.5) 0%, hsla(0, 0%, 7%, 0.5) 70%)