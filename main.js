import 'normalize.css';
import Vue from 'vue';
import store from './store/index.js';
import App from './components/App.vue';

new Vue({
	el: '#app',
	store,
	components: { 
		App: App 
	}
});
store.dispatch('getVoterList');
store.dispatch('getWinnerList');