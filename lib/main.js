// lib/main.js
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import DatePicker from '~/pages/example/datePicker.vue'
import MyElDatePicker from '~/pages/example/myElDatePicker.vue'
import Frustum from '~/pages/example/frustum.vue'

const components = {
  DatePicker,
  MyElDatePicker,
  Frustum,
};

// 安装方法
function install(app) {
  for (const componentKey in components) {
    app.component(componentKey, components[componentKey]);
  }
}

// 默认导出
export {
  DatePicker,
  MyElDatePicker,
  Frustum,
  install
};