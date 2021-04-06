export default {
    props: {
        user: {
            type:Object,
            required:true
        }
    },
    methods:{
        ConsultarUser(){
            this.$emit("userConsultado", this.user)
        }
    }
}