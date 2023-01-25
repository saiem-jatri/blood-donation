<template>
    <div class="">
        <div class="mt-20 h-screen">
            <Dropdown
            :options="options"
            :placeholder="propsPlaceholder"
            title="Primary Dropdown"
            >

</Dropdown>
        </div>
    </div>
</template>

<script setup>
import {ref} from "vue";
import { reactive } from "@vue/reactivity";
import Dropdown from "../components/Dropdown.vue"


const propsPlaceholder = ref("Enter a string")
const options = reactive([
  {
    option:"apple",
    name:"apple"
  },
  {
    option:"bananna",
    name:"bananna"
  },
  {
    option:"mango",
    name:"mango"
  },
  {
    option:"jackfruits",
    name:"jackfruits"
  },
  {
    option:"watermelon",
    name:"watermelon"
  },
  {
    option:"pineapple",
    name:"pineapple"
  }
])

</script>