import Vue from "vue";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.css";
import App from "./App.vue";
// GRAPHQL STUFF
import { /*VueCompositionApi,*/ provide } from "@vue/composition-api";
import { DefaultApolloClient } from "@vue/apollo-composable";
import ApolloClient from "apollo-boost";
import router from './router'

Vue.use(VueMaterial);
Vue.config.productionTip = false;

// client apollo client
const apolloClient = new ApolloClient({
  connectToDevTools: true,
  uri: "https://heny.app/graphql",
});

new Vue({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  router,
  render: (h) => h(App)
}).$mount("#app");
