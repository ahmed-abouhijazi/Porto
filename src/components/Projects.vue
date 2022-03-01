<template>
  <div class="projects">
    <router-link class="router" to="/slide"><div class="container" >
      <div class="imageP" ><img :src="projets[0].image" alt=""></div>
      <div class="Title" >{{projets[0].name}}</div>
    </div></router-link>
    <router-link class="router" to="/slide">
    <div class="container">
      <div class="imageP" ><img :src="projets[0].image" alt=""></div>
      <div class="Title" >{{projets[0].name}}</div>
    </div>
    </router-link>
    <div class="container">
      <div class="imageP" ><img :src="projets[0].image" alt=""></div>
      <div class="Title" >{{projets[0].name}}</div>
    </div>
  </div>
</template>

<script>
import black from "../assets/black.png";
export default {
  name: 'Projects',
  // props: {
  //   msg: String
  // }
  data(){
    return{
      projets:[
        {
          name :"Deer on the Run",
          image:black,
        }
      ]
    }
  },
  mounted(){
    console.log(this.projets[0].name);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
  font-family: lov;
  src: url(../assets/TheFrankline.ttf);
}
.router{
text-decoration:none ;
color: #2c3e50;
}
div .Title{
  font-family: lov;
  font-size: 50px;  
}
div .imageP img {
  position: relative;
  width: 300px;
} 

div .projects{
  display: flex;
  margin-top: 100px;
  margin-left: 50px;
  margin-right: 50px;
}
div .container{
  cursor: pointer;
  margin-left: 60px;
  margin-right: 60px;
}
div .container:hover .Title{
  color: rgb(21, 127, 153);
}

</style>
