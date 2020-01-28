<template>
    <v-container fluid>
        <v-row>
            <v-col cols="8">
                <v-text-field outlined
                              v-model="passPhrase"
                              label="pass phrase"
                              required

                ></v-text-field>
            </v-col>
            <v-col cols="4">
                <v-btn class="mr-4" @click="generateKey" large>Generate</v-btn>
            </v-col>
        </v-row>

        <v-card v-if="showOutput"
                class="mx-auto">
            <v-card-title>Output</v-card-title>
            <form>
                <v-card-text>
                    <v-text-field filled
                                  v-model="pubKey"
                                  label="Public Key"
                                  required

                    ></v-text-field>
                </v-card-text>
                <v-card-text>
                    <v-text-field filled
                                  v-model="privKey"
                                  label="Private key"
                                  required

                    ></v-text-field>
                </v-card-text>


            </form>
        </v-card>
    </v-container>

</template>
<script>
    export default {
        data() {
            return {
                pubKey: "",
                privKey: "",
                passPhrase: "",
                showOutput:false
            };
        },
        methods:{
            generateKey(){
              this.privKey = "privae key";
                this.pubKey = "privae key";
                this.passPhrase="";
                this.showOutput=true;
            }
        },

    }
</script>