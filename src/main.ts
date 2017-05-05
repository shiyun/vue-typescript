import * as Vue from 'vue';
import VueRouter from 'vue-router';

import { HomeComponent } from './components/home';
import { AboutComponent } from './components/about';
import { ListComponent } from './components/list';
import { NavbarComponent } from './components/navbar';
// import { TabComponent } from './components/comps/tab';

// register the plugin
Vue.use(VueRouter);

let router = new VueRouter({
  routes: [
    { path: '/', component: HomeComponent },
    { path: '/about', component: AboutComponent },
    { path: '/list', component: ListComponent },
    { path: '*', component: HomeComponent },
    // { path: '/tab', component: TabComponent },
  ]
});

new Vue({
  el: '#app-main',
  router: router,
  components: {
    'navbar': NavbarComponent
  }
});
