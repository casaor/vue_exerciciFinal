<template>

  <div id="app">
         
      <appNavbar></appNavbar>
      
      <transition name="scale">
      
        <router-view></router-view>

      </transition>

      <appFooter></appFooter>

  </div>

</template>

<script type="text/javascript" src="./scripts/app.js"></script>

<style src="./styles/css/app.css"></style>
