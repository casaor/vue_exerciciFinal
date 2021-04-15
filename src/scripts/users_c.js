import Vuex from 'vuex'
import UsersList from './../components/UsersList.vue'
import Back from './../components/Back.vue'

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
        Back,
    }
}
