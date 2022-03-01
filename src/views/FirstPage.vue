<template>
  <div class="home">
    <img class="FirstImg" alt="Ail" src="../../public/All.png">
    <router-link to="/about"><img v-if="image" :key="image.id" @click="switchImage" class="image" :src="image.src" :alt="image.alt" /></router-link>
    <img class="image1" src="../assets/Ellipse2.png" alt="">
    
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import image1 from "../assets/Ellipse.png";
import image2 from "../assets/buttonC.png"
export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  data(){
    return{
      index: 0,
      image: null,
      images: [{
          id: 1,
          src: image1,
          alt: "Image Normal"
        },
        {
          id: 2,
          src: image2,
          alt: "pressed"
        },
      ]
    }
  },
  mounted() {
    this.switchImage();
  },
  methods: {
    switchImage() {
      this.image = this.images[this.index];
      this.index = (this.index + 1) % this.images.length;
    }
  }
}
</script>
<style lang="scss">
// .FirstImg{
//   animation: reveal 3000ms ease-in-out forwards 200ms;
// }
// @keyframes reveal {
//     80%{
//       width: 58%;
//     }
//     100% {
//       width: 68%;
//     }
//   }
</style>

<style>
.image {
  position:fixed;
  width: 70px;
  top:80%;
  right:5%;
  margin: 2px;
  cursor: pointer;
  transition: filter 0.3s ease-in;
}
.image1 {
  position:fixed;
  z-index: -100;
  width: 40px;
  top:81%;
  right:6%;
  margin: 2px;
}

.image:hover {
  filter: brightness(1.2);
}
.FirstImg{
  position: fixed;
  top: 0%;
  left: 17%;
  width: 68%;
  transition: filter 0.3s ease-in;
  
}
.FirstImg:hover {
  filter: brightness(1.2);
}



</style>
