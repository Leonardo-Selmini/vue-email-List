const app = new Vue({
  el: '#root',
  data: {
    mails: []
  },
  created() {
    for(let i = 0; i < 10; i++){
    // Make a request for a user with a given ID
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
      // handle success
        this.mails.push(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    }
  }
});