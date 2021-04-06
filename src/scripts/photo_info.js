import Back from './../components/Back.vue'

export default {
    props: {
        photo:{
            type:Object,
            required:true
        }
    },
    components:
    {
        Back,
    },    
}