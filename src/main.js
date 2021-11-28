import Vue from 'vue'
import App from './App.vue'
import TodoList from "@/components/TodoList";

/**
 * 全局注册组件
 */
Vue.component('todo-list',TodoList)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
