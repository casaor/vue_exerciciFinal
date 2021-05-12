import Vuex from 'vuex'

export default {

    computed:
    {
        ...Vuex.mapGetters({
            ConsultedUsers: 'ConsultedUsers',
            ConsultedPhotos: 'ConsultedPhotos'
        })
    }

}