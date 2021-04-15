export default {
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
        }
    },
}
