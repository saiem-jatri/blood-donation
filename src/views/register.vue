<template>
    <div>
        <div class="bg-purple-600 min-h-screen flex items-center text-lg">
   <form action="" class="p-10 md:w-2/3 lg:w-1/2 mx-auto rounded">
     <div class="shadow">
        {{donarName.val}}
       <div class="flex items-center bg-purple-400 rounded-t-lg border-purple-500 border-b mb-5">
         <label for="name" class="w-40 text-right mr-8 p-4 text-purple-200">Donar Name</label>
         <input v-model.trim="donarName.val" type="text" name="name" id="name" placeholder="Put in your name" class="flex-1 p-4 pl-0 bg-transparent placeholder-purple-300  outline-none text-white overflow-ellipsis overflow-hidden">
       </div>
       <p v-if="!donarName.isValid" class="text-red-700">invalid!!</p>
       <div class="flex items-center bg-purple-400  rounded-b-lg border-purple-500 mb-5">
         <label for="twitter" class="w-40 text-right p-4 mr-8 text-purple-200">Donar Age</label>
         <input v-model.trim="donarAage.val" type="text" name="twitter" id="age" placeholder="Put your age here" class="flex-1 p-4 pl-0 bg-transparent placeholder-purple-300 outline-none text-white overflow-ellipsis overflow-hidden">
       </div>

       <div class="flex items-center bg-purple-400  rounded-b-lg border-purple-500 mb-5">
         <label for="twitter" class="w-40 text-right p-4 mr-8 text-purple-200">Donar phone</label>
         <input v-model="donarPhone.val" type="text" name="twitter" id="phone" placeholder="Put your phone number here" class="flex-1 p-4 pl-0 bg-transparent placeholder-purple-300 outline-none text-white overflow-ellipsis overflow-hidden">
       </div>

       <div class="flex items-center bg-purple-400  rounded-b-lg border-purple-500 mb-5">
         <label for="twitter" class="w-40 text-right p-4 mr-8 text-purple-200">Donar Info</label>
         <input v-model="donarInfo.val" type="text" name="twitter" id="info" placeholder="Put your information here" class="flex-1 p-4 pl-0 bg-transparent placeholder-purple-300 outline-none text-white overflow-ellipsis overflow-hidden">
       </div>

       <div class="flex items-center bg-purple-400  rounded-b-lg border-purple-500 mb-5">
         <label for="twitter" class="w-40 text-right p-4 mr-8 text-purple-200">Donar Id</label>
         <input v-model="donarId.val" type="text" name="twitter" id="id" placeholder="Put your age here" class="flex-1 p-4 pl-0 bg-transparent placeholder-purple-300 outline-none text-white overflow-ellipsis overflow-hidden">
       </div>
       {{totalDotation.val}}
       <div class="flex items-center bg-purple-400  rounded-b-lg border-purple-500 mb-5">
         <label for="twitter" class="w-40 text-right p-4 mr-8 text-purple-200">Total Donate Time</label>
         <input v-model="totalDotation.val" type="text" name="twitter" id="time" placeholder="Put your age here" class="flex-1 p-4 pl-0 bg-transparent placeholder-purple-300 outline-none text-white overflow-ellipsis overflow-hidden">
       </div>
     </div>
     <button @click.prevent="formsubmition({'name':donarAage.val,'age':donarAage.val,'phone':donarPhone.val,'info':donarInfo.val,'id':donarId.val,'total':totalDotation.val})" class="bg-pink-400 block w-full rounded py-4 text-white font-bold shadow">Submit</button>

   </form>
 </div>
    </div>
</template>

<script setup>
import { reactive } from "@vue/reactivity";



    const donarName = reactive({
        val: '',
        isValid: true,
    })
    const donarAage = reactive({
        val: '',
        isValid: true,
    })
    const donarInfo = reactive({
        val: '',
        isValid: true,
    })
    const donarId = reactive({
        val: '',
        isValid: true,
    })
    const donarPhone = reactive({
        val: '',
        isValid: true,
    })
    const totalDotation = reactive({
        val: '',
        isValid: true,
    })

    const formsubmition = (payloads)=>{
        console.log(payloads);
        return payloads
        
    }
</script>