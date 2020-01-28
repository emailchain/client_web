<template>
    <v-card>
        <v-toolbar
                color="pink"
                dark
        >


            <v-toolbar-title>Settings</v-toolbar-title>

            <v-spacer></v-spacer>


        </v-toolbar>
        <v-row class="pa-0 ma-0">
            <v-col cols="8">
                <v-text-field outlined
                              v-model="passPhrase"
                              label="pass phrase"
                              required
                ></v-text-field>
            </v-col>
            <v-col cols="4">
                <v-btn  :loading="load" class="mt-1 primary"  @click="generateKey" large>Generate Key Pair</v-btn>
            </v-col>
        </v-row>
        <v-row class="pa-0 ma-0">
            <v-col cols="8">
                <v-text-field outlined
                              v-model="serverInput"
                              label="Server baseUrl"
                              required
                              prefix="http://"
                ></v-text-field>
            </v-col>
            <v-col cols="4">
                <v-btn  class="mt-1 primary"  @click="connectServer" large>Set Server</v-btn>
            </v-col>
        </v-row>

        <v-card
                class="mx-auto">
            <v-card-title>Current Configuration</v-card-title>
            <v-card-subtitle v-if="showOutput">Your Private Key has been saved to local storage. <br>Save the pass phrase you used somewhere safe to register again. Share your public key to anyone who wants to send mail to you</v-card-subtitle>
            <form>
                <v-card-text>
                    <v-text-field filled
                                  v-model="pubKey"
                                  label="Public Key"
                                  required

                    ></v-text-field>
                    <v-text-field filled
                                  disabled
                                  v-model="server"
                                  label="Server Base Url"
                                  required

                    ></v-text-field>
                </v-card-text>


            </form>
        </v-card>
    </v-card>

</template>
<script>
    import EmailCrypto from "../crypto";

    export default {
        data() {
            return {
                pubKey: "",
                passPhrase: "",
                server:"",
                serverInput:"",
                load:false,
                showOutput: false
            };
        },
        mounted(){
          this.pubKey = localStorage.getItem("pubKey");
          this.server = localStorage.getItem("baseUrl")
        },
        methods: {
             generateKey() {
                this.load=true;
                 this.showOutput = true;
                const key = EmailCrypto.generateKey(this.passPhrase);
                this.privKey = JSON.stringify(key);
                this.pubKey = EmailCrypto.pubKey(key);
                localStorage.setItem("RSAKey",this.passPhrase);
                localStorage.setItem("pubKey",this.pubKey);
                this.passPhrase = "";
                this.load =false;

            },
            connectServer() {
                localStorage.setItem("baseUrl","http://"+this.serverInput);
                this.server = localStorage.getItem("baseUrl")
                this.serverInput="";
                this.showOutput = false;

            }
        },
    }
</script>