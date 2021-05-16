<template>
  <div>
    <ul>
      <li style="float: right"><a class="active" href="#about"><router-link to="/logout">Logout</router-link></a></li>
      <li style="float: right"><a class="active" href="#about"><router-link to="/myaccount">My Account</router-link></a></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Afternav'
}
</script>
<style lang="scss" scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: grey;
}

.active {
  background-color: black;
}
</style>
