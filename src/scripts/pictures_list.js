import axios from 'axios';
import PictureItem from './../components/PictureItem'

export default {
    data(){
        return {
            photos: []
        }
    },
    mounted() {
        let vue = this;
        axios.get('http://jsonplaceholder.typicode.com/photos')
        .then( function( response ) {
            console.log(response.data)
            vue.photos = response.data;
        })
    },
    components:
    {
        PictureItem
    },
}