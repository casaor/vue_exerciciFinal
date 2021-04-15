<template>

    <div class="card m-2 p-1 text-center">
        <img class="card-img-top" :src ="photo.thumbnailUrl">
        <div class="card-body">
                <button class="btn btn-outline-info my-2 my-sm-0" @click="PhotoInfo(photo.albumId)" :photo="photo">View photo</button>
        </div>
    </div>

</template>

<script type="text/javascript" src="./../scripts/picture_item.js"></script>

<style >
    .card {
    width: 14rem !important
    }
</style>