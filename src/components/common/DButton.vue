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
    font-size: 16px
    font-family: primary
    font-weight: 300
    display: flex
    align-items: center 
    line-height: 0
    color: #fff
    padding: 12px 15px
    background: none
    border: 1px solid rgba(86, 81, 81, 0.1)
    border-radius: 5px
    cursor: pointer
.d-button-img
    height: 18px
    margin-left: 5px
</style>