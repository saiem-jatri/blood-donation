<template>
    <div class="">

        <div>
            <input type="text" class="bg-gray-50 p-2 w-40" v-model="searchString">
        </div>
        <div>
            {{sortBy}}
    <select name="sortBy" id="select" v-model="sortBy">
        <option value="o+">O+</option>
        <option value="b+">B+</option>
        <option value="ab+">AB+</option>
    </select>
        </div>
        <div v-for="blog in filterItems" :key="blog.id" class="w-full py-4 bg-gray-400 shadow-sm flex gap-x-4 justify-center items-center text-black">
            <p>Name: {{blog.donarName}}</p>
            <p>age {{blog.donarAge}}</p>
            <p>phone: {{blog.donarPhone}}</p>
            <p>blood Group: {{blog.bloodGroup}}</p>
        </div>
    </div>
</template>

<script setup>
import store from '../store';
import {computed, ref , watch} from "vue";
store.dispatch('json/getAllBlogs')
const sortBy = ref('o+')
const allBlogs = computed(()=>{
  return store.getters['json/allBlogItems']
})

const searchString = ref('')
watch(sortBy, (currentValue) => {
        if(currentValue === 'o+'){
     allBlogs.value = allBlogs.value.sort((a)=>{
          if(a.bloodGroup === 'o+'){
            console.log(a.bloodGroup)
            return 1;
          }else{
            return -1
          }
        })
      }

     else if(currentValue === 'b+'){
          allBlogs.value = allBlogs.value.sort((b)=>{
          if(b.bloodGroup === 'b+'){
            console.log(b.bloodGroup)
            return 1;
          }else{
            return -1
          }
        })
      }
    });


  const  filterItems = computed (()=>{
      if(searchString.value == '') {
        return allBlogs.value;
      } else {
        return allBlogs.value.filter(items=> items.bloodGroup.toLowerCase().includes(searchString.value))
      } 
    })






</script>