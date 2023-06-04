<template>
  <div>
    <section class="pt-8 lg:pt-[60px] pb-[60px] bg-[#EFF7FD]">
      <div class="relative pb-12 sm:pb-[90px]">
        <p class="pb-5 text-[#8D8D8F] text-sm sm:text-base lg:text-2xl font-medium">What partners say about us</p>

        <div>
          <input type="radio" name="radioButtonSlider" value="1" id="check1" checked>
          <input type="radio" name="radioButtonSlider" value="2" id="check2">
          <input type="radio" name="radioButtonSlider" value="3" id="check3">
          <input type="radio" name="radioButtonSlider" value="4" id="check4">

          <div class="radio-nav-items flex gap-x-2 absolute bottom-0 right-6 z-50">
            <label for="check1">
              <div class="border border-gray-400 rounded-full w-10 h-10"></div>
            </label>
            <label for="check2">
              <div class="border border-gray-400 rounded-full w-10 h-10"></div>
            </label>
            <label for="check3">
              <div class="border border-gray-400 rounded-full w-10 h-10"></div>
            </label>
            <label for="check4">
              <div class="border border-gray-400 rounded-full w-10 h-10"></div>
            </label>
          </div>
          <div class="slider-items pt-6 lg:pt-10 pb-[110px] lg:pb-10 border-y border-info/20">
          <div class="slider-item relative flex justify-between flex-wrap lg:flex-nowrap">
            <div class="left-content w-full lg:w-3/5">
              <p class="user-review text-dark text-2xl xl:text-4xl">This platform helped me digitize my rental car business. The app is convenient and simple, it's really helpful for booking trips from home!</p>
              <p class="user-review text-dark text-2xl xl:text-4xl">This platform helped me digitize my rental car business. The app is convenient and simple, it's really helpful for booking trips from home!</p>
              <p class="user-review text-dark text-2xl xl:text-4xl">This platform helped me digitize my rental car business. The app is convenient and simple, it's really helpful for booking trips from home!</p>
              <p class="user-review text-dark text-2xl xl:text-4xl">This platform helped me digitize my rental car business. The app is convenient and simple, it's really helpful for booking trips from home!</p>
            </div>
            <div class="right-content w-full lg:w-2/5">
              <div class="user-names relative text-left lg:text-right">
                <p class="user-name text-dark text-xl xl:text-2xl font-medium">Abdul Mohaimen</p>
                <p class="user-name text-dark text-xl xl:text-2xl font-medium">Akil Jawad</p>
                <p class="user-name text-dark text-xl xl:text-2xl font-medium">Shahed Ahmed</p>
                <p class="user-name text-dark text-xl xl:text-2xl font-medium">Khalid Hossain</p>
              </div>

              <div class="user-designations relative text-left lg:text-right">
                <p class="user-designation text-[#8D8D8F] text-base">Hot Boss</p>
                <p class="user-designation text-[#8D8D8F] text-base">API Bro</p>
                <p class="user-designation text-[#8D8D8F] text-base">** Somrat</p>
                <p class="user-designation text-[#8D8D8F] text-base">Scammer</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
input[type="radio"] {
  @apply absolute right-0 bottom-0 opacity-0 transition-all
}
label {
  @apply cursor-pointer  border-transparent transition-all
}

#check1:checked ~ .radio-nav-items label:first-child,
#check2:checked ~ .radio-nav-items label:nth-child(2),
#check3:checked ~ .radio-nav-items label:nth-child(3),
#check4:checked ~ .radio-nav-items label:last-child{
  @apply border-2 border-[#f04935] rounded-full
}

.user-review,
.user-name,
.user-designation {
  @apply opacity-0 h-0 translate-y-24 transition-all duration-500
}
.user-name,
.user-designation {
  @apply lg:right-0 absolute w-1/2 mt-8 lg:mt-0
}
.user-designation {
  @apply top-8
}

#check1:checked ~ .slider-items .slider-item .left-content .user-review:first-child,
#check2:checked ~ .slider-items .slider-item .left-content .user-review:nth-child(2),
#check3:checked ~ .slider-items .slider-item .left-content .user-review:nth-child(3),
#check4:checked ~ .slider-items .slider-item .left-content .user-review:last-child,

#check1:checked ~ .slider-items .slider-item .right-content .user-names .user-name:first-child,
#check2:checked ~ .slider-items .slider-item .right-content .user-names .user-name:nth-child(2),
#check3:checked ~ .slider-items .slider-item .right-content .user-names .user-name:nth-child(3),
#check4:checked ~ .slider-items .slider-item .right-content .user-names .user-name:last-child,

#check1:checked ~ .slider-items .slider-item .right-content .user-designations .user-designation:first-child,
#check2:checked ~ .slider-items .slider-item .right-content .user-designations .user-designation:nth-child(2),
#check3:checked ~ .slider-items .slider-item .right-content .user-designations .user-designation:nth-child(3),
#check4:checked ~ .slider-items .slider-item .right-content .user-designations .user-designation:last-child{
  @apply !opacity-100 !h-auto !translate-y-0
}


</style>