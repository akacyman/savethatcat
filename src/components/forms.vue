<template>

<div>
<br><br>
<form @submit.prevent="onSubmit">
  <label for="fullname">Your name:</label><br>
  <input type="text" v-model="fullname" placeholder="your name"><br>
  
  <label for="message">Message:</label><br>
  <input type="text" v-model="message" placeholder="edit me">

<p>Name is: {{ fullname }}</p>
  <p>Message is: {{ message }}</p>

  <input type="submit" value="Submit">

</form>
</div>

</template>



<script>
  export default {

    data: function() {
       return {
          message: '',
          fullname: ''
        }
    },

    methods: {
      onSubmit() {
        alert('submitting')
      }
      
    }


  }
</script>

<style>


</style>