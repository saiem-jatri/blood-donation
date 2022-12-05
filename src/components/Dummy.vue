<template>
  <div id="app">
    <h1>Shopping List</h1>
  </div>
  <ul>
    <li v-for="item of state" :key="item.id">
      {{ item.name }}
    </li>
  </ul>
</template>
<script setup>
  import store from "../store/index.js";
  import {computed, onMounted, ref} from "vue";

  const state = computed(()=>{
       return  store.getters['json/allItems']
  })
  store.dispatch('json/getAllItems')
  onMounted(()=>{
   console.log("-----")
  })

</script>
<style>
#app {
  text-align: center;
  color: #2c3e50;
}
li {
  list-style: none;
}
</style>