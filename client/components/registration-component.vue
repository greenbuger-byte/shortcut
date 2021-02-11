<template>
    <div>
        <v-form>
            <div v-if="errors.email.length>0">
                <v-alert 
                    color="red lighten-2" 
                    v-for="(msg, index) in errors.email" 
                    :key="index" 
                    text-color="white">
                    {{msg}}
                </v-alert>
            </div>
            <v-text-field
                filled 
                v-model="email"
                label="Почта"
                required
                placeholder="Почтовый ящик"
            ></v-text-field>

            <!-- field password -->
            <div v-if="errors.password.length>0">
                <v-alert 
                    color="red lighten-2" 
                    v-for="(msg, index) in errors.password" 
                    :key="index" 
                    text-color="white">
                    {{msg}}
                </v-alert>
            </div>
            <v-text-field
            filled
            v-model="password"
            label = "Пароль"
            counter
            minLength="6"
            @click:append = "show = !show"
            :append-icon="show?'mdi-eye':'mdi-eye-off'"
            :type="show ? 'text' : 'password'"
            >
            </v-text-field>

            <!-- field review password -->
            <div v-if="errors.password_review.length>0">
                <v-alert 
                    color="red lighten-2" 
                    v-for="(msg, index) in errors.password_review" 
                    :key="index" 
                    text-color="white">
                    {{msg}}
                </v-alert>
            </div>
            <v-text-field
            filled
            v-model="password_review"
            label = "Пароль повторно"
            counter
            minLength="6"
            :append-icon="show2?'mdi-eye':'mdi-eye-off'"
            @click:append = "show2=!show2"
            :type="show2 ? 'text' : 'password'"
            >
            </v-text-field>
            <v-btn 
                color="warning"
                @click="registration"
                >
                Зарегистрироваться
            </v-btn>
        </v-form>
        <v-snackbar 
            v-model="snackbar"
        >
            {{errors.message}}
            <template v-slot:action="{ attrs }">
                <v-btn
                    color="pink"
                    text
                    v-bind="attrs"
                    @click="snackbar = false">
                        Закрыть
                </v-btn>
            </template>
        </v-snackbar>
    </div>
</template>

<script>
export default {
    data:()=>({
        email:"",
        password: "",
        password_review:"",
        errors:{
            email:[],
            password:[],
            password_review:[],
            message:""
        },
        show:false,
        show2:false,
        snackbar:false
        }),
    methods:{
        resetErrors(){
            this.snackbar = false;
            this.errors.email = [];
            this.errors.password = [];
            this.errors.password_review = [];
            this.errors.message = ""; 
        },
        async registration(){
            this.resetErrors();
            if(this.password != this.password_review){
               this.errors.password_review[0] = 'Пароли не совпадают';
                return; 
            }
            const registration_to_server = await fetch('http://localhost:5000/api/auth/register', {
                method: "POST",
                headers: {'Content-Type':'application/json'},
                body:JSON.stringify({email:this.email, password:this.password})
            });
            const result = await registration_to_server.json();
            if(result.status === true) return console.log("succes");
            this.errors.message = result.message;
            this.snackbar = true;
            if(result.errors && result.errors.length > 0 )
                result.errors.forEach(err=>{
                    this.errors[err.param].push(err.msg);
            });
        }
    }
}
</script>