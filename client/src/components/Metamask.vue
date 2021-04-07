<template>
  <button v-if=!isLoggedIn
    class="rounded shadow-md bg-white px-4 py-2 mx-2 leading-8"
    @click="connectMetamask"
  >
    
    Connect Metamask
  </button>
</template>

<script>

import Web3 from 'web3';
import { mapGetters, mapState } from 'vuex'
//import abi from '../assets/abi' 




export default {
  name: 'ConnectMetamask',
  computed: {
    ...mapState({
      user: state => state.user.data
    }),
    ...mapGetters(['isLoggedIn'])
  },
  methods: {
    async connectMetamask() {

      if (typeof window.ethereum !== 'undefined') {
        
        window.web3 = new Web3(window.web3.currentProvider);
        window.ethereum.enable();
        console.log(window.web3)
        //let contract = "0x004a84209a0021b8ff182ffd8bb874c53f65e90e"
        //var song = new window.web3.eth.Contract(abi.abi,contract)
        //console.log(song.functions.name().call()) les fonctions web3 ne fonctionnent pas

            window.web3.eth.getAccounts((error,result) => {
                if(error){ console.log(error)}
                else{
                    var adress = result
                    window.web3.eth.getBlockNumber((error,result) => {
                if(error){ console.log(error)}
                else{
                    var blocknum = result
                     this.$store.dispatch('login',{adress,blocknum})
                     .then(this.$router.push('/about'))
                     
                }})
                
                }
            })

        
        
        
      }
       else {
        console.error('MetaMask is not detected!');
      }
    },
  },
};
</script>