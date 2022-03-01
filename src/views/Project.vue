<template>
  <div class="Pr">
        Projects
  </div>

  <projects/>
  <router-link to="/about"><div class="Flip1"></div></router-link>
</template>

<script>
import Projects from '@/components/Projects.vue';
export default {
  name :'project',
  components: { Projects },
  

};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");

div .Pr{
  // background: 50% 100% / 50% 50% no-repeat
  //             radial-gradient(ellipse at bottom, rgb(13, 102, 80), transparent, transparent);
  // -webkit-background-clip: text;
  // background-clip: text;
  // color: transparent;
  font-size: 10vw;
  font-family: "Source Sans Pro", sans-serif;
  // animation: reveal 3000ms ease-in-out forwards 200ms,
  //            glow 2500ms linear infinite 2000ms;

  // @keyframes reveal {
  //   80%{
  //     letter-spacing: 8px;
  //   }
  //   100% {
  //     background-size: 300% 300%;
  //   }
  // }
  // @keyframes glow {
  //   40% {
  //     text-shadow: 0 0 8px rgb(55, 150, 156);
  //   }
  // }
}  
</style>
<style scoped>
div .Flip1{
  position: absolute;
  background-image: url("../../public/layerFlip.png");
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
div .Flip1:hover{
  transition-delay:0.3s;
  filter: brightness(1.2);
}
@font-face {
  font-family: rawless;
  src: url(../assets/Rawless.ttf);
}
div .Pr{
  font-family: rawless;
  font-size: 40px;
}
</style>