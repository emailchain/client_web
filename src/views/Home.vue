<template>
<v-container fluid>
    <v-row>
      <v-col cols="2">
        <v-btn class="ma-5" color="primary" dark v-on:click="create()">New eamil 
        <v-icon dark right>mdi-email</v-icon>
      </v-btn>
      <v-card flat
    class="mx-auto"
    max-width="300"
    tile
  >
    <v-list shaped>
      <v-list-item-group  color="primary">
        <v-list-item @click="input_gn">
          <v-list-item-icon>
            <v-icon>mdi-mail</v-icon>
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
  </v-card>

      </v-col>
      <v-col cols="10">
  <v-card
  v-if="!showme"
    class="mx-auto"
  >
    <v-toolbar
      color="pink"
      dark
    >
      

      <v-toolbar-title>Inbox</v-toolbar-title>

      <v-spacer></v-spacer>

      
    </v-toolbar>

    <v-list two-line>
      <v-list-item-group
        v-model="selected"
        multiple
        active-class="pink--text"
      >
        <template v-for="(item, index) in items">
          <v-list-item :key="item.title">
            <template v-slot:default="{  }">
              <v-list-item-content v-on:click="change()">
                <v-list-item-title v-text="item.title"></v-list-item-title>
                <v-list-item-subtitle class="text--primary" v-text="item.headline"></v-list-item-subtitle>
                <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-list-item-action-text v-text="item.action"></v-list-item-action-text>
                
              </v-list-item-action>
            </template>
          </v-list-item>

          <v-divider
            v-if="index + 1 < items.length"
            :key="index"
          ></v-divider>
        </template>
      </v-list-item-group>
    </v-list>
  </v-card>
  <v-card
    class="mx-auto"
   v-if="showme">
    <v-toolbar
      color="pink"
      dark
    >
      

      <v-toolbar-title>Sent</v-toolbar-title>

      <v-spacer></v-spacer>

      
    </v-toolbar>

    <v-list two-line>
      <v-list-item-group
        v-model="selected"
        multiple
        active-class="pink--text"
      >
        <template v-for="(item, index) in items">
          <v-list-item :key="item.title">
            <template v-slot:default="{  }">
              <v-list-item-content v-on:click="change()">
                <v-list-item-title v-text="item.title"></v-list-item-title>
                <v-list-item-subtitle class="text--primary" v-text="item.headline"></v-list-item-subtitle>
                <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-list-item-action-text v-text="item.action"></v-list-item-action-text>
                
              </v-list-item-action>
            </template>
          </v-list-item>

          <v-divider
            v-if="index + 1 < items.length"
            :key="index"
          ></v-divider>
        </template>
      </v-list-item-group>
    </v-list>
  </v-card>
      </v-col>
    </v-row>
</v-container>
</template>
<script>
  export default {
    data: () => ({
      showme:false, 
      selected: [2],
      items: [
        {
          action: '15 min',
          headline: 'Brunch this weekend?',
          title: 'Ali Connors',
          subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
        },
        {
          action: '2 hr',
          headline: 'Summer BBQ',
          title: 'me, Scrott, Jennifer',
          subtitle: "Wish I could come, but I'm out of town this weekend.",
        },
        {
          action: '6 hr',
          headline: 'Oui oui',
          title: 'Sandra Adams',
          subtitle: 'Do you have Paris recommendations? Have you ever been?',
        },
        {
          action: '12 hr',
          headline: 'Birthday gift',
          title: 'Trevor Hansen',
          subtitle: 'Have any ideas about what we should get Heidi for her birthday?',
        },
        {
          action: '18hr',
          headline: 'Recipe to try',
          title: 'Britta Holt',
          subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        },
      ],
    }),
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
