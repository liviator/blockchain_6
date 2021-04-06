<template>
  <div class="home">
    <metamask />
    <p>L'adresse de votre compte est {{$store.state.data.adress}}</p>
    <p>Il a actuellement eu {{$store.state.data.blocknum}} block minés</p>
  </div>
</template>

<script>

import Metamask from '@/components/Metamask.vue'



export default {
  name: 'demo',

  components: {
    Metamask
  },
}

</script>

