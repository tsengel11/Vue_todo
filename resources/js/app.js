require('./bootstrap');

import Vue from 'vue'
import App from './vue/app'
import vuetify from './plugins/vuetify'

const app = new Vue({
    el:'#app',
    vuetify,
    components:{App}
});