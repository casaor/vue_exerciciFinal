import store from './../store/index'

export default {
    data ()
    {
        return{}
    },
    props: {
        user: {
            type:Object,
            required:true
        }
    },
    methods:{
        UserInfo(user){
            this.$router.push(
                {
                    name: 'users1',
                    params:
                    {
                        Pid: user.id,
                        users: this.user
                    }
                }
            );
            store.commit('SetUserVisited', user)
        }
    },
    filters:
    {
        UpperCase(value)
        {
            if(!value) return '';
            return value.toString().toUpperCase();
        }
    }
}