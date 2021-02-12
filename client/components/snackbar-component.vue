<template>
      <v-snackbar
            v-model="snackbar"
        >
      {{message}}
      <template v-slot:action="{ attrs }">
        <v-btn
          
          color="pink"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Закрыть
        </v-btn>
      </template>
    </v-snackbar>
</template>

<script>
export default {
    props:["snackdar", "message"],
    data(){
        return {
            snackbar:false
        }
    },
    computed(){
        this.snackbar = snackbar;
    }
}
</script>