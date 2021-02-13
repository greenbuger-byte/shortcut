<template>
<v-card elevation="0">
    <div class="price-container">
      <div> <h6>Мой доход:</h6>
        <h1>6 775 <span>Руб.</span></h1>
      </div> 
      <div class="price-btns">
      <v-btn icon color="#8E24AA"><v-icon>mdi-wallet-outline</v-icon></v-btn>
      <v-btn icon color="#8E24AA"><v-icon>mdi-reload</v-icon></v-btn>
      </div>
    </div>
</v-card>
</template>

<script>
export default {
    
}
</script>
<style scoped>
    .price-container{
        border:1px solid #f5f5f5;
        padding:10px;
        justify-content: space-between;
        display: flex;
        flex-direction: row;
    }
    .price-container h1{
        color: #000;
        font-size: 2.2rem;
    }
    .price-container h1>span{
        font-size: 10px;
    }
    .price-container h6{
        color: rgba(0, 0, 0, 0.6);
    }
    .price-btns{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .price-btns .v-icon{
        padding:0px;
        font-size:1.1rem;
    }
</style>