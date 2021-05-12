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
          <li v-for="item of ConsultedUsers" :ConsultedUsers="item" :key="item.id">
            <div>
              {{item.name}}:
            </div>
            <div> 
              {{item.consulted}}
            </div>
          </li>
        </ul>
      </div>
  </div>
  <div class="card mr-3">
      <div class="card-header">Pictures consulted</div>
      <div class="card-body">
        <ul>
          <li v-for="photo of ConsultedPhotos" :ConsultedPhotos="photo" :key="photo.albumId">
            <div>
              Photo {{photo.albumId}}:
            </div>
            <div>
              {{photo.consulted}}
            </div>
          </li>
        </ul>
      </div>
  </div>

</div>

</div>

</template>

<script type="text/javascript" src="./../scripts/home.js"></script>

<style src="./../styles/css/home.css"></style>