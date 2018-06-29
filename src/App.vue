<template>
  <div id="main">
     <MenuComponent/>
    <section id="pres">
      <article>
        <h1>Bienvenido a mi portafolio </h1>
        <div class="con-pres">
          <div>
            <h2 class="subtiar"> <a href="#bie">Hola</a></h2>
            <p>
              Mi nombre es BRIAN ESTEBAN BUSTOS BAQUERO soy tecnólogo en desarrollo de software en <strong>Coruniversitec.</strong>
            </p>
            <p>
              Me considero una persona creativa y autocritica. Me encanta el desarrollo en especial el desarrollo web tanto que es mi pasatiempo como la forma en que me gano la vida.
            </p>
          </div>
          <div class="ipre">

            <div id="fotoperfil">
              <figure>
                <img src="./assets/images/foto 2.png" title="no tengo muchas fotos">
                <figcaption>
                  <p>
                    <strong>Dev. Back - end</strong>
                    <br />
                    <small class="otraletra">
                      Brian Esteban
                      <br />
                      Bustos Baquero
                    </small>
                  </p>
                  <p>
                    <strong>Blogs:</strong>
                    <br />
                    <a href="http://elste25.blogspot.com/" target="_blank">personal</a>
                    <br />
                    <a href="https://larous25.wordpress.com/" target="_blank">codigo</a>
                    <br />
                    <strong>redes sociales:</strong>
                    <br />
                    <a href="https://github.com/larous25" target="_blank">github</a>
                    <br />
                    <a href="https://twitter.com/LaRous25" target="_blank">twitter</a>
                  </p>
                </figcaption>
              </figure>
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
            <CarruselComponent/>
            <FormularioComponent/>
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
  </div>
</template>

<script>
import MenuComponent from './components/Menu'
import ConocimientosComponent from './components/Conocimientos'
import CarruselComponent from './components/Carrusel'
import FormularioComponent from './components/Formulario'

export default {
  name: 'App',
  components: {
    MenuComponent,
    ConocimientosComponent,
    CarruselComponent,
    FormularioComponent
  }
}
</script>

<style>
  @import url('./assets/normalize.css');
  html{
    background: #f1f1f1;
  }
  body {
    max-width: 1800px;
    margin: 0 auto;
    font-size: 14px;
    color:#333;
  }
  section {
    border-right:1px solid #ededed;
    border-left:1px solid #ededed;
    background: #ffffff;
    float: right;
    height: 100vh;
    max-height: 1024px;
    position: relative;
    width: 72%;
    right: 8%;
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
  input, label{
    box-sizing: border-box;
  }
  h1 {
    color:#FF7F66;
    animation: desplegarTitulo 3s linear 1;
    font-size: 40px;
  }
  h1, h2 {
    text-align: center;
  }
  h2 a {
    color:black !important;
  }
  a {
    text-decoration: none;
  }
  a, a:visited {
    color:#FF7F66;
  }
  a:active {
    color:#ffffff;
  }
  #pres .con-pres  div {
    float: left;
  }
  #pres .con-pres  div:not(.ipre) {
    width: 78%;
    margin-right: 2%;
  }
  #pres .con-pres  div {
    width: 20%;
  }
  #pres .con-pres  .fotoperfil {
    margin: 0 auto;
  }
  .con-pres {
    margin-top: 14%;
    width: 90%;
    margin: 0 auto;
  }
  .fcon {
    width: 80%;
    text-align: center;
    background: #2aa3f0;
    margin: 20px auto;
  }
@keyframes desplegarTitulo{
  from{ opacity: 0; }
  to{ opacity: 1; }
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
  #pres .con-pres  div {
    text-align: center;
    float: left;
    width: 100% !important;
    margin: 0;
  }
}
@media screen and (min-width: 768px) and (max-width: 1024px) {
  section, footer {
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
/*
Letras
*/
@font-face {
  font-family: 'icomoon';
  src:url('./assets/fonts/icomoon.eot?hbqwyv');
  src:url('./assets/fonts/icomoon.eot?#iefixhbqwyv') format('embedded-opentype'),
      url('./assets/fonts/icomoon.woff?hbqwyv') format('woff'),
      url('./assets/fonts/icomoon.ttf?hbqwyv') format('truetype'),
      url('./assets/fonts/icomoon.svg?hbqwyv#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
}

  [class^="icon-"], [class*=" icon-"] {
      font-family: 'icomoon';
      font-style: normal;
      font-weight: normal;
      font-variant: normal;
      text-transform: none;
      line-height: 1;

      /* Better Font Rendering =========== */
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }

  .icon-pencil:before {
      content: "\e600";
  }
  .icon-headphones:before {
      content: "\e601";
  }
  .icon-pacman:before {
      content: "\e602";
  }
  .icon-profile:before {
      content: "\e603";
  }
  .icon-folder-open:before {
      content: "\e604";
  }
  .icon-support:before {
      content: "\e605";
  }
  .icon-grin:before {
      content: "\e606";
  }
  .icon-evil:before {
      content: "\e607";
  }
  .icon-point-up:before {
      content: "\e608";
  }
  .icon-point-right:before {
      content: "\e609";
  }
  .icon-point-down:before {
      content: "\e60a";
  }
  .icon-point-left:before {
      content: "\e60b";
  }

</style>
