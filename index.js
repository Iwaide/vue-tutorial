var app = new Vue({ 
  el: '#app',
  data: {
      message: 'Hello Vue!'
  }
});
app.message = 'I have data';

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'hoge' + new Date().toLocaleString()
  }
})