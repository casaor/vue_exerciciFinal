import Vuex from 'vuex'
import UserItem from './../components/UserItem'

export default {

    computed: {
        ...Vuex.mapGetters([
            'FilterUsers'
        ])
    },
    mounted () {
        this.$store.dispatch ('loadUsers')
    },
    components:
    {
        UserItem
    },
}