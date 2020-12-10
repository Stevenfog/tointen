import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './assets/css/bootstrap.css'
import './assets/css/master.css'
import axios from "axios";
import firebase from "firebase/app";

Vue.prototype.$axios = axios;
Vue.config.productionTip = false

//firebase config
var firebaseConfig = {
  apiKey: "AIzaSyBYRYEHry2-_qWA1079c0KRjktJpSKpH0A",
  authDomain: "online-test-62774.firebaseapp.com",
  databaseURL: "https://online-test-62774.firebaseio.com",
  projectId: "online-test-62774",
  storageBucket: "online-test-62774.appspot.com",
  messagingSenderId: "47472155426",
  appId: "1:47472155426:web:8fd9c05a664a5d23b3e37b",
  measurementId: "G-712KW2YHXZ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
