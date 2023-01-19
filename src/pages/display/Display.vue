<template>
  <div id="app">
    <index/>
  </div>
</template>

<script>
import index from './components/index.vue'

export default {
  name: 'App',
  components: {
    index
  }
}
</script>

<style>
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }
    body {
        background: url("assets/pageBg.png") top center no-repeat;
    }
</style>
