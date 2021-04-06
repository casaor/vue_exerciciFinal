<template>
    <div class="card-columns">
        <pictureItem v-for="photo of photos" :photo="photo" v-bind:key="photo" :item="item"></pictureItem>  
    </div>
</template>

<script type="text/javascript" src="./../scripts/pictures_list.js"></script>