import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';


Vue.use(Vuex);

export default new Vuex.Store(
  {
    state:
    {
      users: [],
      photos: [],
      filters: {
        search: ''
      } 
    },
    mutations: {
      setSearch (state,search){
        state.filters.search = search
      },
      setUsers (state,users) {
        state.users = users
      },
      setPhotos (state,photos) {
        state.photos = photos
      }
    },
    actions: {

      loadUsers ({ commit }){
        // if (state.filters.search.length > 2){
        //     axios.get('http://jsonplaceholder.typicode.com/users')
        //     .then( response => {
        //     commit('setUsers', response.data) 
        //     })
        // }else{
          axios.get('http://jsonplaceholder.typicode.com/users')
            .then( response => {
            commit('setUsers', response.data) 
            })
        // }
      },
      loadPhotos ({ commit }){
          axios.get('http://jsonplaceholder.typicode.com/photos')
            .then( response => {
            commit('setPhotos', response.data) 
            })
      }
    }
  });
