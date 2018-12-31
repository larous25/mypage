<template>
<div class="con-pres">
  <div v-if="knewledges.length" class="row">
    <div v-for="knewledge in knewledges" :key="knewledge.branch" class="col">
      <div class="cos-card card">
        <div class="card-header text-center">
          {{ knewledge.branch }}
        </div>
        <ul class="list-group list-group-flush">
          <li v-for="l in knewledge.leaves" :key="l" class="list-group-item">
            {{l}}
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div v-else class="col">
    <h4 class="text-center" style="margin-top:200px">
      Sólo sé que no sé nada
    </h4>
  </div>
</div>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  name: 'ConocimientoComponent',
  created () {
    this.$store.dispatch('getKnewledges')
      .then(({ data }) => {
        this.$store.commit('changeKnewledges', data)
      })
      .catch(err => {
        let { message } = err.request.data
        this.$store.commit('setError', message)
      })
  },
  methods: {
    ...mapMutations(['changeKnewledges', 'setError']),
    ...mapActions(['getKnewledges'])
  },
  computed: mapState(['knewledges'])
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
