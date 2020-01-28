<template>
  <v-card
    max-width="800"
    class="mx-auto mt-9"
  >
<v-card-text>
        <v-text-field v-model="to" label="To:" ></v-text-field>

</v-card-text>
    <v-card-text>
            <v-text-field  outlined v-model="subject" label="Subject" ></v-text-field>

    <v-textarea v-model="message"
      outlined
      label="message"
      auto-grow
    ></v-textarea></v-card-text>
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

    export default {
        data() {
            return {
                to: "",
                subject: "",
                message: "",
            };
        },
        methods: {
            sendMail() {
                const key =  EmailCrypto.generateKey(localStorage.getItem("RSAKey"));
                const mail = {
                    subject: this.subject,
                    message: this.message
                };
               let encryption = EmailCrypto.encrypt(JSON.stringify(mail),this.to,key);
               const payload = {
                    sender:key.pu
               }

            }
        },
    }
</script>
