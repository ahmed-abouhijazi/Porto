<template>
  <router-link to="/project"><div class="Flip"></div></router-link>

<div class="book">
  <div id="pages" class="pages">
    <div class="page"><p>Open Me, <br>please!</p></div>
    <div class="page"><img class="imgD" src="../assets/images/1.png" alt=""></div>
    <div class="page"><img class="imgD" src="../assets/images/2.png" alt=""></div>
    <div class="page"><img class="imgD" src="../assets/images/3.png" alt=""></div>
    <div class="page"><img class="imgD" src="../assets/images/4.png" alt=""></div>
    <div class="page"><img class="imgD" src="../assets/images/5.png" alt=""></div>
    <div class="page"><img class="imgD" src="../assets/images/24.png" alt=""></div>
    <div class="page"><img class="imgD" src="../assets/images/7.png" alt=""></div>
    <div class="page"><img class="imgD" src="../assets/images/8.png" alt=""></div>
    <div class="page"><img class="imgD" src="../assets/images/9.png" alt=""></div>
    <div class="page"><img class="imgD" src="../assets/images/10.png" alt=""></div>
    <div class="page"><img class="imgD" src="../assets/images/11.png" alt=""></div>
    <div class="page"><img class="imgD" src="../assets/images/12.png" alt=""></div>
    <div class="page"><img class="imgD" src="../assets/images/13.png" alt=""></div>
    <div class="page"><img class="imgD" src="../assets/images/14.png" alt=""></div>
    <div class="page"><img class="imgD" src="../assets/images/15.png" alt=""></div>
    <div class="page"><img class="imgD" src="../assets/images/16.png" alt=""></div>
    <div class="page"><img class="imgD" src="../assets/images/Pr18.png" alt=""></div>
    <div class="page"><img class="imgD" src="../assets/images/Pr19.png" alt=""></div>
    <div class="page"><img class="imgD" src="../assets/images/Pr20.png" alt=""></div>
    <div class="page"><img class="imgD" src="../assets/images/Pr21.png" alt=""></div>
    <div class="page"><img class="imgD" src="../assets/images/Pr22.png" alt=""></div>
    <div class="page"><img class="imgD" src="../assets/images/Pr23.png" alt=""></div>
    <div class="page"><img class="imgD" src="../assets/images/Pr24.png" alt=""></div>
    <div class="page"><img class="imgD" src="../assets/images/Pr25.png" alt=""></div>
    <div class="page"><p>THE, <br>END!</p></div>
  </div>
</div>
</template>

<script lang="javascript">

export default {

  data(){
    return{
      pages:[],
    }
  },
  created(){
    
  },
  mounted(){
    this.pages = document.getElementsByClassName('page');
    console.log(this.pages)
for(var i = 0; i < this.pages.length; i++)
  {
    
    var page = this.pages[i];
    if (i % 2 === 0)
      {
        page.style.zIndex = (this.pages.length - i);
      }
  }
console.log("out");
this.doit();

  },

  methods:{
    doit(){
      console.log("hey");
  for(var i = 0; i < this.pages.length; i++)
    {
      
      var page = this.pages[i];
      page.pageNum = i + 1;
      page.onclick=function()
        {
          
          if (this.pageNum % 2 === 0)
            {
              this.classList.remove('flipped');
              this.previousElementSibling.classList.remove('flipped');
              
            }
          else
            {
              this.classList.add('flipped');
              this.nextElementSibling.classList.add('flipped');
            }
         }
      }
}
  }
}
</script>


<style scoped>

.page p{
  font-family: Quarrel;
  margin-top:150px ;
}

@font-face {
 font-family: "Quarrel";
 src: url("../assets/LoversQuarrel-Regular.ttf");
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
div .Flip:hover{
  transition-delay:0.3s;
  filter: brightness(1.2);
  background-image: url("../assets/layerFlip.png");
}
.imgD{
  margin-top: 0vw;
  width: 49vw;
  height:30vw ;
}
.book {
  position: absolute;
  top: 17%;
  left: 1%;
  transition: opacity 0.4s 0.2s;
}
                                              
p{
  margin-top: 8vw;
  text-align: center;
  font-size: 5vw;
  color: #000000;
}
.page {
  width: 49vw;
  height: 35vw;
  background-color: #111111;
  float: left;
  margin-bottom: 0.5em;
  background: left top no-repeat;
  background-size: cover;
}
.page:nth-child(even) {
  clear: both;
}
.book {
  perspective: 250vw;
}
.book .pages {
  width: 98vw;
  height: 35vw;
  position: relative;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  border-radius: 4px;
  /*box-shadow: 0 0 0 1px #e3dfd8;*/
}
.book .page {
  float: none;
  clear: none;
  margin: 0;
  position: absolute;
  top: 0;
  width: 49vw;
  height: 30vw;
  transform-origin: 0 0;
  transition: transform 1.4s;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  cursor: pointer;
  user-select: none;
  background-color: #f0f0f0;
}
.book .page:before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0);
  transition: background 0.7s;
  z-index: 2;
}
.book .page:nth-child(odd) {
  pointer-events: all;
  transform: rotateY(0deg);
  right: 0;
  border-radius: 0 4px 4px 0;
  background-image: linear-gradient(to right, rgba(0,0,0,.15) 0%, rgba(0,0,0,0) 10%);
}
.book .page:nth-child(odd):hover {
  transform: rotateY(-15deg);
}
.book .page:nth-child(odd):hover:before {
  background: rgba(0, 0, 0, 0.03);
}
.book .page:nth-child(odd):before {
  background: rgba(0, 0, 0, 0);
}
.book .page:nth-child(even) {
  pointer-events: none;
  transform: rotateY(180deg);
  transform-origin: 100% 0;
  left: 0;
  border-radius: 4px 0 0 4px;
  border-color: black;
  background-image: linear-gradient(to left, rgba(0,0,0,.12) 0%, rgba(0,0,0,0) 10%);
}
.book .page:nth-child(even):before {
  background: rgba(0, 0, 0, 0.2);
}
.book .page.grabbing {
  transition: none;
}
.book .page.flipped:nth-child(odd) {
  pointer-events: none;
  transform: rotateY(-180deg);
}
.book .page.flipped:nth-child(odd):before {
  background: rgba(0, 0, 0, 0.2);
}
.book .page.flipped:nth-child(even) {
  pointer-events: all;
  transform: rotateY(0deg);
}
.book .page.flipped:nth-child(even):hover {
  transform: rotateY(15deg);
}
.book .page.flipped:nth-child(even):hover:before {
  background: rgba(0, 0, 0, 0.03);
}
.book .page.flipped:nth-child(even):before {
  background: rgba(0, 0, 0, 0);
}
*,
* :before,
*:after {
  box-sizing: border-box;
}
html,
body {
  font-family: 'Lovers Quarrel', cursive;
  background: #333;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
html {
  height: 100%;
}
body {
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2em 0;
  line-height: 1.5em;
}
.page:nth-child(odd){
  background-position: right top;
}
</style>