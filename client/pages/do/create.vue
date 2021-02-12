<template>
<div>
    <v-row>
        <v-col cols="12" md="6" sm="6">
            
             <h1>Создание новой ссылки</h1>
            <v-card><div class="login-cart">
            <v-form>
            <v-text-field
            filled
            label = "Вставьте ссылку"
            v-model="link">
            </v-text-field>
            <v-btn 
                color="primary" 
                block
                @click="saveLink"
            >
                Добавить
            </v-btn>
        </v-form>
        </div>
        </v-card>
        </v-col>
        <v-col cols="12" md="6" sm="6">
            <h1>Как это работает</h1>
            <p class="linkOwner" v-if="link.length>0">
                <link/>
                <v-icon >mdi-link</v-icon>{{link}}</p>
            <p>
                Бесплатный настраиваемый - Сокращение URL и ссылок - с множеством функций, который дает вам лучшее качество для сокращения ссылок. Сокращенные URL-адреса никогда не истекают. Мы не показываем рекламу во время прямого перенаправления на исходный URL.
            </p>
        </v-col>
    </v-row>
    <v-snackbar
            v-model="snackbar"
        >
      {{errors}}
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
// create 
import SnackbarComponent from '../../components/snackbar-component'
export default {
    components:{
        SnackbarComponent
    },
    data:()=>({
        link:"",
        snackbar:false,
        errors:""
    }),
    methods:{
       async saveLink(){
           try{
                const result = await this.$axios.$post('link/generate', JSON.stringify({link:this.link}), {headers:{'Content-Type': 'application/json'}});
                
           }catch(err){
               const errors = err.response.data;
                console.log('ERROR', err.response);
                this.snackbar = true;
                this.errors = errors.message;
           }
           
        },
        btn_up(){

        }
    }
}
</script>
<style scoped>
    .linkOwner{
        background-color: rgb(240 240 240);
        padding: 15px;
    }
    .primary{
        background-color: #4e3a8c!important;
    }
    .primary--text{
        caret-color:#4e3a8c!important
    }
</style>