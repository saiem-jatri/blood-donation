<template>
    <div class="h-full">
<Banner/>
<div class="mt-20 lg:mt-0">
<Slider/>
<div class="mt-5 lg:mt-0">
  <div class="w-full mt-6 lg:mt-20">
    <Accordion1
        v-for="item in items"
        :heading="item.details"
        :details="item.title"
        :uniqeId="item.id"
        :selectedIndex="selectedAccordion"
        @setAccordionIndex="setAccordionIndex"
    />

  </div>
</div>
<div class="mt-5 lg:mt-0">
<Tips/>
</div>
</div>
</div>
</template>

<script>
import Banner from '../components/Banner.vue'
import Slider from '../components/Slider.vue'
import Accordion1 from '../components/Accordion1.vue'
import Tips from '../components/Tips.vue'
export default{
    name:'Home',
    components:{Banner,Slider,Accordion1,Tips},
  data(){
      return{
        selectedAccordion:null,
        items:[
          {
            title:' It was a pleasant evening at The Society Achievers Awards. Our founder Mr. Jagadeesh (Jai) Yelimanchili our ambassa… ',
            details:'haha',
            id:'1'
          },
          {
            title:' It was a pleasant evening at The Society Achievers Awards. Our founder Mr. Jagadeesh (Jai) Yelimanchili our ambassa… ',
            details:'haha two',
            id:'2'
          },
          {
            title:' It was a pleasant evening at The Society Achievers Awards. Our founder Mr. Jagadeesh (Jai) Yelimanchili our ambassa… ',
            details:'haha three',
            id:'3'
          }
        ]
      }
  },

  methods:{
    setAccordionIndex(id){
      this.selectedAccordion = id;
    },
  }
}
</script>
