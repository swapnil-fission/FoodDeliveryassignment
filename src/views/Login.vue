<template>
  <div class='main'>
    <v-card>
      <v-card-title> LOGIN FORM </v-card-title>
      <div v-if='error === true'>
        <v-alert type='error' height='50px'>{{ errorMessage }}</v-alert>
      </div>
      <v-form ref='form' v-model='valid' lazy-validation>
        <v-card-text>
          <v-text-field
            v-model='email'
            type='email'
            :rules='eRules'
            label='Email'
            required
          >
          </v-text-field>
          <v-text-field
            v-model='password'
            type='password'
            :counter='10'
            :rules='pRules'
            label='Password'
            required
          >
          </v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn :disabled='!valid' class='mr-4' @click='authlogin'>
            LOGIN
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapState } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      valid: true,
      error: '',
      errorMessage: '',
      eRules: [
        (email) => !!email || 'E-mail is required',
        (email) =>
          /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email) ||
          'E-mail must be valid'
      ],
      pRules: [
        (password) => !!password || 'Password is required',
        (password) => password.length >= 10 || 'Password length minimum 10'
      ]
    }
  },
  computed: {
    ...mapGetters(['getLoginData'])
  },
  methods: {
    ...mapActions(['setLoginAction']),
    ...mapActions(['setIdAction']),
    authlogin () {
      if (this.$refs.form.validate()) {
        const em = Object.keys(this.getLoginData)
        const found = em.includes(this.email)
        if (found) {
          if (this.getLoginData[this.email] === this.password) {
            this.setLoginAction(true)
            this.setIdAction(this.email)
            this.$router.push('/home')
          } else {
            this.error = true
            this.errorMessage = 'Password is incorrect'
          }
        } else {
          this.error = true
          this.errorMessage = 'Email is not yet registered!'
        }
      }
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
