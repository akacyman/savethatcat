<template>
  <div v-bind='{ class: "page "+menuitems[menuselect] }' id="root">

  <menubar>
    <menubox @menuselected="menuselect=2">Creator</menubox>
    <menubox @menuselected="menuselect=0"><img src="assets/morrisIcon.svg" width="58" height="50" border="0"></menubox> 
    <menubox @menuselected="menuselect=3">Contact</menubox>
  </menubar>

  <pagetemplate v-bind:menuselect=menuselect  v-bind:thisselect="2">
          Creator<br><br>I'm just a guy<br>

  </pagetemplate>

  <pagetemplate v-bind:menuselect=menuselect  v-bind:thisselect="3"> Contact <br><br><forms></forms></pagetemplate>

  <pagetemplate v-bind:menuselect=menuselect  v-bind:thisselect="1">
    <comicpanel v-bind:src='panels[currentNum].src' v-bind:panel="panels[currentNum].panel"></comicpanel>   
    <prevbttn @previtem="prevPanel()"></prevbttn>
    <nextbttn @nextitem="nextPanel()"></nextbttn> 
  </pagetemplate>

  <pagetemplate v-bind:menuselect=menuselect  v-bind:thisselect="0"> 
    
          <div class="start-object-container noselect" @click="menuselect=1,currentNum=0">
           <object class="landscape home-svg" data='./assets/savethatcatmain_landscape.svg' type="image/svg+xml" width="100%" height="99%"></object>
            <object class="portrait home-svg" data="./assets/savethatcatmain_portrait.svg" type="image/svg+xml" width="100%" height="99%"></object>
          </div>

  </pagetemplate>


  <footer>&copy; Simon Mealings 2025</footer>

  </div>
</template>


<script>



</script>

<script type="text/javascript" src="./combine.js"></script>

<style lang="scss">
 @import "style.css"
</style>

