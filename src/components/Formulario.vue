<template>
  <div id="formulario">
    <fieldset>
      <legend class="text-center bluePoolBg">Contacto</legend>
      <div class="form-group">
        <input type="text" id="nombre" name="nombre" class="form-control" required v-model="contact.name"/>
        <label for="nombre">Nombre:</label>
      </div>
      <div class="form-group">
        <input type="text" id="telefono" class="form-control" required v-model="contact.phone"/>
        <label for="telefono">Telefono:</label>
      </div>
      <div class="form-group">
        <textarea name="texto" id="texto" class="form-control" required v-model="contact.comments"></textarea>
        <label for="texto">Asunto:</label>
      </div>
      <button type="submit" @click="send(contact)">Enviar</button>
    </fieldset>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  name: 'FormComponent',
  methods: {
    send (contact) {
      this.$store.dispatch('sendContact', contact)
        .then(request => {

        })
        .catch(err => {
          let { message } = err.request.data
          this.$store.commit('setError', message)
        })
    },
    ...mapMutations(['setError']),
    ...mapActions(['sendContact'])
  },
  computed: mapState(['contact'])
}
</script>

<style scoped>
  #formulario legend {
    border: 2px solid white;
    border-radius: 5px;
    color: white;
    padding: 6px;
  }
  #formulario fieldset {
    box-sizing: border-box;
    border-width: 3px;
    border-left-width: 2px;
    border-right-width: 2px;
    margin: 10px auto;
    width: 80%;
  }
  #formulario fieldset div {
    clear: both;
    height: 60px;
    margin: 10px 0px;
    position: relative;
    width: 100%;
  }
  #formulario input,
  #formulario label {
    position: absolute;
    border:none;
    transition: 0.4s linear all;
  }
  #formulario label {
    color:#2AA3F0;
    left: 0px;
    top: 0px;
    padding: 0px 10px;
    z-index: 2;
  }
   #formulario input {
    height: 50px;
    padding: 0px 30px 1px 30px;
    width: 100%;
    z-index: 1;
    outline: none;
  }
  #formulario input:required {
    box-shadow:  none;
  }

  #formulario input:focus + label,
  #formulario input:hover + label,
  #formulario input:valid + label,
  #formulario textarea:focus + label,
  #formulario textarea:hover + label ,
  #formulario textarea:valid + label
  {
    font-size: 12px;
  }
  #formulario textarea {
    border:none;
    box-sizing: border-box;
    height: 60px;
    resize:none;
    padding: 10px 30px;
    width: 100%;
    z-index: 1;
    outline: none;
  }
  #formulario button {
    background: #e4e4e4;
    border:2px solid #e4e4e4;;
    color: #c0c0c0;
    padding:5px;
    transition: all 0.2s linear 0.2s;
    padding: 8px;
  }
  #formulario button:hover {
    color: #000000;
    border:2px solid #000000;;
  }
</style>
