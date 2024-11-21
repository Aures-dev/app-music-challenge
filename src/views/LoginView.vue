<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { sendUser } from "../utils";

const router = useRouter();
//varibles de récupération des données de l'utilisateur 
const userEmail = ref('');
const userPassword = ref('');

//soumission des données de l'utilisateur
function submit() {
    console.log(userEmail.value);
    console.log(userPassword.value);
    connectUser()
}

//récupération de la base de donnée
const usersData = ref();
async function fetchData() {
    const response =  await fetch('/user-data.json');
    usersData.value = await response.json();
    console.log(usersData.value);
}
onMounted(()=>{
    fetchData()
})
//variable du user
const user = ref([])
//Connection de l'utilisateur
function connectUser() {
    //récupération du user et on stock ses infos dans la variable user
    user.value = usersData.value.filter(el=>el.email == userEmail.value);
    console.log(user.value);
    
    //vérifocation du mot de passe entré par l'utilisateur
     if (user.value.length > 0) {
         if (userPassword.value == user.value[0].password) {
            console.log('connexion réussie');
            router.push('/app-music-main');
            sendUser(user.value[0])
         } else {
            console.log('connexion échouée');
            alert('Mot De Passe Incorrect')
            userEmail.value=''
            userPassword.value=''
         }
     }
}
</script>


<template>
<div>

<div class="bg-green-100 dark:bg-gray-800 h-screen">
  <div class="container mx-auto px-6 py-8 flex flex-col gap-y-40">
    <h2 class="text-6xl font-bold text-center text-green-800 dark:text-white mb-8">Bienvenu sur My Music App!</h2>
    <div class="flex flex-wrap items-center justify-center mt-0">
      <div class="w-full md:w-1/2">
        <h3 class="text-2xl text-green-800 dark:text-white font-bold">Profite de la musique avec nous!</h3>
        <p class="text-green-600 dark:text-gray-400 mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus quia molestias delectus reprehenderit sequi iste ut, quod alias. Consequuntur, quis?</p>
      </div>
      <div class="w-full md:w-1/2 mt-8 md:mt-0">
        <form class="bg-white dark:bg-gray-900 rounded shadow-md px-8 pt-6 pb-8 mb-4" @submit.prevent="submit()">
          <div class="mb-4">
            <label type="email" class="block text-green-700 dark:text-gray-200 text-sm font-bold mb-2" for="username">Votre email</label>
            <input class="shadow appearance-none border border-green-500 dark:border-gray-700 rounded w-full py-2 px-3 text-green-700 dark:text-gray-200 leading-tight focus:outline-none focus:shadow-outline" id="username"  placeholder="test@exemple.com"
            v-model="userEmail"
            >
          </div>
          <div class="mb-6">
            <label class="block text-green-700 dark:text-gray-200 text-sm font-bold mb-2" for="password">mot de passe</label>
            <input class="shadow appearance-none border border-green-500 dark:border-gray-700 rounded w-full py-2 px-3 text-green-700 dark:text-gray-200 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"
            v-model="userPassword"
            >
          </div>
          <div class="flex items-center justify-between">
            <button class="bg-green-500 hover:bg-green-700 dark:bg-gray-700 dark:hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Connexion</button>
            <!-- <a class="inline-block align-baseline font-bold text-sm text-green-500 hover:text-green-800 dark:text-gray-200 dark:hover:text-gray-400" href="#">Forgot Password?</a> -->
          </div>
        </form>
      </div>
    </div>
  </div>
</div>


</div>
</template>


<style scoped>


</style>