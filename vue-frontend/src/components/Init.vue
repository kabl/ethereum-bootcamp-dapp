<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="8">
          <v-text-field v-model="contractAddress" label="Contract Address" placeholder="0x..."></v-text-field>
        </v-col>

        <v-col cols="4">
          <div class="my-2">
            <v-btn v-on:click="init" color="info">Init</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import blockchain from "../js/blockchain";

//0xd21b49D91D761c2AAb403b7ae23Bbe3F91941c6E
export default {
  name: "Init",
  data() {
    return {
      contractAddress: "0xd21b49D91D761c2AAb403b7ae23Bbe3F91941c6E"
    };
  },
  methods: {
    async init() {
      console.log("init");
      blockchain.init(this.contractAddress);
    }
  }
};
</script>
