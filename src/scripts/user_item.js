export default {
    props: {
        user: {
            type:Object,
            required:true
        }
    },
    methods:{
        ConsultarUser(){
            this.$router.push('../userInfo')
        }
    }
}