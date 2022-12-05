<template>
  <div class="border-b border-b-[#DBDBDB] last:border-b-0 py-4 shadow-sm">
    <button @click="setAccordionStatus()" class="flex justify-between items-center w-full focus:outline-0 outline-0 px-4">
      <h2 class="text-base text-blackPrimary font-medium leading-6 text-left">{{heading}}</h2>
      <img src="../assets/images/svg/down-arrow-1.png" alt="" :class="open && (selectedIndex === uniqeId) ? 'transform rotate-180 transition-all duration-300 ease-in-out w-5 h-5': 'w-5 h-5'">
    </button>
    <div :class="open && (selectedIndex === uniqeId) ? 'max-h-max transition-all duration-300 ease-in-out': 'max-h-0 overflow-hidden'">
      <p class="text-sm text-blackLight font-normal py-4 px-10 text-justify border-l-4 border-red-600 transition-all duration-300 ease-in-out" v-html="details"></p>
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