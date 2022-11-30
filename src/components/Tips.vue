<template>
    <div class="px-4 lg:px-[100px]">
        <p class="text-center text-2xl lg:text-4xl italic text-black"> Tips </p>
        <p class="text-gray-500 text-center text-lg lg:text-lg mt-2">Here are some tips to put your mind at ease <br> during the blood donation process</p>
   <div class="border-2 p-4 grid grid-cols-1 lg:grid-cols-3 gap-x-2 lg:gap-x-4 mt-4">
     <div v-for="cardData in myCardData" :key="myCardData" class="">
       <div class="shadow-2xl pb-8 px-4">
         <p class="py-2 border-b border-gray-400 text-black font-[700] text-lg lg:text-2xl">{{cardData.headings}}</p>
         <div v-for="data in cardData.listData" :key="data" class="flex gap-x-2 mt-2">
           <div class="h-3 w-3 bg-red-600 rounded-full"></div>
           <p class="text-gray-500 text-center text-sm">{{data}}</p>
         </div>
       </div>
     </div>
   </div>
    </div>
</template>

<script setup>
import store from "../store/index.js";
import {computed, onMounted, ref} from "vue";

const myCardData = computed(()=>{
  return store.getters['json/allICardtems']
})
store.dispatch('json/getAllCardItems')
onMounted(()=>{
  console.log("mycarddata is ",myCardData.value)
})
</script>