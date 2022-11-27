<template>
  <div id="app">
    <h1>Shopping List</h1>
  </div>
  <ul>
    <li v-for="item of items" :key="item.id">
      {{ item.name }}
    </li>
  </ul>
</template>
<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      items: [],
    };
  },
  async created() {
    try {
      const res = await axios.get(`http://localhost:3000/items`);
      this.items = res.data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
<style>
#app {
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
li {
  list-style: none;
}
</style>