<script setup>
</script>

<template>
  <div class="carrousel-box">
            <div class="carrousel">
                <img src="https://dynamicmedia.livenationinternational.com/t/t/j/03d9c9e3-79b3-45a2-a33e-51c4ce26511c.jpg" alt="slider" class="fix-image">
                <img src="https://www.billboard.com/wp-content/uploads/2022/05/feature-burna-boy-billboard-2022-bb06-seye-isikalu-4-1260.jpg" alt="slider" class="fix-image">
            </div>
        </div>
</template>

<style scoped>
.carrousel-box{
    margin-top: 4em;
    overflow: hidden;
    /* width: 100%; */
    height: 50vh;
}
.carrousel{
    border: none;
    display: flex;
    /* transition: all 5s; */
    animation-name: carrousel;
    animation-duration: 10s;
    animation-delay: 3s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
}
/* .box:hover{
    transform: translateX(-100%);
} */
.fix-image{
    width: 70%;
}

@keyframes carrousel {
    from{
        transform: translateX(0);
    }
    to{
        transform: translateX(-50%);
    }
}
</style>