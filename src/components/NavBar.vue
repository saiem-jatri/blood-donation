<template>
    <div class="px-2 lg:px-4 flex justify-between items-center bg-white py-4 shadow-lg sticky top-0">
      <router-link to="/">
        <img src="../assets/images/logos/main-logo.png" class="w-[180px]" alt="">
      </router-link>  
        <div class="flex items-center gap-x-2 lg:gap-x-4">
            <router-link to="/blog">Blog</router-link>
            <router-link to="">Gallery</router-link>
            <div class="bg-[#b91816] p-4 lg:p-2 rounded-md text-white text-center flex justify-center items-center w-full lg:w-[200px]">
                <div class="flex justify-center items-center rounded-full gap-x-4">
                    <img src="../assets/images/svg/phone-icon.png" class="h-4 w-4" alt="">
                    01736640265
                </div>
            </div>
        </div>
    </div>
</template>