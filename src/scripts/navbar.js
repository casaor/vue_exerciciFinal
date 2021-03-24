import store from './../store/index.js'

export default {

  computed:
  {
    SearchForm: {
      get(){
        return store.state.filters.search
      },
      set(value){
        store.commit('SetSearch',value)
      }
    },
    available:
    {
      get(){
        return store.state.filters.available
      },
      set(value){
        store.commit('SetAvailable',value)
      }
    }
  }

}