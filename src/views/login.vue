<template>
  <div class="container py-5">
    <div class="row">
        <div class="col-md-12">
            <div class="row">
                <div class="col-md-6 mx-auto">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="mb-0">Bienvenido Maestro</h3>
                        </div>
                        <div class="card-body">
                            <form class="form" autocomplete="off" id="formLogin" @submit.prevent.once="send(admin)">
                                <div class="form-group">
                                    <label for="email">Nombre</label>
                                    <input type="text" class="form-control form-control-lg rounded-0" name="email" id="email" required="required" v-model="admin.email">
                                    <div class="invalid-feedback">Pendiente</div>
                                </div>
                                <div class="form-group">
                                    <label for="password">Palabras magicas</label>
                                    <input type="password" class="form-control form-control-lg rounded-0" id="password" required="required" v-model="admin.pass"/>
                                    <div class="invalid-feedback">...</div>
                                </div>
                                <button type="submit" class="btn sesamo darkGreyBg" id="btnLogin">Ábrete, <br> Sésamo!</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  name: 'Login',
  methods: {
    send (login) {
      this.$store.dispatch('login', login)
        .then(({ data }) => {
          this.$store.commit('setAuthHash', data.token)
          this.$router.push({name: 'admin'})
        })
        .catch(({ request }) => {
          this.$store.commit('setError', request.data)
        })
    },
    ...mapMutations(['setAuthHash', 'setError']),
    ...mapActions(['login'])
  },
  computed: mapState(['admin'])
}
</script>
<style>
#formLogin {
  width: 80%;
margin: 0 auto;
}
  .card {
    border: none;
    border-radius: 20px;
  }
  .card-body {
    background-color: whitesmoke;
    border-radius: 0 0 20px 20px;
  }
  .card-header:first-child {
    border-radius: 20px 20px 0 0;
    border-bottom: 3px solid white;
  }
  input.form-control {
    background: white;
  }
  .card-header, input.form-control,
  .card-header, input.form-control:focus,
  .card-header, input.form-control:hover {
    border: none;
    outline: none;
    box-shadow: none;
  }
  button.sesamo {
    border-radius: 0%;
    z-index: 2;
    position: absolute;
    top: 45%;
    right: -7%;
  }
  button.sesamo:focus,
  button.sesamo:hover {
    color: white;
  }
  button.sesamo::after {
    content: "";
    height: 0px;
    width: 0px;
    border-right: solid #3E454C;
    border-top: solid #3E454C;
    border-left: solid transparent;
    border-bottom: solid transparent;
    position: absolute;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    top: -16px;
    right: -16px;
    border-width: 50px;
    z-index: -2;
  }
</style>
