// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import filter from 'src/plugin/filter.js';

Vue.config.productionTip = false

//@TODO plugin的文件夹下所有文件,做成一个install的方式,直接用Vue.use来注册所有东西.
Vue.mixin({
    filters: filter
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
