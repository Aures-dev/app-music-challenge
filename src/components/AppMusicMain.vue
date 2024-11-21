<script setup>
// eslint-disable-next-line no-unused-vars
import { onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
import { deleteUser } from "@/utils";

import CarrouselComp from "./CarrouselComponent.vue";
import SearchComp from "./SearchComponent.vue";
import PaginationComp from "./PaginationComponent.vue";
import MusicListComp from "./MusicListComponent.vue";

//pour l'utilisation des propriétés de router
// eslint-disable-next-line no-unused-vars
const router = useRouter();

//Variables pour les données du chrono
let hour = ref(0);
let min = ref(0);
let sec = ref(0);
//lance le chrono au chargement de la page
onMounted(() => {   
    setInterval(() => {
        sec.value++;
        if (sec.value > 60) {
            sec.value = 0;
            min.value++;
        }
        if (min.value > 60) {
            min.value = 0;
            hour.value++;
        }        
    }, 1000); 
})

//récupération des données depuis la base de donnée ici le fichier albums.json
const url = "http://localhost:5173/albums/albums.json"
const albums = ref([])
async function fetchAlbum() {
    const response = await fetch(url);
    albums.value = await response.json();
    console.log(albums.value);
}
fetchAlbum();

//récupère le string que recherche l'utilisateur
const toSearch = ref()
//fonction de recherche
// watch(()=>toSearch.value,()=>{
//     if (toSearch.value!==''){
//         albums.value=albums.value.filter((t)=> {
//           (t.ref.toUpperCase() && t.name.toUpperCase())
//           .includes(toSearch.value.toUpperCase() )
//         });
//         console.log(albums.value);        
//     } else {
//        fetchAlbum()
//     } 
// })

//fonction de déconnexion de l'utilisateur
function deconnexion() {
  deleteUser()
  router.replace('/')
}

</script>

<template>
  <header class="rounded-b-lg">
    <span class="">My Music App</span>
    <nav>
      <ul>
        <li><button>Home</button></li>
        <li><button @click="deconnexion()">Déconnexion</button></li>
      </ul>
    </nav>
    <div >
      Time: {{ hour }} h {{ min }} min {{ sec }} s
    </div>
  </header>

  <div class="content">
    
    <CarrouselComp />
    <SearchComp @searchEvent="(param) => toSearch = param" :albums="albums"/>
    <PaginationComp />
    <MusicListComp :albums="albums" :toSearch="toSearch"/>
  </div>
</template>

<style scoped>

header{
  display: flex;
  justify-content: space-between;
  padding-inline: 2em;
  padding-block: 2em;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 400;
  background-color: #0b4141;
  color: white;
}
ul{
  display: flex
}
li{
  padding-inline: 1em;
}
span{
  font-size: 20px;
  font-weight: 600;
}

.content{
  padding-inline: 10%;
}
</style>
