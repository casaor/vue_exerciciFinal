import Vuex from 'vuex'
import UserItem from './../components/UserItem'

export default {

    computed: {
        ...Vuex.mapGetters({
            FilterUsers: 'FilterUsers'
        })           

    },
    components:
    {
        UserItem
    },
}