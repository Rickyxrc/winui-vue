// 导入组件，组件必须声明 name
import WinButton from "./WinButton.vue";

// 为组件提供 install 安装方法，供按需引入
WinButton.install = function (Vue) {
  Vue.component(WinButton.name, WinButton);
};

// 默认导出组件
export default WinButton;
