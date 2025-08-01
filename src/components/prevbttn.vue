<template>
  		<div id="panelPrev" class="panelnav panelPrev" @click="$emit('previtem')"><img src="assets/prevIcon.svg" width="70px" height="70px"/></div>
</template>

<script>
	export default {
	  
	}
</script>

<style>

@media (orientation: portrait) {

  .panelPrev {
    height: calc(50vh - 50vw - 43px );
    min-height:70px;
    align-items: flex-end;
  }

}

@media (orientation: landscape) {

  .panelPrev {
    align-items: center;
    left: calc(50vw - 40vw );
  }

}


</style>