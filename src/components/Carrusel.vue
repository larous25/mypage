<template>
<div id="carrusel" class="carousel slide shadow-sm">
  <div class="carousel-inner">
    <div v-for="( e, index ) in elementos" :key="index" :class="[index == 0 ? animacion : '', 'carousel-item']">
      <div class="carousel-caption">
        <h3 class="text-right" >{{ e.titulo }}</h3>
        <div class="text-left">{{ e.texto }}</div>
      </div>
    </div>
  </div>
  <span class="carousel-control-prev bluePoolC" role="button"  @click="cambiar('derecha')">
    &lt;
  </span>
  <span class="carousel-control-next bluePoolC" role="button" @click="cambiar('izquierda')">
    &gt;
  </span>
</div>
</template>

<script>
/* NOTA: esto tambien puedo pasarlo a una api */
export default {
  name: 'CarusselComponent',
  data () {
    return {
      animacion: 'active ',
      elementos: [
        {
          titulo: 'Verde Elemental',
          texto: 'Colabore en parte de la maquetación y el desarrollo backend en mixedmedia.'
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
      this.animacion += direccion

      setTimeout(() => {
        if (direccion === 'derecha') {
          this.elementos.push(this.elementos.shift())
        } else {
          this.elementos.unshift(this.elementos.pop())
        }
        this.animacion = 'active '
      }, 1500)
    }
  }
}
</script>

<style scoped>
  #carrusel {
    margin: 0px auto;
    height: 200px;
  }
  #carrusel .active,
  #carrusel .carousel-inner {
    height: 100%;
  }
  #carrusel .carousel-caption {
    color: black;
    height: 80%;
  }
  #carrusel span:hover,
  #carrusel span:focus {
    color: black;
  }
  #carrusel span {
    font-size: 40px;
    font-weight: bold;
    cursor: pointer;
  }
  #carrusel h3 {
    color: blueviolet;
    float: left;
    width: 50%;
    padding-right: 20px;
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

@media screen and (max-width:767px) {
  #carrusel{
    height: 400px;
  }
  #carrusel h3{
    float: none;
    width: auto;
    padding: 0;
    text-align: center !important;
  }
}
</style>
