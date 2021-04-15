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
        // console.log(state.filters.search)
      },
      setUsers (state,users) {
        state.users = users
        users.forEach(function (item) {
          item.consulted = 0;
        })
      },
      setPhotos (state,photos) {
        state.photos = photos
        photos.forEach(function (item) {
          item.consulted = 0;
        })
      }
    },
    actions: {

      loadUsers ({ commit }){
          axios.get('http://jsonplaceholder.typicode.com/users')
            .then( response => {
            commit('setUsers', response.data) 
            })
      },
      loadPhotos ({ commit }){
          axios.get('http://jsonplaceholder.typicode.com/photos')
            .then( response => {
            commit('setPhotos', response.data) 
            })
      }
    },
    getters: {
      FilterUsers (state){
        let users = state.users()
        let usersRefresh = []
        if (state.filters.search.length > 2){
          for (const user of users){
            if (user.name.toLocaleLowerCase().includes(state.filters.search)){
                usersRefresh.push(user)
            }
          }
          users = usersRefresh
          return users 
       }
      },
      ConsultedUsers (state) {
        let users = state.users()
        let uconsulted = []
        for (const user of users){
          if (user.consulted == 0){
              uconsulted.push(user)
          }
        }
          return uconsulted 
      }
    }
  });
