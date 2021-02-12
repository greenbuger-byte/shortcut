<template>
  <v-row>
    <v-col lols="12">
      <v-img
        max-height="400"
        max-width="100vw"
        src="https://www.capsulink.com/assets/img/hero/capsulink-short-link-personalization-by-device-location-language-time.svg"/>
    </v-col> 
    <v-col>
      <h3>Список ссылок</h3>
      <ul>
        <li v-for="(link, index) in links" :key="index">
          {{link}}
        </li>
      </ul>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data:()=>({
    links:[]
  }),
  async beforeMounted(){
   this.links = await this.$axios.get('links');
  }
}
</script>