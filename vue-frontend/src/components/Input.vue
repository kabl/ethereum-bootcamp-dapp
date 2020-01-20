<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="8">
          <v-text-field v-model="message" label="Message" placeholder="Hello World"></v-text-field>
        </v-col>

        <v-col cols="4">
          <div class="my-2">
            <v-btn v-on:click="write" color="warn">Write</v-btn>
          </div>
          <div class="my-2">
            <v-btn v-on:click="read" color="info">Read</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import blockchain from "../js/blockchain";

export default {
  name: "Init",
  data() {
    return {
      message: "Hello World"
    };
  },
  methods: {
    async write() {
      console.log("write");
      blockchain.writeData(this.message);
    },
    async read() {
      console.log("read");
      this.message = await blockchain.readData();
    }
  }
};
</script>
