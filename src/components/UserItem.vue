<template>

    <div class="card m-2 p-3">
        <div class="card-body">
            <h5 class="card-title mb-4">{{ user.name }}</h5>
                <button class="btn btn-outline-info my-2 my-sm-0" @click="UserInfo(user.id)" :user="user">View user</button>
        </div>
    </div>

</template>

<script type="text/javascript" src="./../scripts/user_item.js"></script>


