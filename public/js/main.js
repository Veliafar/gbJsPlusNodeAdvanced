const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
  el: '#app',
  data() {
    return {
      isDataError: false
    }
  },
  components: {
    products, search, headerComp, footerComp
  },
  methods: {
    getJson(url) {
      return fetch(`${API_URL}${url}`)
        .then((json) => json.json())
        .catch((err) => {
          console.error(err);
          this.isDataError = true;
        });
    },
  }
})


