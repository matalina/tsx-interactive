import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VueEvents from 'vue-events';
import Vuex from 'vuex'

import Game from './components/game';
import Timer from './components/timer'

Vue.use(BootstrapVue);
Vue.use(VueEvents);
Vue.use(Vuex);

import store from './store';


const app = new Vue({
    el: '#app',
    store,
    components: {
        Game,
        Timer,
    }
});