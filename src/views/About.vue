<template>
  <div class="about">
  <img v-if="Richa" class="First" @click="clicked" src="../assets/richa.png" alt="">
    <img v-if="Hibr" @click="clickedH" class="hibr" src="../assets/7ibr.png" alt="">
    <img v-if="Reed" class="reed" src="../assets/reedimg.png" alt="">
  <img v-if="AbouUS" class="Abou" src="../assets/AbouUs.png" alt="">
  <router-link to="/"><div class="Flip"></div></router-link>
  <router-link to="/project"><div class="FlipD"></div></router-link>

  </div>
</template>
<script>
import aboutus from '../assets/Artboard.png';


export default ({
  name:"About",
  components: {

  },
  data(){
    return{
      src:aboutus,
      AbouUS:false,
      Richa:true,
      Reed:false,
      Hibr:true,
    }
  },

  methods:{
    clicked(){
      this.Richa=false;
      this.AbouUS=true;
      console.log(this.Richa);
    },
    clickedH(){
      this.Reed=true;
      this.Hibr=false;
      console.log(this.Richa);
    }
  }
})
</script>

<style scoped>
.reed{
  position: absolute;
 z-index: 300;
 border-radius: 45px;
  top: 2%;
  left: 80%;
  margin: auto;
    width: 14%;
}
.hibr{
   position: absolute;
 z-index: 300;
  top: 10%;
  left: 80%;
  margin: auto;
    width: 14%;
    cursor: pointer;
}
.hibr:hover{
    transition-delay:0.1s;
  filter: brightness(1.2);
transform: scale(1.05);
}

.Abou{
   position: absolute;
 z-index: -100;
  top: -0%;
  left: 0%;
  margin: auto;
    width: 100%;
}

.First{
 position: absolute;
 z-index: -100;
  top: 40%;
  left: 35%;
  margin: auto;
  width: 30%;
  cursor: pointer;
}
div .Flip{
  position: absolute;
  background-image: url("../assets/layerFlip.png");
  background-repeat: no-repeat;
  
  background-size: contain;
  z-index: 200;
  margin-left: 0%;
  width: 70px;
  height: 70px;
  left: 0%;
  top: 0%;
  cursor: pointer;
  transition: filter 0.3s ease-in;
}
div .FlipD{
  position: absolute;
  background-image: url("../assets/FlipDown.png");
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 300;
  width: 70px;
  height: 70px;
  right: 0%;
  top: 190%;
  cursor: pointer;
  transition: filter 0.3s ease-in;
}
div .Flip:hover{
  transition-delay:0.3s;
  filter: brightness(1.2);
  background-image: url("../assets/layerFlip.png");
}
div .FlipD:hover{
  transition-delay:0.3s;
  filter: brightness(1.2);
  background-image: url("../assets/FlipDown.png");
}

.First:hover{
  transition-delay:0.1s;
  filter: brightness(1.2);
transform: scale(1.25);
}

</style>
