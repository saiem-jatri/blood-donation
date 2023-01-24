<template>
    <div>
        <div ref="root" class="flex justify-center items-center">
            <div class="bg-white shadow-lg rounded-xl p-2 w-44">
                <button @click="openDropdown">{{ buttonValue }}</button>
            <div v-if="open">
                <input v-model="searchString" type="text" :placeholder="placeholder" class="w-full bg-white text-black font-normal">

                <div class="divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" v-for="option in filterItems" :key="option.name">
                    <button @click="selectingValue(option.name)">
                        {{option.name }}
                    </button>
                </div>
            </div>
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
    }
   })
   const root = ref(null)
   const dropdownOptions = reactive(props.options)
   const open = ref(false)
   const openDropdown = ()=>{
        open.value = !open.value
   }
   onMounted(()=>{
    console.log(props.options[0])
    buttonValue.value = "Select Options"
   })
   const searchString = ref('')
   const buttonValue = ref('')
   const selectingValue = (value)=>{
        buttonValue.value = value
        open.value = false
        return buttonValue.value
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