<template>

    <div class="card m-2 p-1">
        <div class="card-body">
            <h5 class="card-title mb-4">{{ photo.title }}</h5>
            <router-link :to="{ name: 'pictures', params: {id: photo.albumID} }" >
                <button type="button" class="btn btn-outline-info my-2 my-sm-0" @click="consultarPhoto(photo)">View album</button>
            </router-link>
        </div>
    </div>

</template>

<script type="text/javascript" src="./../scripts/picture_item.js"></script>

<style >
    .card {
    height: 10rem !important;
    }
</style>