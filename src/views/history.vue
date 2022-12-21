<template>
  <div>
    <h2 class="text-2xl font-bold  text-center">heloo this is history page</h2>
    {{singleBlog}}
  </div>
</template>

<script setup>
import {computed, onBeforeMount, onBeforeUnmount, onMounted, ref, watch} from "vue";
import {useRoute} from "vue-router";
import store from "../store/index.js";

const route = useRoute();

const allData = ()=>{
  store.dispatch('json/getAllBlogs')
}
allData()


watch(() => store.getters['json/allBlogItems'], () => {
  store.commit('json/AllHistory', route.params.id)
}, {immediate: true})

const singleBlog = computed(() => store.getters['json/getFilteredHistory'])



</script>