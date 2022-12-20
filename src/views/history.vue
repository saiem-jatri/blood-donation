<template>
  <div>
    <h2 class="text-2xl font-bold  text-center">heloo this is history page</h2>
    {{data}}
  </div>
</template>

<script setup>
import {computed, onBeforeMount, ref, watch} from "vue";
import {useRoute} from "vue-router";
import store from "../store/index.js";

const route = useRoute();
store.commit('json/AllHistory',route.params.id)
const data= store.state.blogHistory

console.log("mydata====>",data)




</script>