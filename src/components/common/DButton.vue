<template>
    <button id="d-button">{{ text }}</button>
</template>

<script>
export default {
    name: 'DButton',
    props: ['text','color']    
}
</script>

<style lang="sass" scoped>
#d-button
    font-size: 10px
    font-family: primary
    font-weight: 300
    line-height: 0
    height: 25px
    color: #fff
    padding: 0px 15px
    background-color: rgba(18,18,18,0.3)
    border: 1px solid rgba(86, 81, 81, 0.1)
    border-radius: 5px
</style>