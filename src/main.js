import { createApp } from 'vue';
import './assets/main.css';//引入tailwindcss
// 引入ElementPlus及其图标库
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
// 引入router
import router from './router';

// 引入App.vue
import App from './App.vue';



const app = createApp(App);

app.use(router)
// 注册elementPlus图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
// 注册elementPlus并配置中文语言
app.use(ElementPlus, {
    locale: zhCn,
});


app.mount('#app');

