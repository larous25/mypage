<template>
  <div id="formulario">
    <fieldset>
      <legend class="text-center">Contacto</legend>
      <div>
        <input type="text" id="nombre" name="nombre"  required/>
        <label for="nombre">Nombre:</label>
      </div>
      <div>
        <input type="text" id="telefono"  required/>
        <label for="telefono">Telefono:</label>
      </div>
      <div>
        <textarea name="texto" id="texto" required></textarea>
        <label for="texto">Asunto:</label>
      </div>
      <button type="submit" @click="send">Enviar</button>
    </fieldset>
  </div>
</template>

<script>
/**/
export default {
  name: 'FormComponent',
  data () {
    return {
    }
  },
  methods: {
    send () {

    }
  }
}
</script>

<style scoped>
  #formulario legend {
    background: #2AA3F0;
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
    /* box-shadow: inset 0px -18px 29px -23px #c0c0c0; */
    /* border-bottom: solid 2px #c0c0c0; */
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
    /* box-shadow: inset 0px -18px 29px -25px #c0c0c0; */
    /* border-bottom: solid 2px #c0c0c0; */
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
