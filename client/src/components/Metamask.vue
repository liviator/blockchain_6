<template>
  
</template>

<script>
import VueMetamask from 'vue-metamask';

export default {
    components: {
        VueMetamask,
    },
    data(){
        return {
            msg:"test"
        }
    },
    methods: {
        onComplete(data){
            console.log('data:',data)
        }
    }

}
</script>

<style>

</style>