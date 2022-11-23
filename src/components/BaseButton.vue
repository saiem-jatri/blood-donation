<template>
    <div>
        <router-link v-if="!link" :class="mode = 'outline' ? 'bg-transparent border-[#270041] text-[#270041]' : 'bg-transparent border-none text-[#3a0061]'">
            <slot></slot>
        </router-link>
        
        <router-link v-else :to="to" :class="mode = 'outline' ? 'bg-[#3a0061] border-none text-white' : 'bg-transparent border-none text-[#3a0061]'">
            <slot></slot>
        </router-link>
    </div>
</template>
<script>
export default{
    props:{
        mode:{
            type: String,
            required: false,
            default: null
        },
         link:{
            type:Boolean,
            required: false,
            default: false
         },
         to:{
            type:String,
            required:false,
            default:'/'
         }
    }
}
</script>