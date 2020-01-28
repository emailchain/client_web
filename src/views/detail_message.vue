<template>
  <v-card
    class="mx-auto"
  >
    <v-card-text>
      <div></div>
      <p class="display-1 text--primary">
        [GitHub] @eyuelberga has invited you to join the @emailchain organization
      </p>
      <p>Sender:</p>
      <div>
        well meaning and kindly.
        "a benevolent smile"
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        color="deep-purple accent-4"
     v-on:click="change()"
      >
        back
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  methods:{
    change(){
      this.$router.replace({ path: "/" });
    }
  }
}
</script>