<template>


    <v-card
    >
        <v-toolbar
                color="pink"
                dark
        >

            <v-toolbar-title>{{showMail?"Mail":"Inbox"}}</v-toolbar-title>

            <v-spacer></v-spacer>


        </v-toolbar>
      <detail_message v-if="showMail" :message="detailMessage" :recipient="detailRecipient" :sender="detailSender" :i-d="detailID"/>

        <v-list two-line v-if="!showMail">
            <v-list-item-group
                    active-class="primary--text"
            >
                <template v-for="(item, index) in items">
                    <v-list-item :key="item.ID">
                        <template v-slot:default="{  }">
                            <v-list-item-content @click="view(item)">
                              <v-list-item-title >Sender PubKey ID:<strong> {{pubKeyId(item.sender)}} </strong></v-list-item-title>
                              <v-list-item-subtitle >Email ID: {{item.ID}}</v-list-item-subtitle>
                            </v-list-item-content>
                        </template>
                    </v-list-item>

                    <v-divider
                            v-if="index + 1 < items.length"
                            :key="index"
                    ></v-divider>
                </template>
            </v-list-item-group>
        </v-list>
      <v-card-actions v-if="showMail">
        <v-btn color="primary" small @click="showMail=false">Back</v-btn>
      </v-card-actions>
    </v-card>
</template>
<script>
    import EmailRepo from "../api/email.api";
import EmailCrypto from "../crypto";
import detail_message from "./detail_message";
    export default {
      components:{
        detail_message
      },
        async mounted() {
            const pubKey = localStorage.getItem("pubKey");
            const payload = {
                pubkey: pubKey
            };
            const result = await EmailRepo.mailbox(payload);
            if (result.data) {
                this.items = result.data.mailBox;
            }
        },
        data: () => ({
          showMail:false,
          detailSender:"",
          detailRecipient:"",
          detailMessage:"",
          detailID:"",
            items: [
            ],
        }),
        methods: {
          view(item){
            this.showMail= true;
            this.detailSender = item.sender;
            this.detailRecipient=item.recipient;
            this.detailMessage=item.message;
            this.detailID=item.ID;
          },
          pubKeyId(pubkey){
            return EmailCrypto.pubKeyID(pubkey);
          }
        }
    }
</script>
