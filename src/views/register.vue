<template>
    <div>
        <div class="bg-purple-600 min-h-screen flex items-center text-lg">
   <form action="" class="p-10 md:w-2/3 lg:w-1/2 mx-auto rounded">
     <div class="shadow">
       <div class="flex items-center bg-purple-400 rounded-t-lg border-purple-500 border-b mb-5">
         <label for="name" class="w-40 text-right mr-8 p-4 text-purple-200">Donar Name</label>
         <input v-model.trim="donarName.val" type="text" name="name" id="name" placeholder="Put in your name" class="flex-1 p-4 pl-0 bg-transparent placeholder-purple-300  outline-none text-white overflow-ellipsis overflow-hidden">
       </div>
       <p v-if="donarName.isValid" class="text-red-700">Please input your name!!</p>
       <div class="flex items-center bg-purple-400  rounded-b-lg border-purple-500 mb-5">
         <label for="twitter" class="w-40 text-right p-4 mr-8 text-purple-200">Donar Age</label>
         <input v-model.trim="donarAage.val" type="text" name="twitter" id="age" placeholder="Put your age here" class="flex-1 p-4 pl-0 bg-transparent placeholder-purple-300 outline-none text-white overflow-ellipsis overflow-hidden">
       </div>

       <p v-if="donarName.isValid" class="text-red-700">Please input your Blood Group!!</p>
       <div class="flex items-center bg-purple-400  rounded-b-lg border-purple-500 mb-5">
         <label for="twitter" class="w-40 text-right p-4 mr-8 text-purple-200">Blood Group</label>
         <input v-model.trim="bloodGroup.val" type="text" name="twitter" id="age" placeholder="Put your Blood Group" class="flex-1 p-4 pl-0 bg-transparent placeholder-purple-300 outline-none text-white overflow-ellipsis overflow-hidden">
       </div>

       <p v-if="donarAage.isValid" class="text-red-700">Please input your age!!</p>
       <div class="flex items-center bg-purple-400  rounded-b-lg border-purple-500 mb-5">
         <label for="twitter" class="w-40 text-right p-4 mr-8 text-purple-200">Donar phone</label>
         <input v-model="donarPhone.val" type="number" name="twitter" id="phone" placeholder="Put your phone number here" class="flex-1 p-4 pl-0 bg-transparent placeholder-purple-300 outline-none text-white overflow-ellipsis overflow-hidden">
       </div>
       <p v-if="donarPhone.isValid" class="text-red-700">Please input your phone!!</p>
       <div class="flex items-center bg-purple-400  rounded-b-lg border-purple-500 mb-5">
         <label for="twitter" class="w-40 text-right p-4 mr-8 text-purple-200">Donar Info</label>
         <input v-model="donarInfo.val" type="text" name="twitter" id="info" placeholder="Put your information here" class="flex-1 p-4 pl-0 bg-transparent placeholder-purple-300 outline-none text-white overflow-ellipsis overflow-hidden">
       </div>
       <p v-if="donarId.isValid" class="text-red-700">Please input your Id!!</p>
       <div class="flex items-center bg-purple-400  rounded-b-lg border-purple-500 mb-5">
         <label for="twitter" class="w-40 text-right p-4 mr-8 text-purple-200">Donar Id</label>
         <input v-model="donarId.val" type="text" name="twitter" id="id" placeholder="Put your age here" class="flex-1 p-4 pl-0 bg-transparent placeholder-purple-300 outline-none text-white overflow-ellipsis overflow-hidden">
       </div>
       <p v-if="totalDotation.isValid" class="text-red-700">Please input your Total Donate Time!!</p>
       <div class="flex items-center bg-purple-400  rounded-b-lg border-purple-500 mb-5">
         <label for="twitter" class="w-40 text-right p-4 mr-8 text-purple-200">Total Donate Time</label>
         <input v-model="totalDotation.val" type="text" name="twitter" id="time" placeholder="Put your age here" class="flex-1 p-4 pl-0 bg-transparent placeholder-purple-300 outline-none text-white overflow-ellipsis overflow-hidden">
       </div>
     </div>
     <button @click.prevent="addBlogsData" class="bg-pink-400 block w-full rounded py-4 text-white font-bold shadow">Submit</button>

   </form>
 </div>
 <Dropdown
   :options="options"
   :placeholder="propsPlaceholder"
   >

   </Dropdown>
    </div>
</template>

<script setup>
import Dropdown from "../components/Dropdown.vue"
import { reactive } from "@vue/reactivity";
import store from "../store/index.js";
import {ref} from "vue";

const propsPlaceholder = ref("Enter a string")
const options = reactive([
  {
    option:"apple",
    name:"apple"
  },
  {
    option:"bananna",
    name:"bananna"
  },
  {
    option:"mango",
    name:"mango"
  }
])

    const donarName = reactive({
        val: '',
        isValid: false,
    })
    const donarAage = reactive({
        val: '',
        isValid: false,
    })
    const donarInfo = reactive({
        val: '',
        isValid: false,
    })
    const donarId = reactive({
        val: '',
        isValid: false,
    })
    const donarPhone = reactive({
        val: '',
        isValid: false,
    })
    const totalDotation = reactive({
        val: '',
        isValid: false,
    })
const bloodGroup = reactive({
        val: '',
        isValid: false,
    })
const formIsValid = ref(true)


const addBlogsData = () => {
  formIsValid.value = true;
  if (donarName.val === '') {
    donarName.isValid = true;
   formIsValid.value = false;
  }
  if (donarAage.val === '') {
    donarAage.isValid = true;
    formIsValid.value = false;
  }
  if (donarPhone.val === '') {
    donarPhone.isValid = true;
    formIsValid.value = false;
  }
  if (donarInfo.val === '') {
    donarInfo.isValid = true;
    formIsValid.value = false;
  }
  if (donarId.val === '') {
    donarId.isValid = true;
    formIsValid.value = false;
  }
  if (totalDotation.val === '') {
    totalDotation.isValid = true;
    formIsValid.value = false;
  }
  if (bloodGroup.val === '') {
    bloodGroup.isValid = true;
    formIsValid.value = false;
  }
else {
    console.log("name",donarName.val)
    const payloads = {'donarName':donarName.val, 'bloodGroup':bloodGroup.val, 'donarAge':donarAage.val,'donarInfo':donarInfo.val,'donarId':donarId.val,'donarphone':donarPhone.val,'totalDonateTime':totalDotation.val}
    console.log("payloads",payloads)
    store.dispatch('json/addBlogsData',payloads)
  }
}

</script>
