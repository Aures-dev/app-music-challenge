<script setup>

// eslint-disable-next-line no-unused-vars
const props = defineProps({
    details:Array //récupérations des données de détails
})
</script>

<template>
    <div class="flex">
        <img src="https://www.kindpng.com/picc/m/186-1868279_disc-record-retro-vinyl-audio-sound-music-retro.png" alt="">
        <div>
            <div v-for="(detail,index) in details" :key="index" class="text-emerald-600 mb-1">
              {{ detail }}
            </div>
        </div>
    </div>
</template>

<style scoped>
img{
    width: 20%;
    height: 50%;
    margin-right: 1em;
}
</style>