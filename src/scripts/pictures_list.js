import PictureItem from './../components/PictureItem'

export default {

    computed: {
        photos () {
            return  this.$store.state.photos
        }
    },
    mounted () {
        this.$store.dispatch ('loadPhotos')
    },
    components:
    {
        PictureItem
    },
}