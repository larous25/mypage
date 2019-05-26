<template>
  <div class="container">
    <h1>Crear Administrador</h1>
    <p>
      Este formulario solo se podra utilizar <strong>una vez</strong> tenga presente los datos siempre
    </p>
    <div class="form-group">
      <label for="" class="label">Email</label>
      <input type="text" class="form-control darkGreyBg" v-model="admin.email" placeholder="example@example.com">
    </div>
    <div class="form-group">
      <label for="" class="label">***</label>
      <input type="password" class="form-control darkGreyBg" v-model="admin.pass" placeholder="123456">
    </div>

    <div v-if="admin.email.length > 0 && admin.pass.length > 0">
      <button type="button" class="btn btn-lg" @click="send(admin)">Enviar</button>
    </div>
    <div v-else>
      complete el formulario por favor
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
