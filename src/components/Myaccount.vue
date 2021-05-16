<template>
  <div>
      <h2>Your Accout details</h2>
      <h4>Mail id  {{getUsername}}</h4>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Myaccount',
  computed: {
    ...mapGetters(['getUsername'])
  }
}
</script>
