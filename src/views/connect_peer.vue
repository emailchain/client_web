<template>
    <v-container fluid>
        <v-card 
                class="mx-auto">
            <v-card-title>Block chain info</v-card-title>
        <v-list>
      
      <v-list-item-group v-model="item" color="primary">
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-dns</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Height</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-ballot</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title >Total Pow
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
        </v-card>
        <v-row>
            <v-col cols="8">
                <v-text-field outlined
                              v-model="passPhrase"
                              label="peer"
                              required
                ></v-text-field>
            </v-col>
            <v-col cols="4">
                <v-btn  @click="generateKey" large>connect</v-btn>
            </v-col>
        </v-row>

        <v-card 
                class="mx-auto">
            <v-card-title>Connected Peers</v-card-title>
        <v-list>
      
      <v-list-item-group v-model="item" color="primary">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
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
        </v-card>
    </v-container>
</template>
<script>
  export default {
    data: () => ({
      item: 1,
      items: [
        
        { text: 'http:/gsggs', icon: 'mdi-account' },
      ],
    }),
  }
</script>