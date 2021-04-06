<template>

<div>
    <div class="p-5 text-center" style="background-color: #85dcb1; color: white">
            <h1 class="mb-3">Album {{ $route.params.id }}</h1>
            <back></back>
    </div> 
    <div class="card">
        <div class="card-body">
            <img :src ="photo.thumbnailUrl">
        </div>
    </div>
</div>
</template>

<script type="text/javascript" src="./../scripts/photo_info.js"></script>