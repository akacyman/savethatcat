<template>
  		<div v-bind='{ class: "page-content " } '  v-if='thisselect===menuselect'>
			<slot></slot> 
		</div> 
</template>

<script>
	export default {
	  props: ['menuselect', 'thisselect']
	}
</script>

<style>

	.page-content {
	  display: flex;
	  flex: 1 1 auto;
	  justify-content: center;
	  position: relative;/* need this to position inner content */
	  overflow-y: auto;
	}





</style>