<template>

<div>
    <div class="p-5 text-center" style="background-color: #85dcb1; color: white">
            <h1 class="mb-3">Album {{ this.$route.params.Qid }}</h1>
            <back></back>
    </div> 
    <div class="info-center">
        <div class="card info-wide m-4">
            <img class="card-img-top" :src ="this.$route.params.photos.thumbnailUrl">
            <div class="card-body">
                <h5 class="card-title">{{this.$route.params.photos.title }}</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">photo id: {{this.$route.params.photos.id }}</li>
            </ul>
            <div class="card-body">
                <a href="#" class="card-link">{{this.$route.params.photos.url }}</a>
            </div>
        </div>
    </div>
</div>
    
</template>

<script type="text/javascript" src="./../scripts/photo_info.js"></script>

<style>
    .info-center{
        height: 42rem;
        display: flex;
        justify-content: center;
        align-content: center;
    }

    .info-wide{
        width: 22rem !important;
        height: 36rem;
    }

</style>