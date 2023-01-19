<template>
    <div id="index">
        <div class="bg">
            <div>
                <div class="head">
                    <dv-decoration-8 style="width:40%;height:20%;" />
                    <div style="width:20%" class="title">taptap数据分析可视化平台</div>
                    <dv-decoration-8 style="width:40%;height:20%;" :reverse="true"/>
                </div>
            </div>
            <display-box-1></display-box-1>
        </div>
    </div>
</template>

<script>
import DisplayBox1 from './GameQuantity/DisplayBox1.vue'

export default {
    data(){
        return {
            msg: 'index'
        }
    },
    components:{
        DisplayBox1
    }
}
</script>

<style type='text/css'>
    #index {
        color: #d3d6dd;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
    }
    .bg {
        width: 100%;
        height: 100%;
    }
    .head {
        width: 100vw;
        height: 20vh;
        display: flex;
        flex-direction: row;
    }
    .title{
        font: bolder;
        font-size: 20px;
    }

</style>