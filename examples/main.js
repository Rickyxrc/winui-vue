import { createApp } from "vue";
import App from "./App.vue";

// 导入组件库
// import WinButton from "../packages/WinButton";
// import {WinUI} from '../packages';
import "../packages/themes/light.scss";

const app = createApp(App);
// app.use(WinButton);
// app.use(WinUI);
app.mount("#app");

// 注册组件库
// Vue.use(WinButton);

// Vue.config.productionTip = false

// new Vue({
//   render: (h) => h(App),
// }).$mount("#app");
