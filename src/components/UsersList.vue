<template>
    <div class="card-columns">
        <userItem v-for="user of users" :user="user" v-bind:key="user"></userItem>  
    </div>
</template>

<script type="text/javascript" src="./../scripts/users_list.js"></script>

<style >
    .card-columns {
        width: 95% !important;
        margin: 1.5em;
    }
</style>