import axios from 'axios';
import UserItem from './../components/UserItem'

export default {
    data(){
        return {
            users: []
        }
    },
    mounted() {
        let vue = this;
        axios.get('http://jsonplaceholder.typicode.com/users')
        .then( function( response ) {
            console.log(response.data)
            vue.users = response.data;
        })
    },
    components:
    {
        UserItem
    },
}