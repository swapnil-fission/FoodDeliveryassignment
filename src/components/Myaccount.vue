<template>
  <div>
    <h2>Your Accout details</h2>
    <h4>Mail id {{ getUsername }}</h4>
      <div class='main'>
    <v-card>
      <v-card-title>Forgot Password </v-card-title>
      <div v-if='error === true'>
        <v-alert type='error' height='50px'>{{ errorMessage }}</v-alert>
      </div>
      <v-form ref='form' v-model='valid' lazy-validation>
        <v-card-text>
          <v-text-field
            v-model='newpassword'
            type='password'
            :counter='10'
            :rules='pRules'
            label='New Password'
            required
          >
          </v-text-field>
          <v-text-field
            v-model='cpassword'
            type='password'
            :counter='10'
            :rules='pRules.concat(passwordConfirmationRule)'
            label='Confirm Password'
            required
          >
          </v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn :disabled='!valid' class='mr-4' @click="changePassword">
            Change Password
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Myaccount',
  data: () => ({
    dialog: false,
    valid: false,
    valids: true,
    changes: false,
    newpassword: '',
    cpassword: '',
    pRules: [
      (pass) => !!pass || 'Password is required',
      (pass) => pass.length >= 10 || 'Password length must be greater than 10'
    ]

  }),
  computed: {
    ...mapGetters(['getUsername']),
    ...mapGetters(['getLoginData']),
    passwordConfirmationRule () {
      return () => (this.newpassword === this.cpassword) || 'Password must match'
    }
  },
  methods: {
    ...mapActions(['setLoginDataAction']),
    changePassword () {
      this.getLoginData[this.getUsername] = this.cpassword
      this.setLoginDataAction(this.getLoginData)
      this.changes = true
      this.valids = false
      this.$router.push('/')
    }
  }
}
</script>
<style lang='scss' scoped>
.main {
  margin: auto;
  height: 500px;
  width: 700px;
  margin-top: 50px;
}
</style>
