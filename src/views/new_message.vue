<template>

    <v-card
            max-width="800"
            class="mx-auto mt-9"
    >
        <v-snackbar
                color="error"
                top
                v-model="snackbar"
                :timeout=2000
        >
            {{ errorText }}
        </v-snackbar>
        <v-card-text>
            <v-text-field v-model="to" label="To:"></v-text-field>

        </v-card-text>
        <v-card-text>
            <v-text-field outlined v-model="subject" label="Subject"></v-text-field>

            <v-textarea v-model="message"
                        outlined
                        label="message"
                        auto-grow
            ></v-textarea>
        </v-card-text>
        <v-card-actions>
            <v-btn
                    class="primary"
                    color="deep-purple accent-4"
                    @click="sendMail"

            >
                Send
            </v-btn>
        </v-card-actions>
    </v-card>
</template>
<script>
    import EmailCrypto from "../crypto";
    import EmailRepo from "../api/email.api";

    export default {
        data() {
            return {
                to: "",
                subject: "",
                message: "",
                errorText: "",
                snackbar: false
            };
        },
        methods: {
            async sendMail() {
                const key = EmailCrypto.generateKey(localStorage.getItem("RSAKey"));
                const mail = {
                    subject: this.subject,
                    message: this.message
                };
                const msg = JSON.stringify(mail)
                const encryption = EmailCrypto.encrypt(msg, this.to, key);
                if (encryption.status === "success") {
                    const payload = {
                        sender: EmailCrypto.pubKey(key),
                        recipient: this.to,
                        message: encryption.cipher
                    };
                    const result = await EmailRepo.add(payload);
                    if(result.data){

                    }
                } else {
                    this.errorText = encryption.status;
                    this.snackbar = true;
                }
            }
        },
    }
</script>
