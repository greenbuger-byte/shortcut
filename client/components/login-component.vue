<template>
    <div>
        <v-form @submit="login">
              <div v-if = "errors.email.length>0">
                <v-alert 
                  color="red lighten-2" 
                  text-color="white" 
                  v-for="(msg, index) in errors.email" 
                  :key="index">
                {{msg}}
                </v-alert>
              </div>
            <v-text-field 
              filled
              v-model="email"
              label="Почта"
              required
              placeholder="Почтовый ящик">
            </v-text-field>
            <div 
            v-if = "errors.password.length>0">
              <v-alert 
                color="red lighten-2" 
                text-color="white" 
                v-for="(msg, index) in errors.password" 
                :key="index" 
              >
                {{msg}}
              </v-alert>
            </div>
            <v-text-field
              v-model="password"
              label="Пароль"
              filled
              counter
              minLength="6"
              :append-icon="show?'mdi-eye':'mdi-eye-off'"
              @click:append = "show=!show"
              :type="show?'text':'password'"
            >
            </v-text-field>
            <v-btn 
              :loading = "loading" 
              color="warning" 
              @click="login">
              Войти
            </v-btn>
        </v-form>
      
    </div>
</template>
<script>
export default {
    data:()=>( {
            loading:false,
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
      async  login(){
          this.errors.message = "";
          this.errors.email = [];
          this.errors.password = [];
          this.snackbar = false;
          this.loading = true;
          try{
            await this.$auth.loginWith('local',{
                data: {email:this.email, password: this.password}
            });
            this.$router.push("/");
          }catch(resWithError){
            console.log("ERRORS", resWithError.response);
            const errData = resWithError.response.data;
            if(resWithError.response.status == 400){
              this.errors.message = errData.message;
              if(errData.errors && errData.errors.length>0) errData.errors.forEach(err => {
              this.errors[err.param].push(err.msg);
              });
            }else{
              this.errors.message = resWithError.message;
            }
            this.snackbar = true;
          }
          this.loading = false;
        }
    }
}
</script>