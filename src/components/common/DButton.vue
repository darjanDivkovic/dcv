<template>
  <div class="d-button">
    <p>{{ text }}</p>
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
  color: #fff
  border: 2px solid rgba(86, 81, 81, 0.3)
  display: flex
  opacity: 0
  justify-items: center
  align-items: center
  border-radius: 10px
  flex-direction: row
  cursor:  pointer !important

  & > p 
    margin-right: 10px
    
    padding: 0 4.5vh 0 14px
    font-size: 2vh !important
    margin: 0
    position: relative
    width: max-content
    &::after
      content: ''
      position: absolute
      background-image: url('@/assets/small_links/handshake.svg')
      background-position: center
      background-repeat: no-repeat
      background-size: contain
      min-height: 2vh
      min-width: 2vh
      top: 2px
      right: 10px
        
</style>

