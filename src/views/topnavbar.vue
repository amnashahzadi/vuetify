<template>
  <div>
    <v-app-bar
   dark
     
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>SHOPy</v-toolbar-title>

      <v-spacer></v-spacer>
<v-container class="py-0 fill-height">
        <v-spacer></v-spacer>

        <v-btn to="/Home">  Home
          <v-icon small left>mdi-home</v-icon>
        
        </v-btn>
        <v-btn to="/Category" text>  Categorys
          <v-icon small left>mdi-basket</v-icon>
        
        </v-btn>
        <v-btn to="/updateProfile" text>  update profile
          <v-icon small left>mdi-account</v-icon>
        
        </v-btn>
        <v-btn text> Logout
          <v-icon small left @click="logout()">mdi-logout</v-icon>
         
        </v-btn>
      </v-container>

      
    </v-app-bar>
  </div>
</template>
<script>
export default {
  name: "topnavbar",
  methods:{
    logout(){

      localStorage.setItem("currentUser","");

      this.$router.push({name:"signup"});

    }
  }
 
};
</script>

<style></style>