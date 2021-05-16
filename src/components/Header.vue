<template>
  <div>
    <div class='header'>
    <p><Sidemenu/></p>
    <div class='header-right'>
    <router-link to='/login'><h4><v-icon>mdi-login</v-icon></h4>Login</router-link>
    <router-link to='/cart'><h4><v-icon>mdi-cart</v-icon></h4>Cart</router-link>
  </div>
</div>
  </div>
</template>
<script>
import Sidemenu from '../components/Sidemenu.vue'
export default {
  name: 'Header',
  components: {
    Sidemenu
  },
  computed: {
    loginData () {
      return this.$store.state.loginData
    }
  }
}
</script>
<style lang="scss" scoped>
* {box-sizing: border-box;}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.header {
  overflow: hidden;
  background-color: #f1f1f1;
  padding: 20px 10px;
}

.header a {
  float: left;
  color: black;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  line-height: 25px;
  border-radius: 4px;
}

.header a.logo {
  font-size: 25px;
  font-weight: bold;
}

.header a:hover {
  background-color: #ddd;
  color: black;
}

.header a.active {
  background-color: dodgerblue;
  color: white;
}

.header-right {
  float: right;
}

@media screen and (max-width: 500px) {
  .header a {
    float: none;
    display: block;
    text-align: left;
  }
.header-right {
    float: none;
  }
}
</style>
