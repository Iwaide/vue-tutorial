// var app = new Vue({ 
//   el: '#app',
//   data: {
//       message: 'Hello Vue!'
//   }
// });
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{todo.text}}</li>'
})
var app = new Vue({ 
  el: '#app',
  data: {
    message: 'hogehoge',
    gloceryList: [
      { id: 1, text: 'hoge' },
      { id: 2, text: 'fuga' },
      { id: 3, text: 'moge' },
    ]
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('')
    }
  }
});
