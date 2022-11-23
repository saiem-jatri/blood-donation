<template>
    <div class="p-2 lg:p-4 bg-white border-gray-500">
        <div >
            <div>
            <button @click="accordionHaandle('a')" class="w-full flex justify-between px-2 py-2">Why should donate blood? <img src="../assets/images/svg/down-arrow-1.png" :class="toggleAccordion && accordionOpen === 'a' ? 'rotate-180 transition-all ease-in-out delay-200':''"  class="h-4 w-4" alt=""></button>
            <div v-for="item in items" v-if="accordionOpen === 'a' && toggleAccordion" :class="accordionOpen === 'a'? 'max-h-max transition-all ease-in-out delay-500 border-r-4 border-[#d01d33]' : 'h-0 transition-all ease-in-out delay-500' "  class="w-full bg-white text-black text-lg text-justify">
                {{item.a}}
            </div>
        </div>

        <div>
            <button @click="accordionHaandle('b')" class="w-full flex justify-between px-2 py-2">Why should donate blood? <img src="../assets/images/svg/down-arrow-1.png" :class="toggleAccordion && accordionOpen === 'b' ? 'rotate-180 transition-all ease-in-out delay-200':''"  class="h-4 w-4" alt=""></button>
            <div v-for="item in items" v-if="accordionOpen === 'b' && toggleAccordion" :class="accordionOpen === 'b'? 'max-h-max transition-all ease-in-out delay-500 border-r-4 border-[#d01d33]' : 'h-0 transition-all ease-in-out delay-500' "  class="w-full bg-white text-black text-lg text-justify">
               {{item.b}}
            </div>
        </div>

        <div>
            <button @click="accordionHaandle('c')" class="w-full flex justify-between px-2 py-2">Why should donate blood? <img src="../assets/images/svg/down-arrow-1.png" :class="toggleAccordion && accordionOpen === 'c' ? 'rotate-180 transition-all ease-in-out delay-200':''"  class="h-4 w-4" alt=""></button>
            <div v-for="item in items" v-if="accordionOpen === 'c' && toggleAccordion" :class="accordionOpen === 'b'? 'max-h-max transition-all ease-in-out delay-500 border-r-4 border-[#d01d33]' : 'h-0 transition-all ease-in-out delay-500' "  class="w-full bg-white text-black text-lg text-justify">
                {{item.c}}
            </div>
        </div>
        </div>
    </div>
</template>


<script>
export default{
    name:'Accordion',
    data(){
        return{
            accordionOpen:"",
            toggleAccordion: false,

            items:[
                {
                    a:' It was a pleasant evening at The Society Achievers Awards. Our founder Mr. Jagadeesh (Jai) Yelimanchili our ambassa… '
                },
                {
                    b:' It was a pleasant evening at The Society Achievers Awards. Our founder Mr. Jagadeesh (Jai) Yelimanchili our ambassa… '
                },
                {
                    c:' It was a pleasant evening at The Society Achievers Awards. Our founder Mr. Jagadeesh (Jai) Yelimanchili our ambassa… '
                }
            ]
        }
    },
    methods:{
        accordionHaandle(params){
            if(params === 'a'){
                this.accordionOpen = params
                this.toggleAccordion = !this.toggleAccordion
            }if(params === 'b'){
                this.accordionOpen = params
                this.toggleAccordion = !this.toggleAccordion
            }if(params === 'c'){
                this.accordionOpen = params
                this.toggleAccordion = !this.toggleAccordion
            }
        },

    }
}

</script>