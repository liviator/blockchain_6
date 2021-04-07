<template>
  <div class="home">
    <metamask />
    <p  v-if=isLoggedIn>L'adresse de votre compte est {{$store.state.data.adress}}</p>
    <p  v-if=isLoggedIn>Il a actuellement eu {{$store.state.data.blocknum}} block minés</p>
  </div>
</template>

<script>

import Metamask from '@/components/Metamask.vue'

import { mapGetters, mapState } from 'vuex'

export default {
  name: 'demo',

  computed: {
    ...mapState({
      user: state => state.user.data
    }),
    ...mapGetters(['isLoggedIn'])
  },

  components: {
    Metamask
  },
}

</script>

