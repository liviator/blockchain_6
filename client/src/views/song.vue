<template>
    <p></p>
</template>

<script>

 
var Web3 = require('web3')



export default ({
    setup() {
    },
    async mounted(){
    let web3js =window.web3 
     if (web3js){
        web3js= new Web3(web3js.currentProvider)
        window.ethereum.enable()
    }
        console.log(web3js)
        let pute = await web3js.eth.getBlockNumber()
        alert(pute)
        
        
        web3js.eth.net.GetId(console.log)

    }
})
</script>
