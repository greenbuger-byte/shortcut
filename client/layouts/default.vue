<template>
<v-app>
  <div class="whiter">
<v-app-bar color="purple darken-4">
  <v-app-bar-nav-icon></v-app-bar-nav-icon>
  <v-container>
    <v-row><div class="text-centered">
<nuxt-link to="/">
  <img src="https://cutt.ly/img/cuttly.svg" class="logoImage"/>
</nuxt-link></div>
    <v-spacer></v-spacer>
    <div class="text-centered">
      <ul class="nav-bar-links">
        <li> 
          <nuxt-link to="/do"> <v-icon size="15" color="#1976d2">mdi-wrench</v-icon>
              Лаборатория
          </nuxt-link>
        </li>
        <li>
          <nuxt-link to="/do"> <v-icon size="15" color="#1976d2">mdi-currency-usd</v-icon>
              Как заработать
          </nuxt-link>
        </li>
      </ul>
 
    
    </div>
   <v-spacer></v-spacer>

   <div>
   </div>
    <div v-if="this.$auth.loggedIn">
      <v-btn icon>
        <v-icon>
          mdi-bell-outline
        </v-icon>
      </v-btn>
    <v-btn 
      depressed>
        <v-avatar
        color="primary"
        size="22"
      >
       
        <span style="color:white">
          {{this.$auth.user.avatar}}
        </span>
      </v-avatar> 
      <v-spacer></v-spacer>
     <span>
        {{this.$auth.user.email}}
     </span>
    </v-btn> <v-btn 
    depressed
     @click="logout">
      Выйти
    </v-btn>
    </div>
    <div class="text-centered" v-else>
      <nuxt-link to="/login">Вход</nuxt-link>
      <nuxt-link to="/register">Регистрация</nuxt-link>
    </div>
    </v-row>
  </v-container>
</v-app-bar>
  </div>
  <!-- Sizes your content based upon application components -->
  <v-main>
    <v-container >
      <nuxt/>
    </v-container>
  </v-main>

  <v-footer app>
    <!-- -->
  </v-footer>
</v-app>
</template>
<script>
export default {
data:()=>({ is_auth: false}),
methods:{
  logout:()=>{
  }
}
}
</script>
<style>
  .logoImage{
    width: 120px;
  }
  .nav-bar-links{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .nav-bar-links li{
    margin-left: 15px;
    list-style: none;
  }
  .whiter a{
    color:#fff!important
  }
  .whiter i {
    color:#fff!important
  }
</style>