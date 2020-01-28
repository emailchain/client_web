<template>
  <v-app>
    <v-app-bar app>
      <!-- -->
    </v-app-bar>
  <v-navigation-drawer
      app
      permanent
      left
      class="pt-6"
    >
      <template v-slot:prepend>
        <v-list-item two-line>

          <v-list-item-content>
             <v-btn class="mr-8" color="primary" large rounded dark to="/create">
               <v-icon dark left>mdi-email</v-icon>New email
      </v-btn>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-divider></v-divider>

      <v-list dense>
      <v-list-item-group  color="primary">
        <v-list-item to="/">
          <v-list-item-icon>
            <v-icon>mdi-inbox</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title >Inbox</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/sent">
          <v-list-item-icon>
            <v-icon >mdi-send</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title >Sent</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/aut">
          <v-list-item-icon>
            <v-icon >mdi-settings</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title >Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    </v-navigation-drawer>


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

}
</script>


