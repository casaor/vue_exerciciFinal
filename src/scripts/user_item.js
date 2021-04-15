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
        UserInfo(userId){
            this.$router.push(
                {
                    name: 'users1',
                    params:
                    {
                        Pid: userId,
                        users: this.user
                    }
                }
            );
            this.user.consulted = this.user.consulted + 1;
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