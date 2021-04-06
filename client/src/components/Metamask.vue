<template>
  <button
    class="rounded shadow-md bg-white px-4 py-2 mx-2 leading-8"
    @click="connectMetamask"
  >
    
    Connect Metamask
  </button>
</template>

<script>
import Web3 from 'web3';
export default {
  name: 'ConnectMetamask',
  methods: {
    async connectMetamask() {

      if (typeof window.ethereum !== 'undefined') {
        window.web3 = new Web3(window.ethereum);
        window.ethereum.enable();
            window.web3.eth.getAccounts((error,result) => {
                if(error){ console.log(error)}
                else{
                    var adress = result
                    window.web3.eth.getBlockNumber((error,result) => {
                if(error){ console.log(error)}
                else{
                    var blocknum = result
                    console.log(window.web3.currentProvider.)
                     this.$store.dispatch('login',{adress,blocknum})
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