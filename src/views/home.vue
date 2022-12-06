<template>
    <div class="h-full">
      <Banner/>
      <div class="mt-20 lg:mt-0">
        <Slider/>
        <div class="mt-5 lg:mt-0">
          <div class="w-full mt-6 lg:mt-20 p-4">
  <base-card>
    <p>Why we should donate blood!?</p>
    <Accordion1
        v-for="item in items"
        :heading="item.title"
        :details="item.details"
        :uniqeId="item.id"
        :selectedIndex="selectedAccordion"
        @setAccordionIndex="setAccordionIndex"
    />

  </base-card>
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
import Dummy from '../components/Dummy.vue'
import BaseCard from "../components/BaseCard.vue";
import Register from "../views/register.vue"
export default{
    name:'Home',
    components:{BaseCard, Banner,Slider,Accordion1,Tips,Dummy,Register},
  data(){
      return{
        selectedAccordion:null,
        items:[
          {
            title:'Blood Donation Is A Great Act Of Kindness',
            details:'Blood Donation Is The Act Of Giving Blood To Someone Who Needs It. It Is Not Just About Giving Blood, But It Is An Act Of Kindness That Saves The Lives Of Hundreds Of People. These Fifteen Minutes Of Your Life Can Save Someone’s Entire Life.',
            id:'1'
          },
          {
            title:'Blood Donation Is A Small Act Of Kindness That Does Great And Big Wonders',
            details:'You Can’t Even Imagine That Donating One Bag Of Blood Can Be So Beneficial To The Human Race. Donating The Blood Without Expecting Or Asking For Any Money Or Gesture Is A Great Act Of Kindness, And If You Are 18 Years Old Or Above, You Should Definitely Take Part In This Act Of Kindness.',
            id:'2'
          },
          {
            title:' Blood Donation Costs You Nothing, But It Can Mean The World To Someone In Need.',
            details:'About 38% Of The United State’s Population Can Donate Blood, But Only 10% Do So. The Reason Why The Percentage Of People Who Donate Is So Low Is Because Of Not Being Aware Of Its Benefits. Many People Think That It Is Harmful Or Will Cause Weakness In The Body. Still, In Reality, It Is Beneficial Because It Reduces The Risk Of Damaged Liver, Pancreas, And Cardiovascular Diseases.',
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
