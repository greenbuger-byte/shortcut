<template>
    <div>
        <v-form @submit="registration">
              <div v-if = "errors.email.length>0"><v-alert color="red lighten-2" text-color="white" v-for="(msg, index) in errors.email" :key="index" >{{msg}}</v-alert></div>
            <v-text-field 
            filled
            v-model="email"
            label="Почта"
            required
            placeholder="Почтовый ящик"
            >
            </v-text-field>
            <div v-if = "errors.password.length>0"><v-alert color="red lighten-2" text-color="white" v-for="(msg, index) in errors.password" :key="index" >{{msg}}</v-alert></div>
            <v-text-field
            v-model="password"
            label="Пароль"
            filled
            counter
            minLength="6"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append = "show = !show"
            :type="show ? 'text' : 'password'"
            >
            </v-text-field>
            <v-btn color="warning" @click="registration">Войти</v-btn>
        </v-form>
         <v-snackbar
      v-model="snackbar"
    >
      {{ errors.message }}

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
    </div>
</template>
<script>
export default {
    data:()=>( {
            show:false,
            email:"",
            password:"",
            errors:"",
            snackbar:false,
            errors:{
                email:[],
                password:[],
                message:""
            }
        }
    ),
    methods:{
      async  registration(){
          this.errors.message = "";
          this.errors.email = [];
          this.errors.password = [];
          this.snackbar = false;
          const fetchJson = await fetch('http://localhost:5000/api/auth/register', {
              method:"POST",
              headers: { 'Content-Type': 'application/json' },
              body:JSON.stringify({email:this.email, password:this.password})
          });
          const result = await fetchJson.json();
          if(result.status === true) return console.log("success", result.message);
          this.errors.message = result.message;
          this.snackbar = true;

          if(result.errors && result.errors.length>0) result.errors.forEach(err => {
            this.errors[err.param].push(err.msg);
          });
        }
    }
}
</script>