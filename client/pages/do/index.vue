<template>
    <v-row>
        <v-col cols="12">
            <h1>Лаборатория ссылок <v-btn to="/do/create" primary><v-icon>mdi-plus-circle-outline</v-icon></v-btn></h1>
            
        </v-col>
        <v-col cols="12" md="6">
            <p>Ваши ссылки и статистика будет отображаться на этой странице</p>
                    <v-row>
                        <h2>📣 Рейтинг ссылок</h2>
                    </v-row>
                    
                    <v-row v-for="(link, index) in links.links"  :key="index" >
                        
                        <v-col cols="6" sm="10"> 
                            <v-card style="padding:10px">
                                <h3><a :href="link.from.substr(0, 4)==='http'? link.from : 'http://'+ link.from" target="_blank"  follow="no-follow">{{link.from}}</a>  </h3>
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
</style>