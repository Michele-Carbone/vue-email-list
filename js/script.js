console.log('Vue', Vue);

Vue.config.devtools = true;

const app = new Vue({
  el: '#app',
  data: {
    usersMail: [],
  },
  computed: {
    sortedMails() {
      return this.usersMail.sort();
    },
  },
  methods: {

  },

  created() {
    for (let i = 0; i < 10; i++) {
      axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((res) => {
          // runs in case of success
          const mail = res.data.response;
          this.usersMail.push(mail);
        })
    }
  },
});
