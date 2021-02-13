<template>
<v-card elevation="0" border="1">
    <div class="notification">
        <div class="notification--owner">
            <v-avatar 
                size="20" 
                color="primary">
                    <span style="color:white">K</span>
            </v-avatar>
            <h6>Артем</h6>
        </div>
        <p>Обновление на сайте, не упустите новые события вместе с нами</p>
    </div>
</v-card>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .notification--owner{
        overflow:hidden;
        height: 23px;
        display: flex;
        flex-direction: row;
        align-content: center;
    }
    .notification--owner h6{
        font-size: 15px;
        margin-left: 10px;
    }
    .notification{
        padding: 10px;
            transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), visibility 0s;
    }
    .notification::last-child{
        margin-bottom: 0px;
    }
    .notification:hover{
            background-color: #f5f5f5;
        cursor: pointer;
    }
    .notification p{
            color: rgba(0, 0, 0, 0.6);
            font-size: 12px;
    }
</style>