<template>
  		<div v-bind='{ class: "panel "+panel }'>
        	<object v-bind='{ data: src }' type="image/svg+xml" width="100%" height="100%"></object>
        </div> 
</template>

<script>
	export default {
	  props: ['src','panel'],
	}
</script>

<style>

	.panel {
	  position: absolute;

	  height: 99.9%;
	  width: 100%;

	  opacity:1;
	  display: flex;
	}



</style>