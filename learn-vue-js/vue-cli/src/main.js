import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// App 이라는 컴포넌트의 내용을 다른 파일에서 불러와서 (App)에 넣어두고 렌더링 함

new Vue({
  render: h => h(App),

}).$mount('#app')

// 위의 코드와 동일
// new Vue({
//   el: '#app',
//   render: h => h(App)  
// })
