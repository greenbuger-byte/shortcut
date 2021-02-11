<template>
  <v-row>
        <v-col cols="12" sm="6">
            <h1>Регистрация</h1>
            <v-card style="{padding:10}">
                    <div class="login-cart">
                        <registration-component/>
                    </div>
            </v-card>
        </v-col>
        <v-col cols=12 sm="6">
            <h1>Добро пожаловать!!</h1>
            <p>
                Зарабатывайте на ссылках коротких ссылках больше, c новым сервисом ShortCash
            </p>
        </v-col> 
    </v-row>
</template>
<script>
import RegistrationComponent  from "../components/registration-component";
export default{
components:{ RegistrationComponent}
}
</script>