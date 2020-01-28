
<template>
<v-container fluid>
    <v-row>
      <v-col cols="8">
        <v-text-field outlined
      v-model="email"
      label="pass fraze"
      required
      
    ></v-text-field>
      </v-col>
      <v-col cols="4">
    <v-btn class="mr-4" @click="submit" large>Generate</v-btn>
      </v-col>
    </v-row>

    <v-card
    class="mx-auto">
    <v-card-title>Output</v-card-title>
    <form>
      <v-card-text>
    <v-text-field filled
      v-model="name"
      label="Public Key"
      required
      
    ></v-text-field></v-card-text>
    <v-card-text>
    <v-text-field filled
      v-model="email"
      label="Pravate key"
      required
      
    ></v-text-field></v-card-text>

    

  </form>
    </v-card>
</v-container>
  
</template>