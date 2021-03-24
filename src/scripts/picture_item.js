export default {
    props: {
        photo: {
            type:Object,
            required:true
        }
    },
    methods:{
        ConsultarPhoto(){
            this.$router.push('../photoInfo')
        }
    }
}