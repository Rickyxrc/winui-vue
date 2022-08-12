// 导入组件，组件必须声明 name
import WinDivider from "./WinDivider.vue";

// 为组件提供 install 安装方法，供按需引入
WinDivider.install = function (Vue) {
  Vue.component(WinDivider.name, WinDivider);
};

// 默认导出组件
export default WinDivider;
