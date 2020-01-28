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
                <v-btn  @click="generateKey" large>Generate</v-btn>
            </v-col>
        </v-row>

        <v-card v-if="showOutput"
                class="mx-auto">
            <v-card-title>Output</v-card-title>
            <v-card-subtitle>Key has been saved. To use another account generate a new key with your passphrase. You can also copy the values and store them somewhere safe</v-card-subtitle>
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
    import EmailCrypto from "../crypto";

    export default {
        data() {
            return {
                pubKey: "",
                privKey: "",
                passPhrase: "",
                showOutput: false
            };
        },
        methods: {
            generateKey() {
                const key = EmailCrypto.generateKey(this.passPhrase);
                this.privKey = JSON.stringify(key);
                this.pubKey = EmailCrypto.pubKey(key);
                this.passPhrase = "";
                this.showOutput = true;
                localStorage.setItem("RSAKey",this.privKey)
            }
        },
    }
</script>