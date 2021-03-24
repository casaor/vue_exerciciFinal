import PicturesList from './../components/PicturesList.vue'

export default {
    components:
    {
        PicturesList,
    },
    methods:{
        tornarHome(){
            this.$router.push('../home')
        }
    }
}