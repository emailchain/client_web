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
                <v-btn  class="mt-1 primary"  @click="generateKey" large>Generate</v-btn>
            </v-col>
        </v-row>

        <v-card v-if="showOutput"
                class="mx-auto">
            <v-card-title>Output</v-card-title>
            <v-card-subtitle>Your Private Key has been saved to local storage. <br>Save the pass phrase you used somewhere safe to register again. Share your public key to anyone who wants to send mail to you</v-card-subtitle>
            <form>
                <v-card-text>
                    <v-text-field filled
                                  v-model="pubKey"
                                  label="Public Key"
                                  required

                    ></v-text-field>
                </v-card-text>


            </form>
        </v-card>
    </v-container>

</template>
<script>
    import EmailCrypto from "../crypto";

    export default {
        data() {
            return {
                pubKey: "",
                passPhrase: "",
                showOutput: false
            };
        },
        methods: {
            generateKey() {
                const key = EmailCrypto.generateKey(this.passPhrase);
                this.privKey = JSON.stringify(key);
                this.pubKey = EmailCrypto.pubKey(key);
                localStorage.setItem("RSAKey",this.passPhrase)
                this.passPhrase = "";
                this.showOutput = true;

            }
        },
    }
</script>