<template>
    <router-view/>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  font-size: 17px;
}
::selection {
  background:#FF7F66;
  color: whitesmoke;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.darkGreyBg {
  background: #3E454C;
}
.bluePoolBg {
  background: #2AA3F0;
}
.bluePoolC {
  color: #2AA3F0;
}
.orangeUniformBg {
  background:#FF7F66;
}
.orangeUniformC {
  color:#FF7F66;
}
</style>
