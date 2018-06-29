<template>
<div id="carrusel">
<div class="flecha-derecha flechas" @click="cambiar('derecha')">
  &lt;
</div>
<ul>
<li v-for="( e, index ) in elementos" :key="index" :class=" index == 0 ? animacion: '' ">
  <div class="texto">
    <h3>{{ e.titulo }}</h3>
    <p>
      {{ e.texto }}
      <br>
    </p>
  </div>
</li>
</ul>
<div class="flecha-izquierda flechas" @click="cambiar('izquierda')">
  &gt;
</div>
</div>
</template>

<script>
export default {
  name: 'CarusselComponent',
  data () {
    return {
      animacion: '',
      elementos: [
        {
          titulo: 'Verde Elemental',
          texto: 'Colabore en parte de la maquetación y el desarrollo backend en mixedmedia.(no se ha terminado)'
        },
        {
          titulo: 'DoriDoors',
          texto: 'Colabore en una pequeña parte de la maquetación en mixedmedia'
        },
        {
          titulo: 'Portafolio',
          texto: 'Anterior vercion del portafolio'
        },
        {
          titulo: 'Marviva',
          texto: 'Maquertacion'
        }
      ]
    }
  },
  methods: {
    cambiar (direccion) {
      this.animacion = direccion

      setTimeout(() => {
        if (direccion === 'derecha') {
          this.elementos.push(this.elementos.shift())
        } else {
          this.elementos.unshift(this.elementos.pop())
        }
        this.animacion = ''
      }, 1500)
    }
  }
}
</script>

<style scoped>
  #carrusel {
    width: 111%;
    margin: 0px auto;
    height: 200px;
    left: -5.5%;
    position: relative;
  }
  #carrusel .flechas {
    color:#e5e5e5;
    cursor: pointer;
    font-size: 2.5em;
    font-weight: bold;
    height: 50px;
    line-height: 50px;
    position: absolute;
    text-align: center;
    top:35%;
    transition: all 0.5s ease;
    width: 11%;
  }
  #carrusel .flechas:hover {
    background: #2185C5;
    color:#fff;
    font-size: 1.5em;
  }
  #carrusel .flecha-derecha {
    left: 0px;
  }
  #carrusel .flecha-izquierda {
    right: 0px;
  }
  #carrusel h3 {
    float: left;
    margin-top: 10%;
    text-align: center;
    width: 50%;
  }
  #carrusel ul {
    background: #f9f9f9;
    float: left;
    height: 100%;
    margin: 0;
    overflow: hidden;
    padding: 0;
    width: 100%;
    z-index: 1;
  }

  #carrusel li {
    height: 100%;
    list-style: none outside none;
    width: 100%;
    z-index: -1;
  }
  #carrusel li > div {
    height: 100%;
    margin: 0 auto;
    width: 85%;
  }
  #carrusel li > div .texto {
    float: left;
    width: 100%;
  }
  #carrusel li > div .texto p{
    float: left;
    width: 50%;
  }
  .derecha {
    animation: derecha 1.5s linear;
  }
  .izquierda {
    animation: izquierda 1.5s linear;
  }

  @keyframes derecha {
    0% {
      margin-left: 0%;
      opacity: 1;
    }
    100% {
      color: #f9f9f9;
      margin-left: -100%;
      opacity: 0;
    }
  }

  @keyframes izquierda {
    0% {
      margin-left: 0%;
      opacity: 1;
    }
    100% {
      color: #f9f9f9;
      margin-left: 100%;
      opacity: 0;
    }
  }
@media screen and (min-width: 768px) and (max-width: 1024px) {
  #carrusel {
    width: 100%;
        left: 0%;
  }
}
@media screen and (max-width: 767px) {
  #carrusel {
    width: 100%;
        left: 0%;
  }
  #carrusel li > div {
    width: 80%;
  }
  #carrusel h3,
  #carrusel .texto p{
    text-align: center;
    width: 100%;
  }
}
</style>
