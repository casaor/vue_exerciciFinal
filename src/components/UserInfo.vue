<template>
    <div>
        <div class="p-5 text-center" style="background-color: #e27d60; color: white">
                <h1 class="mb-3">User {{ this.$route.params.Pid }}</h1>
                <back></back>
        </div> 
        <div>
            <div class="card">
                <div class="card-body">
                    <h1>UserInfo</h1>
                    <h5 class="card-title">{{ this.$route.params.users.name }}</h5>
                    <strong> User id: {{ this.$route.params.users.id }}</strong>
                    <p>username: {{ this.$route.params.users.username }}</p>
                    <p>email: {{ this.$route.params.users.email }}</p>
                    <p>website:{{ this.$route.params.users.website }}</p>
                    <p>company name: {{ this.$route.params.users.company.name }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript" src="./../scripts/user_info.js"></script>