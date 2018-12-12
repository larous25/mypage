<template>
  <header id="menu" class="darkGreyBg">
    <nav>
      <ul :class="fondo">
        <li @click="animacion('#pres')" :class="{ cambia :cambia ('#pres') }">
          <span>
            Presentación
          </span>
          <br>
          <span class="icon-profile"></span>
        </li>
        <li @click="animacion('#cos')" :class="{ cambia :cambia ('#cos') }">
           <span>
            Conocimientos
           </span>
           <br>
           <span class="icon-pencil"></span>
        </li>
        <li @click="animacion('#gus')" :class="{ cambia :cambia ('#gus') }">
         <span>
          Proyectos
         </span>
         <br>
         <span class="icon-folder-open"></span>
        </li>
      </ul>
    </nav>
    <div class="cinta">
    </div>
    <div>
      <div>
        <span class="icon-redo2"></span>
      </div>
      <div>
        <span class="icon-reply"></span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MenuComponent',
  data () {
    return {
      item: '#pres',
      fondo: 'orangeUniformBg'
    }
  },
  created () {
    window.addEventListener('scroll', this.moviento)
  },
  methods: {
    animacion (hash) {
      let puntoX = document.querySelector(hash).offsetTop

      window.scroll({ top: puntoX, left: 0, behavior: 'smooth' })
    },
    cambia (item) {
      return this.item === item
    },
    moviento () {
      let primero = parseFloat(document.querySelector('#pres').offsetTop)
      let segundo = parseFloat(document.querySelector('#cos').offsetTop)
      let tercero = parseFloat(document.querySelector('#gus').offsetTop)
      let actual = parseFloat(window.scrollY)
      let mitad = Math.floor(segundo / 2) - 1

      if (actual >= primero && actual <= (segundo - mitad)) {
        this.item = '#pres'
        this.fondo = 'orangeUniformBg'
      } else if (actual >= (segundo - mitad) && actual <= (tercero - mitad)) {
        this.item = '#cos'
        this.fondo = ''
      } else if (actual >= (tercero - mitad)) {
        this.item = '#gus'
        this.fondo = 'bluePoolBg'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#menu {
  border-right:2px solid black;
  box-sizing: border-box;
  height: 100vh;
  max-width: 195px;
  margin: 0;
  position: fixed;
  width: 11%;
  z-index: 5;
}

#menu nav {
  height: 40%;
  top: 30%;
  position: absolute;
  width: 100%;
}

#menu nav ul {
  height: 100%;
  margin-top: 5%;
  padding-left:0px;
}

#menu nav ul li {
  height: 33.5%;
  list-style: none outside none;
  padding: 0;
  text-align: center;
  color:#fff;
  cursor: pointer;
}

#menu nav ul li {
  transition:all 0.4s ease 0.1s;
}

#menu nav ul li span[class^='icon-']{
  transition:all 0.4s ease 0.1s;
  font-size: 3em;
}

#menu nav ul li:hover,
#menu nav ul li.cambia {
  background: #FFFFFF;
  color:#FF7F66;
  font-size: 16px;
}

#menu nav ul li:hover span[class^='icon-'],
#menu nav ul li.cambia span[class^='icon-'] {
  font-size: 3.5em;
}

@media screen and (min-height: 1025px) {
  body {
    height: 100vh;
  }
  #menu {
    background: none;
    border-right: none;
  }
  #menu nav{
    max-height: 400px;
  }
}
@media screen and (min-width: 1281px) {
}

@media screen and (min-width: 1025px) and (max-width: 1280px) {
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  #menu {
    width: 15%;
  }
}

@media screen and (max-width:767px) {
  #menu {
    border-top: 2px solid black;
    border-right: none;
    bottom: 0px;
    height: 80px;
    width: 100%;
    max-width: 100%;
  }
  #menu nav {
    top: 0px;
    height: 100%;
  }
  #menu nav ul {
    background: none;
    margin-top: 0px;
  }
  #menu nav ul li {
    float: left;
    height: 100%;
    width: 33%;
  }
  #menu nav ul li:first-child {
    margin-left: 0.5%;
  }
  #menu nav ul li span:not([class^='icon-']) {
    display: none;
  }
  #menu nav ul li span[class^='icon-']{
    font-size: 2.5em;
  }
  #menu nav ul li:hover span[class^='icon-'],
  #menu nav ul li.cambia span[class^='icon-'] {
    font-size: 3em;
  }
}

</style>
