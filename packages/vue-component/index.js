// 导入组件，组件必须声明 name
import VueComponent from "./index.vue";

// 为组件提供 install 安装方法，供按需引入
VueComponent.install = function(Vue) {
  Vue.component(VueComponent.name, VueComponent);
};

// 默认导出组件
export default VueComponent;
