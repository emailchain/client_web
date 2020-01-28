<template>

    <v-card

    >
        <v-toolbar
                color="pink"
                dark

        >


            <v-toolbar-title>New Mail</v-toolbar-title>

            <v-spacer></v-spacer>


        </v-toolbar>
        <v-snackbar
                :color="snackbarColor"
                top
                v-model="snackbar"
                :timeout=4000
        >
            {{ snackbarMessage }}
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
                    color="primary"
                    @click="sendMail"

            >
                <v-icon dark left>mdi-send</v-icon>
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
                snackbarMessage: "",
                snackbarColor: "success",
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
                    if (result.data) {
                        this.snackbar = true;
                        this.snackbarMessage = result.data.message;
                        this.snackbarColor = "success";
                        this.to = "";
                        this.subject = "";
                        this.message = "";
                    }
                } else {
                    this.snackbar = true;
                    this.snackbarMessage = encryption.status;
                    this.snackbarColor = "error";
                }
            }
        },
    }
</script>
