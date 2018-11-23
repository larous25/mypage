<template>
<div id="carrusel" class="carousel slide shadow-sm">
  <div class="carousel-inner">
    <div v-for="( e, index ) in elementos" :key="index" :class="[index == 0 ? animacion : '', 'carousel-item']">
      <div class="carousel-caption">
        <h3>{{ e.titulo }}</h3>
        <div class="text-left">{{ e.texto }}</div>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" role="button"  @click="cambiar('derecha')">
    &lt;
  </a>
  <a class="carousel-control-next" role="button" @click="cambiar('izquierda')">
    &gt;
  </a>
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
  #carrusel a {
    color: #2AA3F0;
    font-size: 40px;
    font-weight: bold;
  }
  #carrusel h3 {
    color: blueviolet;
    float: left;
    /* margin-top: 10%; */
    text-align: center;
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

</style>
