<script setup>
import { ref, watch } from 'vue';
import DetailsComp from "./DetailsComponent.vue";


// eslint-disable-next-line no-unused-vars
const props = defineProps({//récupération des données de AppMusicMain
    albums: Array,
    toSearch: String
})
//stock les titres de l'artiste
const details = ref([]);
watch(()=>props.toSearch,()=>{
    console.log(props.toSearch);   
})

const Albums = ref()

watch(()=>props.albums,()=>{
    Albums.value =props.albums;    
}) 
function deleteAlbum(param) {
    Albums.value = Albums.value.filter((test) => test !== param)
    return console.log(Albums.value);    
}


</script>

<template>
    <!-- Affichage des albums et des données correspondantes -->
    <ul>
        <li v-for="item in Albums" :key="item.id" class="rounded-md shadow-xl pb-2 flow-root">
            <img src="https://i.pinimg.com/736x/4d/8c/8b/4d8c8b0075103e7c35b2805b000a68e9.jpg" alt="album-logo">
            <h2 class="mb-3">{{ item.ref }}</h2>
            <span class="mb-3">{{ item.name }}</span>
            <p class="mb-3">{{ item.description }}</p>
            <div class="listTitles mb-2">
                <div v-for="(tag, index) in item.tags" :key="index" class="listTitle">
                    {{ tag }}
                </div>
            </div>
            <div class="flex flex-col space-y-1">
                <div>
                    <img src="../assets/heart.png" alt="icons" class="h-8 icon">
                    {{ item.like }}
                </div>
                <div>
                    <img src="../assets/timer.png" alt="icons" class="h-8 icon">
                    {{ item.duration }}
                </div>
            </div>
            <button class="transition duration-500 ease-in-out px-2 mt-2  border-b-2 hover:rounded-lg" @click="()=> details = item.tags">Details</button>
            <DetailsComp :details="details"/>
            <button class="crud bg-red-500 rounded-lg float-right mx-2" @click="deleteAlbum(item)">Delete</button>
            <button class="crud bg-green-500 rounded-lg float-right">Modify</button>
        </li>
    </ul>
    

    
</template>

<style scoped>
ul{
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    gap: 2em;
}
li{
  background-color: white;
  width: 90%;
}
.listTitles{
    display: flex;
    flex-wrap: wrap;
    gap: 3em;
}
.listTitle{
    color: #237D7D;
}
img{
    width: 30%;
    float: left;
    margin-right: 1em;
}
h2{
    color: white;
    background-color: #4BB8B8;
}
.icon{
    width: 30px;
}
button:hover{
    background-color: #4BB8B8;
    color: white;
}
.hidden {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
.crud{
    padding-block: 0.5em;
    /* background-color: #237D7D; */
    color: white;
    padding-inline: 1em;
}
</style>