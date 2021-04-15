import axios from 'axios'

export default () =>
{
    return axios.create({
        baseURL: 'http://jsonplaceholder.typicode.com/photos',
        header:
        {
            'Accept': 'application/json',
            'content-type': 'application/json'
        }
    });
}

    