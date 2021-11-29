import {
  create,
  NButton,
  NConfigProvider,
  NGlobalStyle,
  NCard,
  NInput,
  NColorPicker,
  NInputNumber,
  NSpace,
  NH1,
  NForm,
  NFormItem,
  NTimePicker,
  NText,
  NIcon,
  NSwitch,
  NCollapseTransition,
  NGrid,
  NGridItem,
  NPopconfirm,
  NSlider,
  NCollapse,
  NCollapseItem,
  NProgress,
  NAutoComplete,
  NSelect,
  NUpload,
} from 'naive-ui';

const components = [
  NUpload,
  NSelect,
  NAutoComplete,
  NProgress,
  NCollapse,
  NCollapseItem,
  NSlider,
  NPopconfirm,
  NGrid,
  NGridItem,
  NButton,
  NConfigProvider,
  NGlobalStyle,
  NCard,
  NInput,
  NColorPicker,
  NInputNumber,
  NSpace,
  NH1,
  NForm,
  NFormItem,
  NTimePicker,
  NText,
  NIcon,
  NSwitch,
  NCollapseTransition,
];

export const naive = create({ components });
