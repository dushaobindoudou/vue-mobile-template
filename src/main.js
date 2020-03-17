import Vue from 'vue';
import '@common/css/index.scss';
import router from '@router';
import PageContainer from '@components/page/container.vue';

import {
  Tab, Tabs, List, PullRefresh, Button, Dialog, Locale,
} from 'vant';

import enUS from 'vant/lib/locale/lang/en-US';

import App from './App.vue';

import store from './store';

Locale.use('en-US', enUS);

Vue.use(Tab);
Vue.use(Tabs);
Vue.use(List);
Vue.use(PullRefresh);
Vue.use(Button);
Vue.use(Dialog);

Vue.component(PageContainer.name, PageContainer);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
