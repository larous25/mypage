// NOTA: MODIFICAR ESTO
<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-2">
        <MenuComponent/>
      </div>
      <main class="col-12 col-md-10">
        <section id="pres">
          <article>
            <div class="con-pres row">
              <div class='col-lg-9 text-justify'>
                <p> Hola y bienvenido a mi portafolio web, Mi nombre es <strong>BRIAN ESTEBAN BUSTOS BAQUERO</strong> y espero que te sea agradable y le guste tanto como a mí. </p>

                <p>
                  Antes que nada, contare algunas cosas sobre mi persona, soy desarrollador de software también soy estudiante de primer semestre de matemáticas, me gusta <strong>Javascript</strong>, estoy enamorado de <strong>Nodejs</strong>, odio PHP y me cae súper bien <strong>CPP</strong>.
                  <br />
                  Me considero una persona curiosa, creativa y auto critica. Soy muy nervioso y no me gustan para nada las multitudes, soy tan pensativo que raya con lo melancólico y por último hago muchos chistes bobos (pero no me gustan las bromas).
                </p>
                <p>
                  <mark class="orangeUniformBg text-white">Pd: tarde cincuenta minutos escribiendo este texto. </mark>
                </p>
                <button type="button" class="btn btn-lg darkGreyBg text-light rounded-0 download" @click="showForm(formDownload)">
                  Descargar <span style="padding-left:10px; font-size:50px" class="icon-cloud-download float-right"></span>
                  <br>
                  CV/HV
                </button>
                <div class="" v-if="formDownload">
                  <div class="row">
                    <form class="form-inline mt-2">
                      <div class="form-group">
                        <input type="text" class="form-control bg-white" placeholder="Codigo" v-model="code">
                        <button class="ml-1 btn btn-sm bg-black" @click="getCV(code)"  :disabled="disable">
                          Enviar
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="ipre col-lg-3">

                <div id="fotoperfil">
                  <figure class="figure">
                    <img src="../assets/images/dibujopacho.jpg" title="no tengo muchas fotos" class="img-figure img-fluid">
                    <figcaption class="figure-caption">
                        <small class="otraletra"> B.E.B.B. </small>
                        <br />
                        Dev.BackEnd
                    </figcaption>
                  </figure>
                  <div>
                    <strong>Blogs:</strong>
                        <br />
                        <a href="http://elste25.blogspot.com/" target="_blank">personal <span class="icon-blogger"></span></a>
                        <br />
                        <a href="https://larous25.wordpress.com/" target="_blank">codigo <span class="icon-wordpress"></span></a>
                        <br />
                    <strong>Redes:</strong>
                        <br />
                        <a href="https://github.com/larous25" target="_blank"><span class="icon-github"></span></a>
                        <a href="https://twitter.com/LaRous25" target="_blank"><span class="icon-twitter"></span></a>
                        <a href="https://www.linkedin.com/in/brian-esteban-bustos-baquero-a4006350" target="_blank"><span class="icon-linkedin"></span></a>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
        <section id="cos">
          <article>
            <h2 class="subtiar"><a  href="#bie">CONOCIMIENTOS INFORMÁTICOS</a></h2>
            <ConocimientosComponent/>
          </article>
        </section>
        <section id="gus">
          <article>
            <h2 class="subtiar"><a href="#bie">Proyectos</a></h2>
            <div class="con-pres">
                <div class="col">
                  <CarruselComponent/>
                </div>
                <div class="col">
                  <FormularioComponent/>
                </div>
            </div>
          </article>
        </section>
        <footer>
          <div class="fcon">
            <p>
              Página web realizada por Brian Esteba Bustos Baquero no se autoriza copia de su contenido o copia de su diseño sin autorización (es broma puede descargarla en github)
            </p>
          </div>
        </footer>
      </main>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
import MenuComponent from '@/components/Menu'
import ConocimientosComponent from '@/components/Conocimientos'
import CarruselComponent from '@/components/Carrusel'
import FormularioComponent from '@/components/Formulario'

export default {
  name: 'App',
  data () {
    return {
      formDownload: false,
      disable: false,
      code: ''
    }
  },
  components: {
    MenuComponent,
    ConocimientosComponent,
    CarruselComponent,
    FormularioComponent
  },
  methods: {
    showForm (b) {
      this.formDownload = !b
    },
    hideAlert () {
      this.code = ''
      this.disable = false
    },
    getCv (code) {
      this.disable = true
      this.$store.dispatch('getFile', code)
        .then(res => {
          // document.location.href = res
        })
        .catch(error => {
          let { message } = error.request.data
          this.$store.commit('setError', message)
        })
        .then(() => {
          this.disable = false
        })
    },
    ...mapMutations(['setError']),
    ...mapActions(['getFile'])
  }
}
</script>

<style>
html {
  background: #f1f1f1;
}
body {
  max-width: 1800px;
  margin: 0 auto;
  font-size: 14px;
  color: #333;
}
section {
  border-right: 1px solid #ededed;
  border-left: 1px solid #ededed;
  background: #ffffff;
  float: right;
  height: 100vh;
  max-height: 1024px;
  position: relative;
  width: 92%;
  right: 2%;
}
article {
  height: 80%;
  top: 10%;
  position: relative;
}
footer {
  position: relative;
  float: right;
  width: 89%;
  max-height: 150px;
}
input,
label {
  box-sizing: border-box;
}
h1 {
  color: #ff7f66;
  animation: desplegarTitulo 3s linear 1;
  font-size: 40px;
}
h1,
h2 {
  text-align: center;
}
h2 a {
  color: black !important;
}
a {
  text-decoration: none;
}
a,
a:visited {
  color: #ff7f66;
}
a:active {
  color: #ffffff;
}
.con-pres {
  margin-top: 14%;
  width: 90%;
  margin: 0 auto !important;
}
.fcon {
  width: 80%;
  text-align: center;
  background: #2aa3f0;
  margin: 20px auto;
}
.download {
  padding: 25px;
  position: relative;
}

.download::after {
  border: 2px solid transparent;
  bottom: 0px;
  content: "";
  left: 0px;
  position: absolute;
  right: 0px;
  top: 0px;
  transition: all 0.4s ease;
}
.download:hover::after {
  border: 2px solid whitesmoke;
  bottom: 7px;
  left: 7px;
  right: 7px;
  top: 7px;
}

@keyframes desplegarTitulo {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@media screen and (max-width: 767px) {
  h1 {
    display: none;
  }
  section {
    background: #ffffff;
    height: auto;
    width: 100%;
    right: 0%;
    max-height: none;
  }
  article {
    height: auto;
    position: relative;
    right: 0px;
    width: 100%;
  }
  footer {
    margin-bottom: 80px;
    text-align: center;
    width: 100%;
  }
  #pres .con-pres div {
    text-align: center;
    float: left;
    width: 100% !important;
    margin: 0;
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  section,
  footer {
    width: 85%;
    right: 0%;
    position: relative;
  }
  article {
    right: 0px;
    width: 100%;
  }
}
@media screen and (min-width: 1025px) and (max-width: 1280px) {
}
@media screen and (min-width: 1281px) {
}
/*Letras*/
@font-face {
  font-family: 'icomoon';
  src:  url('../assets/fonts/icomoon.eot?43h1er');
  src:  url('../assets/fonts/icomoon.eot?43h1er#iefix') format('embedded-opentype'),
    url('../assets/fonts/icomoon.ttf?43h1er') format('truetype'),
    url('../assets/fonts/icomoon.woff?43h1er') format('woff'),
    url('../assets/fonts/icomoon.svg?43h1er#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
}

[class^="icon-"], [class*=" icon-"] {
  font-family: 'icomoon' !important;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-pencil:before {
  content: "\e905";
}
.icon-profile:before {
  content: "\e923";
}
.icon-folder-open:before {
  content: "\e930";
}
.icon-redo2:before {
  content: "\e968";
}
.icon-reply:before {
  content: "\e96a";
}
.icon-bubbles:before {
  content: "\e96c";
}
.icon-cloud-download:before {
  content: "\e9c2";
}
.icon-twitter:before {
  content: "\ea96";
}
.icon-github:before {
  content: "\eab0";
}
.icon-wordpress:before {
  content: "\eab4";
}
.icon-blogger:before {
  content: "\eab7";
}
.icon-linkedin:before {
  content: "\eac9";
}
</style>
