// 导入组件，组件必须声明 name
import WinContent from "./WinContent.vue";

// 为组件提供 install 安装方法，供按需引入
WinContent.install = function (Vue) {
  Vue.component(WinContent.name, WinContent);
};

// 默认导出组件
export default WinContent;
