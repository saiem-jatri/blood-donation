<template>
  <div>
    <div class="px-4 lg:px-[100px]">
      <p class="text-center text-2xl lg:text-4xl italic text-black"> Blood Donar </p>
      <p class="text-gray-500 text-center text-lg lg:text-lg mt-2">Here are some of our hero who have donate blood recently</p>
      <div  class="border-2 p-4 grid grid-cols-1 lg:grid-cols-3 gap-x-2 gap-y-2 lg:gap-x-4 mt-4">
        <div v-for="blogData in allBlogs" :key="blogData.id">
          <div class="p-20 bg-orange-200 relative">
            <div class="absolute z-0 top-2 right-2 bg-green-700 text-green-100 py-2 px-4 rounded-full text-xs font-bold">{{blogData.bloodGroup}}</div>
            <h3 class="text-orange-400 font-bold mb-4 text-xl md:text-3xl">{{blogData.donarName}}</h3>
            <div class="bg-white rounded-lg shadow-2xl md:flex">
              <img src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8" alt="Laptop on Desk" class="md:w-1/3 rounded-t-lg md:rounded-l-lg md:rounded-t-none" />
              <div class="p-6">
                <h2 class="font-bold text-sm mb-2 text-orange-700">Donar Age: {{blogData.donarAge}}</h2>
                <h2 class="font-bold text-sm mb-2 text-orange-700">Donar Phone: {{blogData.donarphone}}</h2>
                <h2 class="font-bold text-sm mb-2 text-orange-700">Donar Age: {{blogData.donarAge}}</h2>
                <h2 class="font-bold text-sm mb-2 text-orange-700">Donar Age: {{blogData.totalDonateTime}}</h2>
                <h2 class="font-bold text-sm mb-2 text-orange-700">Blood Group: {{blogData.bloodGroup}}</h2>

                <div class="flex justify-end">
                  <button @click.prevent="openDetails(blogData.donarId)" class="text-black text-sm animate-pulse">more info...</button>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      <div class="p-4 fle justify-center items-center border">
        <div v-if="Object.keys(filterItem).length === 0 && allBlogs.length">
          <div class="p-6">
            <p class="font-bold text-sm mb-2 text-yellow-700">{{allBlogs[0].donarName}}</p>
            <h2 class="font-bold text-sm mb-2 text-orange-700">{{allBlogs[0].donarInfo}}</h2>
          </div>
          </div>
        <div v-else>
          <div class="p-6" v-for="item in filterItem" :key="item.donarId">
            <p class="font-bold text-sm mb-2 text-yellow-700">{{item.donarName}}</p>
            <h2 class="font-bold text-sm mb-2 text-orange-700">{{item.donarInfo}}</h2>
          </div>
        </div>
      </div>
    </div>
    <h2 class="text-orange-400 font-bold mt-4 text-xl lg:text-2xl">Thank you for your regular contribution to our blood donation drive. We appreciate your efforts. Thank you</h2>
  </div>

</template>

<script setup>
import store from "../store/index.js";
import {computed, onBeforeMount, ref} from "vue";

store.dispatch('json/getAllBlogs')

const filterItem = ref({})

const allBlogs = computed(()=>{
  return store.getters['json/allBlogItems']
})

const openDetails =(openId)=>{
  console.log(openId)
  console.log("Al blogs",allBlogs.value)
 filterItem.value =  allBlogs.value.filter((items)=>{
  return items.donarId == openId
  })
}

</script>

<style scoped>
.border{
  position: relative;
  font-size: 18px;
}

.border:before{
  content: 'About Doners';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  border: solid 2px #000;
  animation: border_anim 3s linear forwards;
}

@keyframes border_anim {
  0%{
    width: 0%;
  }
  100%{
    width: 100%;
  }
}
</style>