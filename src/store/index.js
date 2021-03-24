import Vue from 'vue'
import Vuex from 'vuex'
import users from './../assets/users.js'


Vue.use(Vuex);

export default new Vuex.Store(
  {
    state:
    {
      users: users,
      filters: {
        search: ''
      } 
    },
    mutations: {
      SetSearch (state,search){
        state.filters.search = search
      }
    },
    getters: {
      FilterUsers (state){
        let users = state.users()
        let usersRefresh = []
        if (state.filters.search.length > 2){
           for (const user of users){
               if (user.name.toLocaleUpperCase().includes(state.filters.search)){
                  usersRefresh.push(user)
               }
           }
           users = usersRefresh
           return users 
        }
      }
    }

  });
