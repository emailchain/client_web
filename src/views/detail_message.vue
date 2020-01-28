<template>
    <v-card flat
    >
      <v-card-title>ID: {{this.ID}}</v-card-title>
        <v-card-text>
            <p class="display-1 text--primary">
               <v-icon  v-if="verified" color="green" large>mdi-checkbox-marked-circle</v-icon> {{this.subject}}
            </p>
            <p>Sender ID: {{this.senderID}}
                <v-btn @click="showSenderPubKey=showSenderPubKey?false:true" x-small
                       class="secondary"> {{showSenderPubKey?"hide public key":"show public key"}}
                </v-btn>
            </p>
            <p v-if="showSenderPubKey">Sender Public Key: {{this.sender}}</p>
            <div class="black--text subtitle-1">
                {{this.body}}
            </div>
        </v-card-text>
      <v-card-text>
        <v-btn @click="showRecipientPubKey=showRecipientPubKey?false:true" x-small
               class="secondary"> {{showRecipientPubKey?"hide recipient info":"show recipient info"}}
        </v-btn>
        <div v-if="showRecipientPubKey">
          <p>Recipient ID: {{this.recipientId}}</p>
          <p>Recipient Public Key: {{this.recipient}}</p>
        </div>
      </v-card-text>
    </v-card>
</template>

<script>
    import EmailCrypto from "../crypto";

    export default {
        props: {
            message: String,
            sender: String,
            recipient: String,
          ID:String

        },
        data: () => ({
            senderID: "",
            recipientId: "",
            subject: "",
            body: "",
            showSenderPubKey: false,
          showRecipientPubKey: false,
          verified:false

        }),
        mounted() {
          const key = EmailCrypto.generateKey(localStorage.getItem("RSAKey"));
          const decrypted = EmailCrypto.decrypt(this.message,key);
          this.senderID = EmailCrypto.pubKeyID(this.sender);
          this.recipientId = EmailCrypto.pubKeyID(this.recipient);
          if(decrypted.status ==="success"){
            this.verified = EmailCrypto.verify(decrypted.signature);
            const mail = JSON.parse(decrypted.plaintext);
            this.subject = mail.subject;
            this.body = mail.message;
            // eslint-disable-next-line no-console
            console.log(decrypted)
          }
        }
    }
</script>