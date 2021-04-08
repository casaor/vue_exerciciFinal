<template>
    <div>
        <p>Hola</p>
        <div class="p-5 text-center" style="background-color: #e27d60; color: white">
                <h1 class="mb-3">User {{ this.$route.params.id }}</h1>
                <back></back>
            </div> 
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{{ this.$route.params.user.name }}</h5>
                <strong>{{ user.id }}</strong>
                <p>{{ user.username }}</p>
                <p>{{ user.email }}</p>
                <p>{{ user.website }}</p>
                <p>{{ user.company.name }}</p>

            </div>
        </div>
    </div>
</template>

<script type="text/javascript" src="./../scripts/user_info.js"></script>