<template>
  <div class="border-b border-b-[#DBDBDB] last:border-b-0 py-4">
    <button @click="setAccordionStatus()" class="flex justify-between items-center w-full focus:outline-0 outline-0">
      <h2 class="text-base text-blackPrimary font-medium leading-6 text-left">{{heading}}</h2>
      <img src="../assets/images/svg/down-arrow.svg" alt="" :class="open && (selectedIndex === uniqeId) ? 'transform rotate-180 transition-all duration-300 ease-in-out': ''">
    </button>
    <div :class="open && (selectedIndex === uniqeId) ? 'max-h-max transition-all duration-300 ease-in-out': 'max-h-0 overflow-hidden'">
      <p class="text-sm text-blackLight font-normal py-4 text-justify" v-html="details"></p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['heading', 'details', 'uniqeId', 'selectedIndex'],
  data(){
    return{
      open: false,
    }
  },
  methods: {
    setAccordionStatus(){
      this.open = !this.open
      this.$emit('setAccordionIndex', this.uniqeId)
    }
  }
}
</script>

<style>

</style>