<template>
<v-app>
  <div>
<v-app-bar>
  <v-app-bar-nav-icon></v-app-bar-nav-icon>
  <v-container>
    <v-row>
<nuxt-link to="/">ШортКэш</nuxt-link>
   <v-spacer></v-spacer>

    <nuxt-link to="/login">Вход</nuxt-link>
    <nuxt-link to="/register">Регистрация</nuxt-link>
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
export default {}
</script>
