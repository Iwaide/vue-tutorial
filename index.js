// var app = new Vue({ 
//   el: '#app',
//   data: {
//       message: 'Hello Vue!'
//   }
// });
var app = new Vue({ 
  el: '#app',
  data: {
    message: 'hogehoge'
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('')
    }
  }
});
