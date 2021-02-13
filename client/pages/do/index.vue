<template>
    <v-row>
        <v-col cols="12">
            <h1>📣 Список ссылок</h1>
            
        </v-col>
        <v-col cols="12" md="12">
          
                    <v-row v-for="(link, index) in links.links"  :key="index" >
                  
                        <v-col cols="6" sm="10" > 
                            <v-card style="padding:10px; border:1px solid #f5f5f5" elevation="0">
                                <div v-if="Number(Date.parse(link.date))>=Math.floor(Date.parse(Date())-86399)" class="link-new"></div>
                                <h3>       
        <a 
        :href="link.from.substr(0, 4)==='http'? link.from : 'http://'+ link.from" 
        target="_blank" 
        :alt="link.from" 
        :title="link.from"  
        follow="no-follow"
        >
        {{link.from.length>40?link.from.substr(0,40)+'...':link.from}}
        </a>  
        </h3>
                                <p>{{link.to}}</p>
                                <p><v-chip 
                                        class="ma-2"
                                        color="orange"
                                        label
                                        outlined> 
                                          👆 Кликов: {{link.clicks}}
                                    </v-chip>
                                    <v-chip 
                                        class="ma-2"
                                        color="orange"
                                        label
                                        outlined> 
                                             💵 Заработано: 1 399 руб.
                                    </v-chip>
                                </p>
                            </v-card></v-col>
                        <v-col cols="2" sm="2"  class="to-colum">
                   
                         <v-tooltip right>
                             <template v-slot:activator="{ on, attrs }">    
                                 <v-btn icon primary 
                                 v-bind="attrs"
                                    v-on="on"><v-icon>mdi-content-copy</v-icon></v-btn>
                                  </template>
                                <span>Копировать</span>
                          </v-tooltip>
                          <v-tooltip right>
                             <template v-slot:activator="{ on, attrs }"> 
                            <v-btn v-bind="attrs" v-on="on" icon primary><v-icon>mdi-circle-edit-outline</v-icon></v-btn>
                              </template>
                                <span>Редактировать</span>
                          </v-tooltip>
                           <v-tooltip right>
                             <template v-slot:activator="{ on, attrs }"> 
                            <v-btn v-bind="attrs" v-on="on" icon primary><v-icon>mdi-delete-circle</v-icon></v-btn>
                              </template>
                                <span>Удалить</span>
                          </v-tooltip>
                        </v-col>
                    </v-row>
                    
        </v-col>
    </v-row>
</template>
<script>
export default {
    async asyncData({$axios}){
        const links =await $axios.$get('link/my');
        
        return {
            links
        }
    }
}
</script>
<style scoped>
.to-colum{
    display: flex;
    flex-direction: column;
}
.link-new{
    color: #fff;
    position: absolute;
    right:10px;
    background-color: #E53935;
    padding: 3px;;
}
.link-new::after{
    content:"Новая"
}
</style>