<template>
    <div class="p-2 lg:p-4 bg-white">
    <div class="flex  p-4 border-gray-900 rounded-md">
        <div class="flex flex-col gap-x-2 w-1/2 gap-y-2">
            <button :class="status === 'state1' ? 'bg-[#d01d33] text-white' : 'bg-fuchsia-300 text-black'" class="w-full py-2 text-sm lg:text-xl italic"  @click="status = 'state1'">Blood Donation</button>
            <button :class="status === 'state2' ? 'bg-[#d01d33] text-white' : 'bg-fuchsia-300 text-black'" class="w-full py-2 text-sm lg:text-xl italic"  @click="status = 'state2'">Donate Your Blood</button>
            <button :class="status === 'state3' ? 'bg-[#d01d33] text-white' : 'bg-fuchsia-300 text-black'" class="w-full py-2 text-sm lg:text-xl italic"  @click="status = 'state3'">Do You Know</button>
        </div>

        <div class="w-1/2">
            <div v-if="status === 'state1'" class="bg-transparent w-full h-full flex gap-x-2">
                <img src="../assets/images/custome/img4.png" class="" alt="">
            </div> 
            <div v-if="status === 'state2'" class="bg-transparent w-full h-full flex gap-x-2">
                <img src="../assets/images/custome/img2.png" class="" alt="">
                
            </div> 
            <div v-if="status === 'state3'" class="bg-transparent w-full h-full flex gap-x-2">
                <img src="../assets/images/custome/img3.png" class="" alt="">
                
            </div> 
        </div>
    </div>
    </div>

  </template>

<script>
export default {
  name: 'Slider',
  data(){
    return{
        status: "state1"
    }
  }
}
</script>