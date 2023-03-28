<template>
    <div class="logo">
        <img src="@/assets/globe/globe_purple.svg" alt="">
        <div>
          <p>Darjan</p>
          <span class="position">Web Developer / UI | UX</span>
        </div>
      </div>
</template>

<script>
export default {
    name: 'DLogo',
}
</script>

<style lang="sass" scoped>
.logo
  display: flex
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
</style>