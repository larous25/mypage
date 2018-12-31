<template>
<div>
    <router-view/>
    <div v-if="messageError" class="alert">
      {{messageError}}
      <button type="button" class="close" @click="clear">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'App',
  methods: {
    clear () {
      this.$store.commit('setError', '')
    },
    ...mapMutations(['setError'])
  },
  computed: mapState(['messageError'])
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
