export default {
    props: {
        photo: {
            type:Object,
            required:true
        }
    },
    methods:{
        consultarPhoto(photo){
            this.emit('consultar-photo', photo)
        }
    }
}
