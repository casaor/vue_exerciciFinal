<template>
    <div>
        <div class="p-5 text-center" style="background-color: #e27d60; color: white">
                <h1 class="mb-3">User {{ this.$route.params.Pid }}</h1>
                <back></back>
        </div> 
        <div class="info-center">
            <div class="card info-wide m-4 h-50">
                <h5 class="card-header">{{ this.$route.params.users.name }}</h5>
                <div class="card-body">
                    <h5 class="card-title">username: {{ this.$route.params.users.username }}</h5>
                    <p class="card-text">user id: {{ this.$route.params.users.id }}</p>
                    <p class="card-text">email: {{ this.$route.params.users.email }}</p>
                    <p class="card-text">website: {{ this.$route.params.users.website }}</p>
                    <p class="card-text">company name: {{ this.$route.params.users.company.name }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript" src="./../scripts/user_info.js"></script>