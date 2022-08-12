// 导入组件，组件必须声明 name
import WinDropDownButton from "./WinDropDownButton.vue";

// 为组件提供 install 安装方法，供按需引入
WinDropDownButton.install = function (Vue) {
  Vue.component(WinDropDownButton.name, WinDropDownButton);
};

// 默认导出组件
export default WinDropDownButton;
