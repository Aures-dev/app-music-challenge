<script setup>
import {ref} from 'vue'
// eslint-disable-next-line no-unused-vars
const props = defineProps({//récupération des données de AppMusicMain
    albums: Array
})

const emit =  defineEmits(['searchEvent'])
const toSearch = ref('')

</script>

<template>
  <div class="content">
    <div class="search">
      <input type="search" name="" id="" class="shadow-xl rounded-lg" v-model="toSearch">
      <button class="bg-green-200 rounded-lg" @click="()=>emit('searchEvent', toSearch)">Rechercher</button>
    </div>
    <h1>Les Hits Du Moment</h1>
  </div>
</template>

<style scoped>
input{
  width: 70%;
}
.search{
  display: flex;
  justify-content: center;
  margin-top: 2em;
  margin-bottom: 2em;
  width: 100%;
}
button{
  padding-block: 0.5em;
  background-color: #237D7D;
  color: white;
  padding-inline: 1em;
}
.content{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
h1{
  font-size: xx-large;
  color: #161f6d;
}
</style>