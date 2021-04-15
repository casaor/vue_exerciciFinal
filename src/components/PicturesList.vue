<template>

    <div class="card-columns">
        <pictureItem v-for="photo of photos" :photo="photo" v-bind:key="photo.albumID"></pictureItem>  
    </div>

</template>

<script type="text/javascript" src="./../scripts/pictures_list.js"></script>

<style>
    .card-columns {
        column-count: 1;
    }
</style>