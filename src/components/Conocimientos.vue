<template>
<div class="con-pres row">
  <div v-for="(conocimiento, index) in conocimientos" :key="index" class="col">
  <div class="cos-card card">
    <div class="card-header text-center">
      {{ index }}
    </div>
      <ul v-if="conocimiento" class="list-group list-group-flush">
        <li v-for="c in conocimiento" :key="c" class="list-group-item">
          {{c}}
        </li>
      </ul>
  </div>
  </div>
</div>
</template>
<script>
/*
  NOTA: esto podria estar en un api?
  creo que deberia
*/
export default {
  name: 'ConocimientoComponent',
  data () {
    return {
      conocimientos: {
        NodeJS: ['Frameworks: expressjs, ', 'npm'],
        DBMS: ['Mongdb', 'MYSQL', 'SQLite'],
        Test: ['mochajs', 'avajs', 'chaijs'],
        HTML_5: ['web semantica'],
        CSS_3: [
          'Animaciones',
          'Media query',
          'Maquetación desde psd',
          'Frameworks: bootstrap'
        ],
        JavaScript: [
          'Manejo del Dom',
          'Manejo del Bom',
          'Ajax',
          'Frameworks: Jquery, Vuejs 2, React',
          'Herramientas: webpack, eslint'
        ],
        Otros: ['SSH', 'Git', 'Manejo Terminal']
      }
    }
  },
  methods: {
    change () {
    }
  }
}
</script>
<style >
.cos-card {
  margin-top: 20px;
  transition: all 1s ease-in-out 0.5s;
}
.card:hover,
.card:focus  {
  animation: shadow-drop-lr 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
.card .card-header {
  transition: all 0.4s ease-in-out 0.3s;
}
.card:hover .card-header,
.card:focus .card-header  {
  color: whitesmoke;
  font-weight: bold;
  background: black;
}

/* ty animistia for this */
@keyframes shadow-drop-lr {
  0% {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    box-shadow: -12px 0 20px -12px rgba(0, 0, 0, 0.35), 12px 0 20px -12px rgba(0, 0, 0, 0.35);
  }
}

</style>
