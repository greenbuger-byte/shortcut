<template>
<div style="margin-bottom:20px" class="card">
  <v-list dense >   
      <v-list-item-group
        v-model="selectedItem"
        color="primary"
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to" exact
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
</div>

</template>

<script>
    export default{
        data:()=>({
            items:[
            {icon:"mdi-bulletin-board", to:"/", text:"Главная"},
            {icon:"mdi-link", to:"/do", exact:'true', text:'Мои ссылки'},
            {icon:"mdi-plus", to:"/do/create", text:'Добавить ссылку'},
            {icon:"mdi-cash-multiple", to:"/do/income", text:'Доход'},
            {icon:"mdi-finance", to:"/do/statistic", text:'Статистика'}]
        })
    }
</script>