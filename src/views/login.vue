<template>
    <div class="login">
  
    <v-main class=" mt-16 mb-16">
      <v-col cols="10" lg="4" class="">
        <v-card class=" d-flex justify-center align-center  pa-16">
          
            <h2 class="black--text">Login</h2>
          <v-form @submit.prevent="submitHandler" ref="form">
            <v-card-text>
              <v-text-field
                v-model="user.email"
                :rules="emailRule"
                type="email"
                label="Email"
                placeholder="Email"
                required
              />
              <v-text-field
                      v-model="user.password"
                      :rules="passwordRule"
                      :type="passwordShow?'text':'password'"
                      label="Password"
                      placeholder="Password"
                      :append-icon="passwordShow ? 'mdi-eye':'mdi-eye-off'"
                      @click:append="passwordShow = !passwordShow"
                      required
              />
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn :loading="loading" type="submit" color="blue-grey darken-1" @click="home()">
                <span class="white--text px-8">Login</span>
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-main>
    <v-snackbar top color="red" v-model="snackbar">
     Enter Correct Email or Password
    </v-snackbar>
  
    </div>
</template>

<script>
import {
        emailRule,
        passwordRule, } from './validation';

export default {
  name: 'Login',

  data: () => ({
    emailRule: emailRule,
    passwordRule:passwordRule,
    loading:false,
    snackbar:false,
    passwordShow:false,
    user :{
       email: "",
    password: "",
    }
    
   
  }),
  methods:{
    submitHandler(){
      if (this.$refs.form.validate()){
          this.loading = true
        setTimeout(()=> {
          this.loading = false
          this.snackbar = true

        const keys = Object.keys(localStorage);
        for (let key of keys) {
          console.log(this.user.email);
          if (this.user.email === key) {
            if (
              this.user.password === JSON.parse(localStorage.getItem(key)).password
            ) {
              localStorage.setItem("currentUser", this.user.email);
              this.$router.push({ name: "Home" });
            }
          }
        }
         
         
        
        })
      }

    }
  }
};
</script>
<style >
.login{
  overflow: hidden;
  margin-top: 15%;
  margin-left: 45%;
}

  
</style>