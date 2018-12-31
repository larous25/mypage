<template>
  <div class="container">
    <h1>Crear Administrador</h1>
    <p>
      Este formulario solo se podra utilizar <strong>una vez</strong> tenga presente los datos siempre
    </p>
    <div class="form-group">
      <label for="" class="label">Email</label>
      <input type="text" class="form-control" v-model="admin.email">
    </div>
    <div class="form-group">
      <label for="" class="label">***</label>
      <input type="password" class="form-control" v-model="admin.pass">
    </div>
    <div>
      <button type="button" class="btn btn-lg" @click="send(admin)">Enviar</button>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from 'vuex'

export default {
  name: 'adminForm',
  methods: {
    send (admin) {
      this.$store.dispatch('sendAdmin', admin)
        .then(() => {
          this.$router.push({ name: 'login' })
        })
        .catch(({ request }) => {
          this.$store.commit('setError', request.data)
        })
    },
    ...mapMutations(['setError']),
    ...mapActions(['sendAdmin'])
  },
  computed: mapState(['admin'])
}
</script>
<style>

</style>
