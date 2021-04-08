import UserItem from './../components/UserItem'

export default {

    computed: {
        users () {
            return  this.$store.state.users
        }
    },
    mounted () {
        this.$store.dispatch ('loadUsers')
    },
    components:
    {
        UserItem
    },
}