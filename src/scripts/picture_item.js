import store from './../store/index'

export default {
    data ()
    {
        return{}
    },
    props: {
        photo: {
            type:Object,
            required:true
        }
    },
    methods:{
        PhotoInfo(photo){
            this.$router.push(
                {
                    name: 'photo',
                    params:
                    {
                        Qid: photo.albumId,
                        photos: this.photo
                    }
                }
            );
            store.commit('SetPhotoVisited', photo)
            this.$nextTick(()=>{
                this.$store.commit('SetAvailable', true)
            })
        }
    },
}
