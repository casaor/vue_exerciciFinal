import Vuex from 'vuex'
import PicturesList from './../components/PicturesList.vue'
import Back from './../components/Back.vue'

export default {
    computed:
    {
        ...Vuex.mapGetters({
            users: 'loadPhotos'
        })
    },
    components:
    {
        PicturesList,
        Back,
    },
}