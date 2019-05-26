<template>
  <div class="container py-5">
    <div>
      <h1>Administrador</h1>
      Cantidad de visitas actualmente
      <span v-if="counter.length">
        {{ counter[0].total }}
      </span>
      <div v-for="visit in visits" :key="visit._id">
        <small>{{ visit._id }}</small>
        <strong>{{ visit.quantity }}</strong>
        {{ visit.ip }}
      </div>
    </div>
    <div>
      <h3>knewledge</h3>
      <div>
        <h4>Agregar un nuevo conocimiento</h4>
        <label for="branch">Principal</label>
        <input id="branch" name="branch" type="text" v-model="knewledge.branch">
        <label for="leave">Herramienta</label>
        <input id="leave" name="leave" type="text" v-model="leave">
        <button class="btn btn-lg" @click="newleave(leave)">Agragar herramienta</button>
        <div v-if="knewledge.leaves.length">{{ knewledge.leaves.join(' / ') }}</div>
        <button
          v-if="knewledge.leaves.length"
          class="btn btn-lg"
          @click="newKnewledge(knewledge)"
        >Agragar Rama</button>
      </div>
      <!-- conociemientos actuales -->
      <div>
        <button class="btn btn-lg" @click="getKnewledges()">Ver Conocimientos Actuales</button>
        <div v-if="knewledges.length">
          <h4>todos los conocimientos actualmente</h4>
          <div>
            <div v-for="k in knewledges" :key="k">
              <small>{{ k._id }}</small>
              <strong>{{ k.branch }}</strong>
              {{ k.leaves.join('-') }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h3>contactos</h3>
      <div v-if="contacts.length">
        <div v-for="c in contacts" :key="c">
          <small>{{c._id}}</small>
          <strong>Nombre:</strong>
          {{c.name}}
          <strong>Telefono:</strong>
          {{c.telephone}}
          <strong>Asunto:</strong>
          {{c.issue}}
        </div>
      </div>
      <div v-else>Creo que no somo populares =(</div>
    </div>
    <div>
      <h3>cupones</h3>
      <div>
        <div>
          <h4>crear nuevo</h4>
          <div>
            <label for="code">Codigo</label>
            <input id="code" name="code" type="text" minlength="9" v-model="coupon.code" required>
            <label for>Limite</label>
            <input id="limit" name="limit" type="number" min="0" v-model="coupon.limit" required>
            <button @click="newCoupon(coupon)" class="btn btn-lg">Enviar</button>
          </div>
        </div>
        <button class="btn btn-lg" @click="getCoupons()">Ver Cupones Actuales</button>
        <div v-if="coupons.length">
          <h3>Exitentes</h3>
          <div v-for="c in coupons" :key="c">
            <small>{{ c._id }}</small>
            {{ c.code }}
            {{ c.use }}
            {{ c.limit }}
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapState } from 'vuex'
import Axios from 'axios'

export default {
  name: 'admin',
  data () {
    return {
      leave: ''
    }
  },
  created () {
    Axios.all([
      this.$store.dispatch('getContacts'),
      this.$store.dispatch('getVisits')
    ])
      .then(([v, c]) => {
        this.$store.commit('changeVisits', v.data.visits)
        this.$store.commit('changeCounter', v.data.counter)
        this.$store.commit('changeContacts', c.data.contacts)
      })
      .catch(err => {
        let { message } = err.request.data
        this.$store.commit('setError', message)
      })
  },
  methods: {
    newleave (leave) {
      this.leave = ''
      this.$store.commit('addLeave', leave)
    },
    ...mapMutations(['addLeave', 'changeContacts', 'changeCoupons']),
    newCoupon (coupon) {
      this.$store
        .dispatch('sendCoupon', coupon)
        .then()
        .catch()
    },
    newKnewledge (knewledge) {
      this.$store
        .dispatch('sendKnewledge', knewledge)
        .then()
        .catch()
    },
    getKnewledges () {
      this.$store
        .dispatch('getKnewledges')
        .then(k => {
          this.$store.commit('changeKnewledges', k.knewledges)
        })
        .catch(err => {
          let { message } = err.request.data
          this.$store.commit('setError', message)
        })
    },
    getCoupons () {
      this.$store
        .dispatch('getCoupons')
        .then(c => {
          this.$store.commit('changeCoupons', c.coupons)
        })
        .catch(err => {
          let { message } = err.request.data
          this.$store.commit('setError', message)
        })
    },
    ...mapActions([
      'getVisits',
      'getContacts',
      'getCoupons',
      'sendCoupon',
      'getKnewledges',
      'sendKnewledge',
      'setError'
    ])
  },
  computed: mapState([
    'visits',
    'counter',
    'contacts',
    'coupons',
    'coupon',
    'knewledge',
    'knewledges'
  ])
}
</script>
<style>
</style>
