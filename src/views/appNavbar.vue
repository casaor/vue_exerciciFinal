<template>
  <div class="row">
        <nav class="navbar navbar-expand-lg sticky-top navbar-light">
          <a class="navbar-brand col-sm" href="#">
            <img alt="Vue logo" src="./../assets/blanc.png">
          </a>
            <ul class="navbar-nav col-sm me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link to="/" class="nav-link active">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/users" class="nav-link">Users</router-link>
              </li>
              <li>
                <router-link to="/pictures" class="nav-link">Pictures</router-link>
              </li>
            </ul>
            <form class="form-inline col-sm my-2 my-lg-0">
              <input class="form-control mr-sm-2 w-50" type="search" placeholder="Users search" v-model="SearchForm">
            </form>
      </nav> 
  </div>
</template>

<script type="text/javascript" src="./../scripts/navbar.js"></script>

<style src="./../styles/css/navbar.css"></style>
