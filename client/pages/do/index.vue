<template>
    <v-row>
        <v-col cols="12">
            <h1>Лаборатория ссылок</h1>
            <nuxt-link to="/do/create">Добавить новую</nuxt-link>
        </v-col>
        <v-col cols="12" md="6">
            <p>Ваши ссылки и статистика будет отображаться на этой странице</p>
            <v-list rounded>
                 <v-list-item-group
        v-model="selectedItem"
        color="primary"
      >
                <v-list-item>
                    <v-list-item-content>
            <v-list-item-title text="content">content</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
               
                 </v-list-item-group>
            </v-list>
        </v-col>
    </v-row>
</template>
<script>
export default {
    
}
</script>