<template>
 <navbr></navbr>
 <router-view></router-view>
  <ftr/>
  
</template>

<script>

import NavBar from './components/Layout/NavBar.vue'
import fotr from './components/Layout/Footer.vue'


export default {
  name: 'App',
  components: {
  
     navbr: NavBar,
     ftr : fotr,
    
   
  }
}
</script>
