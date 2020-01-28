<template>


    <v-card
    >
        <v-toolbar
                color="pink"
                dark
        >

            <v-toolbar-title>Sent Mail</v-toolbar-title>

            <v-spacer></v-spacer>


        </v-toolbar>

        <v-list two-line>
            <v-list-item-group
                    active-class="primary--text"
            >
                <v-layout  v-if="items.length == 0" class="headline grey--text my-12" justify-space-around><div><v-icon class="pa-0" color="grey" large>mdi-emoticon-sad-outline</v-icon>No Sent Mail</div></v-layout>
                <template v-for="(item, index) in items">

                    <v-list-item :key="item.ID">
                        <template v-slot:default="{  }">
                            <v-dialog v-model="dialog"  max-width="500">
                                <template v-slot:activator="{ on }">
                                    <v-list-item-content v-on="on">
                                        <v-list-item-title >Recipient PubKey ID:<strong> {{pubKeyId(item.recipient)}} </strong></v-list-item-title>
                                        <v-list-item-subtitle >Email ID: {{item.ID}}</v-list-item-subtitle>
                                    </v-list-item-content>

                                </template>
                                <v-card>
                                    <v-card-title class="headline">Mail Info</v-card-title>
                                    <v-card-text>
                                        <p>Email ID:<strong> {{item.ID}}</strong></p>
                                        <p>Recipient PubKey ID:<strong> {{pubKeyId(item.recipient)}} </strong></p>
                                        <p>Recipient PubKey:<strong> {{item.recipient}} </strong></p>
                                    </v-card-text>
                                </v-card>
                            </v-dialog>

                        </template>
                    </v-list-item>

                    <v-divider
                            v-if="index + 1 < items.length"
                            :key="index"
                    ></v-divider>
                </template>
            </v-list-item-group>
        </v-list>
    </v-card>
</template>
<script>
    import EmailRepo from "../api/email.api";
    import EmailCrypto from "../crypto";
    export default {

        async mounted() {
            const pubKey = localStorage.getItem("pubKey");
            const payload = {
                pubkey: pubKey
            };
            const result = await EmailRepo.sent(payload);
            if (result.data) {
                this.items = result.data.mailBox;
            }
        },
        data: () => ({
            dialog:false,
            items: [
            ],
        }),
        methods: {
          pubKeyId(pubkey){
            return EmailCrypto.pubKeyID(pubkey);
          }
        }
    }
</script>
