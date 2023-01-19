<template>
    <echart :chartOpts="options" :height="300" :width="500"></echart>
</template>

<script>
import Echart from '../Echart.vue'
export default {
    data(){
        return {
            options:{
                
            }
        }
    },
    components:{
        Echart
    }
}
</script>

<style>

</style>