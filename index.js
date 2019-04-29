// var app = new Vue({ 
//   el: '#app',
//   data: {
//       message: 'Hello Vue!'
//   }
// });
Vue.component('todo-item', {
  template: '<li>This is a todo</li>'
})
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
