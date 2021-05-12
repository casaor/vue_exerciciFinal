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
        users.forEach(function (item) {
          item.consulted = 0;
        })
      },
      setPhotos (state,photos) {
        state.photos = photos
        photos.forEach(function (item) {
          item.consulted = 0;
        })
      },
      SetUserVisited (state, userVisited) {
        var usersRefresh = [];
        usersRefresh = state.users
        for (let user of state.users){
          if (user == userVisited) {
            user.consulted ++
          }
        } state.users = usersRefresh
      },
      SetPhotoVisited (state, photoVisited) {
        var photosRefresh = [];
        photosRefresh = state.photos
        for (let photo of photosRefresh){
          if (photo == photoVisited) {
            photo.consulted ++
          }
        } state.photos = photosRefresh
      },
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
        let users = state.users;
        let usersRefresh = []
        if (state.filters.search.length > 2){
          for (const user of users){
            if (user.name.toLocaleLowerCase().includes(state.filters.search)){
                usersRefresh.push(user)
            }
          }
          users = usersRefresh
          return users 
        }else{
          for (const user of users){
              usersRefresh.push(user)
          }
          users = usersRefresh
          return users
        }
      },
      ConsultedUsers (state) {
        let users = state.users;
        let uconsulted = []
        for (const user of users){
          if (user.consulted > 0){
              uconsulted.push(user)
          }
        }
          return uconsulted
      },
      ConsultedPhotos (state) {
        let photos = state.photos;
        let pconsulted = []
        for (const photo of photos){
          if (photo.consulted > 0){
              pconsulted.push(photo)
          }
        }
          return pconsulted 
      }
    }
  });
