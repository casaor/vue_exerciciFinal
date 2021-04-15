import Vuex from 'vuex'

export default {

    computed:
    {
        ...Vuex.mapGetters({
            uconsulted: 'ConsultedUsers'
        })
    },

}