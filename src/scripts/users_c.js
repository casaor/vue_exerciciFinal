import Vuex from 'vuex'
import UsersList from './../components/UsersList.vue'

export default {
    computed:
    {
        ...Vuex.mapGetters({
            users: 'FilterUsers'
        })
    },
    components:
    {
        UsersList,
    },
    methods:{
        tornarHome(){
            this.$router.push('../home')
        }
    }
}
