<template>
    <div class="h-full">
<Banner/>
<div class="mt-20 lg:mt-0">
<Slider/>
<div class="mt-5 lg:mt-0">
<Accordion/>
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
import Accordion from '../components/Accordion.vue'
import Tips from '../components/Tips.vue'
export default{
    name:'Home',
    components:{Banner,Slider,Accordion,Tips}
}
</script>
