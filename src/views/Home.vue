<template> 

<div>
    <div class="p-5 text-center" style="background-color: #c38d9e; color: white">
        <h1 class="mb-3">Home</h1>
    </div> 

<div class="centered mt-5">

  <div class="card mr-3">
      <div class="card-header">Users consulted</div>
      <div class="card-body">
        <ul>
          <li v-for="item of uconsulted" :uconsulted="uconsulted" :key="item">
            {{uconsulted.name}} - {{uconsulted.consulted}}
          </li>
        </ul>
      </div>
  </div>
  <!-- <div class="card">
      <div class="card-header">Pictures consulted</div>
      <div class="card-body">
        <ul>
          <li v-for="foto of fotos" :key="foto">
            {{foto.title}} - {{foto.consulted}}
          </li>
        </ul>
      </div>
  </div> -->

</div>

</div>

</template>

<style src="./../styles/css/home.css"></style>