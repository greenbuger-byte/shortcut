<template>
<div class="notification-bar">
     <h2>События 👂 <span class="mini-link"><nuxt-link to="/do/notifications" >Все события <v-icon>mdi-arrow-right</v-icon></nuxt-link></span></h2>
    <div class="card">
          <notification-template/>
           <notification-template/>
            <notification-template/>
    </div>
</div>
</template>
<script>
import notificationTemplate from './notification-template'
export default {
  components: { notificationTemplate }
    
}
</script>
<style scoped>
.notification-bar{
    margin-top:30px;
}
.mini-link{
    font-size: 12px;
}
.mini-link .v-icon{
color:#f5f5f5;
}
</style>