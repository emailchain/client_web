<template>
  <v-app>
  <v-navigation-drawer
      app
      permanent
      left
    >
      <template v-slot:prepend>
        <v-list-item two-line>

          <v-list-item-content>
             <v-btn class="mr-8" color="primary" large rounded dark v-on:click="create()">
               <v-icon dark left>mdi-email</v-icon>New eamil
      </v-btn>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list dense>
      <v-list-item-group  color="primary">
        <v-list-item @click="input_gn">
          <v-list-item-icon>
            <v-icon>mdi-inbox</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title >Inbox</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="sent_gn">
          <v-list-item-icon>
            <v-icon >mdi-send</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title >Sent</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    </v-navigation-drawer>

  <v-app-bar app>
    <!-- -->
  </v-app-bar>

  <!-- Sizes your content based upon application components -->
  <v-content>

    <!-- Provides the application the proper gutter -->
   
<v-container fluid>
      <!-- If using vue-router -->
      <router-view></router-view>
</v-container>
  </v-content>

  <v-footer app>
    <!-- -->
  </v-footer>
</v-app>

</template>
<script>
export default {
  data: () => ({
      showme:false, }),
  methods: {
    change() {
      this.$router.replace({ path: "/msg_detail" });
    },
    input_gn(){
      this.showme = false;
    },
    sent_gn(){
      this.showme = true;
    },
    create() {
      this.$router.replace({ path: "/create" });
    }
    }
}
</script>


