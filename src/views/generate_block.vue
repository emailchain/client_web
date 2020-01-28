<template>
  <v-card class="mt-9">
    <v-card-title>
      mails in memory pool
      <v-spacer></v-spacer>
       <v-btn  class="primary" large>generate block</v-btn>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
    ></v-data-table>
  </v-card>
</template>
<script>
  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Id',
            align: 'left',
            sortable: false,
            value: 'name',
          },
          { text: 'sender', value: 'calories' },
          { text: 'recipient', value: 'fat' },
          { text: 'message', value: 'carbs' },
          { text: 'signature', value: 'protein' },
        
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            
          }
        ],
      }
    },
  }
</script>