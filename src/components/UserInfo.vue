<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">{{ user.name }}</h5>
            <strong>{{ user.id }}</strong>
            <p>{{ user.username }}</p>
            <p>{{ user.email }}</p>
            <p>{{ user.website }}</p>
            <p>{{ user.company.name }}</p>

        </div>
    </div>
</template>

<script type="text/javascript" src="./../scripts/user_info.js"></script>