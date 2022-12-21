<template>
    <div class="">
      <div class="flex flex-col justify-end items-end mt-5 mr-20">
        <p class=" text-sm font-bold">Search with Blood Group</p>
        <div class="mb-3 xl:w-96">
          <div class="input-group relative flex flex-wrap items-stretch w-full mb-4">
            <input v-model="searchString" type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search with Blood Group" aria-label="Search" aria-describedby="button-addon2">
          </div>
        </div>
      </div>
<!--      <div>-->
<!--    <select name="sortBy" id="select" v-model="sortBy">-->
<!--        <option value="o+">O+</option>-->
<!--        <option value="b+">B+</option>-->
<!--        <option value="ab+">AB+</option>-->
<!--    </select>-->
<!--        </div>-->

<!--      table start-->
      <!-- component -->
      <section class="mx-auto p-6 p-[10px] font-mono">
        <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div class="w-full overflow-x-auto">
            <table class="w-full">
              <thead>
              <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                <th class="px-4 py-3">Name</th>
                <th class="px-4 py-3">Age</th>
                <th class="px-4 py-3">Phone</th>
                <th class="px-4 py-3">Blood Group</th>
                <th class="px-4 py-3">Total Donate</th>
                <th class="px-4 py-3">History</th>
                <th class="px-4 py-3">Remove</th>
              </tr>
              </thead>
              <tbody class="bg-white">
              <tr v-for="blog in visibleDonars" :key="blog.id" class="text-gray-700 text-left">
                <td class="px-4 py-3 border text-left">
                  <div class="flex items-center text-sm ">
                    <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                      <img class="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" loading="lazy" />
                      <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                    </div>
                    <div>
                      <p class="font-semibold text-black">{{blog.donarName}}</p>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-3 text-ms font-semibold border">{{blog.donarAge}}</td>
                <td class="px-4 py-3 text-xs border">
                  <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">{{blog.donarphone}}</span>
                </td>
                <td class="px-4 py-3 text-sm border">{{blog.bloodGroup}}</td>
                <td class="px-4 py-3 text-sm border"><span :class="blog.totalDonateTime > 4 ? 'font-extrabold text-pink-900': ''">{{blog.totalDonateTime}}</span></td>
                <td class="px-4 py-3 text-sm border">
                  {{blog.id}}
                  <router-link :to="'/donar/'+blog.id">History</router-link>
                </td>

                <td class=" border">
                  <button @click="deleteBlog(blog.id)" class="text-[#b91816] text-sm text-center font-bold w-full flex justify-center">Delete</button>
                  </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- pagination -->
      <div v-if="totalPages > 0" >
        {{totalPages}}
        <div style="display: flex; justify-content: center;">
          <button v-if="showPreviousLnk" @click="updatePageNumber(currentPage - 1)">previous</button>
          <div v-for="page in totalPages" @click="updatePageNumber(page)" style="padding: 5px; background: #ddd; margin-right: 2px; cursor: pointer;">{{page}}</div>
          <button v-if="showNextLnk" @click="updatePageNumber(currentPage + 1)">Next {{currentPage}}</button>
        </div>
      </div>
    </div>
</template>

<script setup>
import store from '../store';
import {computed, onBeforeMount, onMounted, ref, watch} from "vue";
const sortBy = ref('o+')
const currentPage = ref(0)
const pageSize = ref(3)
const visibleDonars = ref('')
const searchString = ref('')
const allBlogs = computed(()=>{
  return store.getters['json/allBlogItems']
})
const allData = ()=>{
  store.dispatch('json/getAllBlogs')
}
allData()

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

     else if(currentValue === 'ab+'){
          allBlogs.value = allBlogs.value.sort((b)=>{
          if(b.bloodGroup === 'ab+'){
            console.log(b.bloodGroup)
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

onBeforeMount(()=>{
  console.log(allBlogs.value)
  updateVisibleDonars()
})


const updatePageNumber = (pageNumber)=>{
  currentPage.value = pageNumber
  updateVisibleDonars()
}

const updateVisibleDonars = ()=>{

  const initialSortingDonars = allBlogs.value.slice(currentPage.value * pageSize.value ,(currentPage.value * pageSize.value) + pageSize.value)
      .sort((a,b)=>{
        if(a.donarName > b.donarName) return 1;
        if(a.donarName < b.donarName) return -1;
        return 0;
      })

   visibleDonars.value = initialSortingDonars

  console.log("initial donars",initialSortingDonars)
  console.log("visible donars",visibleDonars.value)

  if(visibleDonars.value === 0 && currentPage.value > 0){
    updatePageNumber(currentPage.value - 1);
  }
}


watch(allBlogs, () => {
  console.log('teasda')
  updateVisibleDonars();
}, {immediate: true})

const totalPages = computed(()=>{
  return Math.ceil(filterItems.value.length / pageSize.value)
})

const showPreviousLnk = computed(()=>{
  return currentPage.value === 1 ? false : true
})

const showNextLnk = computed(()=>{
  return currentPage.value === totalPages.value ? false : true
})

const deleteBlog = (delId)=>{
  console.log("clicked",delId)
  store.dispatch('json/deleteBlog',delId)
  allData()
}
</script>