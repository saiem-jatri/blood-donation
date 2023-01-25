<template>
    <div>
        <div ref="root" class="flex justify-center items-center">
            <div class="bg-[#818cf8] shadow-lg rounded-md p-2 w-64">
                <div @click="openDropdown" class="flex justify-between items-center cursor-pointer py-2 border-b-2 border-white">
                    <p class="text-xs font-bold leading-3 text-white" v-html="title"></p>
                     <p class="h-4 w-4 bg-green-700 rounded-sm flex justify-center items-center text-white"> <span :class="open ? 'rotate-180 transition-all ease-in-out delay-50':''">⮟</span></p>
                </div>
                <div class="flex flex-wrap gap-x-1 gap-y-1" v-if="open" >
                    <p class="relative mt-4" v-for="(value,index) in buttonValue" :key="index"><span class="bg-blue-800 text-white rounded-full px-2 flex justify-center items-center">{{ value }}</span><span class="cursor-pointer absolute -top-2 right-0 bg-red-600 h-4 w-4 flex justify-center items-center rounded-full text-white" @click="removeItem(index)">x</span></p>
                </div>
            <transition class="transition-all ease-in-out delay-50">
                <div v-if="open" class="">
                <input :class="jumping ? 'border-2 border-red-800' : ''"  @keydown.enter="blurMethod"  @blur="blurMethod" v-model="searchString" type="text" :placeholder="placeholder" class="w-full bg-white text-black font-normal mt-2 p-2 outline-none border-2 border-lime-700">
                <div class="h-32 overflow-auto">
                    <div class="divide-y divide-gray-100 p-2 cursor-pointer bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hover:bg-gray-400 hover:text-white hover:border-l-2 hover:border-red-600" v-for="option in filterItems" :key="option.name">
                        <li :class="buttonValue.value.toString().includes(option.value) ? 'text-white' : 'text-black'" @click="selectingValue(option.name)">
                            {{option.name }}
                        </li>
                    </div>
                </div>

            </div>
            </transition>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, reactive } from "@vue/reactivity"
import { onBeforeUnmount, onMounted, watch } from "@vue/runtime-core"


const props =  defineProps({
      placeholder: String,
      options: {
      type: Array,
      required: true
    },
      title: String
   })
   const root = ref(null)
   const open = ref(false)
   const openDropdown = ()=>{
        open.value = !open.value
   }
   const searchString = ref('')
   let buttonValue = reactive([])
   const selectingValue = (value)=>{
        buttonValue.push(value)
        jumping.value = false
        return buttonValue.value
   }
 const jumping = ref(false)
   const blurMethod = ()=>{
    if(searchString.value === ''){
        jumping.value = true
    }
    props.options.map((items)=>{
        if(items.name === searchString.value){
            selectingValue(searchString.value)
            jumping.value =false
        }
    })
   }

   const removeItem = (index)=>{
    console.log("clicked")
        buttonValue.splice(index,1)
   }

    const  filterItems = computed (()=>{
      if(searchString.value == '') {
        buttonValue.value = ""
            return props.options
      } else {
        return props.options.filter(items=> items.name.toLowerCase().includes(searchString.value))
      } 
    })

    //   const close=(e)=> {
    //   if (!root.value.contains(e.target.value)) {
    //     console.log("clickeds")
    //     open.value = false;
    //   }else{
    //     open.value = true
    //   }
    // }
    // window.addEventListener("click", close);

    // onBeforeUnmount(()=>{
    // window.removeEventListener("click", close);
    // })

</script>