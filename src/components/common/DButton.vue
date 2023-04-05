<template>
    <button class="d-button">{{ text }}
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
.d-button
    font-size: 2vh !important
    font-family: primary
    font-weight: 400
    display: flex
    opacity: 0
    align-items: center 
    line-height: 0
    color: #fff
    padding: 12px 15px !important
    background: none
    border: 1px solid rgba(86, 81, 81, 0.1)
    border-radius: 5px
    cursor: pointer
    transition: all 100ms
    
.d-button-img
    height: 18px
    margin-left: 5px

@media (max-width: 965px)
    .d-button
        font-size: 14px !important
        padding: 15px 16px
        border-radius: 8px
        margin-top: 5px
        max-height: 30px
    .d-button-img
        height: 12px

@media (max-width: 520px)
    .d-button   
        font-size: 12px !important
        padding: 15px 10px
        width: max-content

</style>

