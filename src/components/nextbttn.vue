<template>
  		<div id="panelNext" class="panelnav panelNext" @click="$emit('nextitem')"><img src="assets/nextIcon.svg" width="70px" height="70px"/></div>
</template>

<script>
	export default {
	  
	}
</script>

<style>


@media (orientation: portrait) {

  .panelNext {
    bottom: 0px;
    height: calc(50vh - 50vw - 43px );
    min-height:70px;
    align-items: flex-start;

  }
}

@media (orientation: landscape) {

  .panelNext {
    align-items: center;
    right: calc(50vw - 40vw );
  }
}

</style>