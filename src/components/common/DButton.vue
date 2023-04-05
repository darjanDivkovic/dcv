<template>
    <div class="d-button">
        <p>{{ text }}</p>
        <img class="d-button-img" src="@/assets/small_links/handshake.svg" alt="">
    </div>
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
    padding: 5px 10px !important
    background: none
    border: 1px solid rgba(86, 81, 81, 0.1)
    border-radius: 5px
    cursor: pointer
    transition: all 100ms
    & > p
        width: max-content !important
    
.d-button-img
    height: 18px
    margin-left: 5px

@media (max-width: 965px)
    .d-button
        padding: 3px 8px
        border-radius: 8px
        margin-top: 5px
        min-width: 60px
        max-height: 30px
    .d-button-img
        height: 12px

@media (max-width: 520px)
    .d-button   
        padding: 15px 10px
        display: flex
        flex-direction: row

</style>

