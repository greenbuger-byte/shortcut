<template>
    <v-row>
        <v-col cols="12" sm="6">
            <h1>Войти</h1>
            <v-card style="{padding:10}">
              
                    <div class="login-cart">
                        <login-component/>
                    </div>
            </v-card>
        </v-col>
        <v-col cols=12 sm="6">
            <h1>Добро пожаловать!!</h1>
            <p>
                Зарабатывайте на ссылках вдыле больше, c новым сервисом ShortCash
            </p>
        </v-col> 
    </v-row>
</template>

<script>
import LoginComponent from "../components/login-component";
export default {
    components:{ LoginComponent}
    
}
</script>
<style scoped>
    
</style>