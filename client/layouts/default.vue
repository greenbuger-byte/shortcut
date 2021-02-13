<template>
<v-app>
  
  <div class="whiter">
<v-app-bar fixed color="purple darken-4">
  <v-container>
    <v-row>
      <div class="text-centered">
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
     
      <v-btn icon style="margin-right:20px;"> <v-badge
          color="green"
          content="6"
        >
        <v-icon>
          mdi-bell-outline
        </v-icon>   </v-badge>
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
    
    <v-container style="margin-top:60px" >
       <v-breadcrumbs :items=" [
        {
          text: 'Dashboard',
          disabled: false,
          href: 'breadcrumbs_dashboard',
        },
        {
          text: 'Link 1',
          disabled: false,
          href: 'breadcrumbs_link_1',
        },
        {
          text: 'Link 2',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
      ]">
      <template v-slot:divider>
        <v-icon>mdi-forward</v-icon>
      </template>
    </v-breadcrumbs>
    <v-row>  

    
<v-col cols="3" v-if="this.$auth.loggedIn" style="display:sticky">  
    <navigation-component/>
    <income-bar/>
      <nitification-list-component/>
       
      </v-col>
            <v-col :cols="this.$auth.loggedIn?9:12">
     <nuxt/>
      </v-col>  
    </v-row>
 
    </v-container>
  </v-main>

  <v-footer app>
    <!-- -->
  </v-footer>
</v-app>
</template>
<script>
import IncomeBar from '../components/income-bar';
import NavigationDrawler from "../components/navigation-component";
import NitificationListComponent from '../components/notifications/nitification-list-component';
export default {
  components:{
    NavigationDrawler,
    IncomeBar,
    NitificationListComponent
  },
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