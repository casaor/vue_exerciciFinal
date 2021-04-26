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
        PhotoInfo(albumId){
            this.$router.push(
                {
                    name: 'photo',
                    params:
                    {
                        Qid: albumId,
                        photos: this.photo
                    }
                }
            );
            this.photo.consulted = this.photo.consulted + 1;
        }
    },
}
