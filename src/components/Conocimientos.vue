<template>
<div v-html="$options.filters.clear(html)" class="con-pres">

</div>
</template>

<script>
export default {
  name: 'ConocimientoComponent',
  data () {
    return {
      html: '',
      conocimientos: {
        Web: {
          Back: {
            NODEJS: ['Frameworks', 'express', 'NPM'],
            DBMS: ['Mongdb', 'MYSQL', 'SQLite'],
            test: ['moca', 'ava']
          },
          Front: {
            HTML_5: ['semantica '],
            CSS_3: [
              'Animaciones',
              'Media query',
              'Maquetación desde psd',
              'Frameworks, bootstrap'
            ],
            Javascript: [
              'Manejo del Dom',
              'Manejo del Bom',
              'Ajax',
              'Frameworks, Jquery, Vuejs 2, React',
              'Herramientas, webpack, eslint'
            ]
          }
        },
        Nativo: ['C++'],
        Herramientas: ['SSH', 'Git -github', 'Manejo Terminal'],
        Proximo_en_aprender: [
          'Message Brokers',
          'Search Engine',
          'Wocker',
          'Web servers - nginx',
          'GraphQl'
        ],
        Aprendiendo: ['Arquitectura', 'Ingles']
      }
    }
  },
  created () {
    this.html = this.change(this.conocimientos)
  },
  methods: {
    change (obj, n = 0) {
      return Object.entries(obj).map(e => {
        if (!e[1] || Array.isArray(e[1])) {
          return `<div class="c-${n}"> <h4>${e[0]}</h4> ${e[1]} </div> `
        } else {
          return `<h3>${e[0]}</h3> ${this.change(e[1], n + 1)}`
        }
      }).join(' ')
    }
  },
  filters: {
    clear (str) {
      return str.replace(/_/g, ' ')
    }
  }
}
</script>
<style >

</style>
