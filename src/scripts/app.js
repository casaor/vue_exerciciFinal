import appNavbar from './../views/appNavbar.vue'
import appFooter from './../views/appFooter.vue'

export default {
  name: 'App',

components: {
    appNavbar,
    appFooter
  },
  mounted () {
    this.$store.dispatch ('loadUsers'),
    this.$store.dispatch ('loadPhotos')
  } 
}