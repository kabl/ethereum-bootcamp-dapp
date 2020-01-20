<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    <v-toolbar-title>DApp Demo</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <Init/>
      <Input/>
      <Events/>
    </v-content>
  </v-app>
</template>

<script>
import Init from './components/Init';
import Input from './components/Input';
import Events from './components/Events';

export default {
  name: 'App',

  components: {
    Init,
    Input,
    Events
  },

  data: () => ({
    //
  }),
};
</script>
