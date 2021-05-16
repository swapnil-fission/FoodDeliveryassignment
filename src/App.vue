<template>
  <div>
    <div><Header/></div>
    <router-view/>
    <!-- <Listofrestorents/> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '../src/components/Header.vue'
export default Vue.extend({
  name: 'App',
  components: {
    Header
  }
})
</script>
