
<template>
  <div class="menubar">
			<slot></slot> 
		</div>
</template>

<script>
	export default {
	  
	}
</script>

<style>
 .menubar{
  display: flex;
  height: 50px;
  justify-content: space-around;
  font-weight: 600;
  background-image: linear-gradient(to bottom, 
    #95c874,
    #95c874 48%,
    #6eb440 50%,
    #6eb440 100%)
}

.menubar > div {
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: column;
  width: 180px;
  text-align: center;
  color: #FFFFFF;
  font-size: 20px;

  cursor: pointer;
}

.menubar > div:hover {
  background-color: #6eb440;
}

</style>