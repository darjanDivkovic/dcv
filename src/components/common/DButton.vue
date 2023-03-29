<template>
    <button id="d-button">{{ text }}
    <img class="d-button-img" src="@/assets/small_links/handshake.svg" alt="">
    </button>
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
    display: flex
    align-items: center 
    line-height: 0
    height: 25px
    color: #fff
    padding: 0px 12px
    background: none
    border: 1px solid rgba(86, 81, 81, 0.1)
    border-radius: 5px
    cursor: pointer
.d-button-img
    height: 12px
    margin-left: 5px
</style>