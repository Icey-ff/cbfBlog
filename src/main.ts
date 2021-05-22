import { createApp } from 'vue'
import '@/style/_variables.scss';

import {
  ElButton, ElInput, ElIcon, ElAside,
  ElHeader, ElContainer, ElMain, ElAvatar, ElDivider, ElTag, ElCard, ElPagination,
  ElTimeline, ElTimelineItem, ElBadge, ElDialog, ElForm, ElFormItem, ElPopover,
  ElBacktop, ElRate, ElRow, ElCol, ElDropdown, ElDropdownMenu, ElDropdownItem
} from 'element-plus';
// import ElementPlus from 'element-plus';
import App from './App.vue'
import router from './router'
// import store from './store'
import 'highlight.js/styles/monokai.css';
// import 'element-plus/lib/theme-chalk/display.css';
const app = createApp(App);
app.component(ElButton.name, ElButton);
app.component(ElInput.name, ElInput);
app.component(ElIcon.name, ElIcon);
app.component(ElAside.name, ElAside);
app.component(ElHeader.name, ElHeader);
app.component(ElContainer.name, ElContainer);
app.component(ElMain.name, ElMain);
app.component(ElAvatar.name, ElAvatar);
app.component(ElDivider.name, ElDivider);
app.component(ElTag.name, ElTag);
app.component(ElCard.name, ElCard);
app.component(ElPagination.name, ElPagination);
app.component(ElTimeline.name, ElTimeline);
app.component(ElTimelineItem.name, ElTimelineItem);
app.component(ElBadge.name, ElBadge);
app.component(ElDialog.name, ElDialog);
app.component(ElForm.name, ElForm);
app.component(ElFormItem.name, ElFormItem);
app.component(ElPopover.name, ElPopover);
app.component(ElBacktop.name, ElBacktop)
app.component(ElRate.name, ElRate);
app.component(ElRow.name, ElRow);
app.component(ElCol.name, ElCol);
app.component(ElDropdown.name, ElDropdown);
app.component(ElDropdownMenu.name, ElDropdownMenu);
app.component(ElDropdownItem.name, ElDropdownItem);
app.use(router).mount('#app')
// .use(store).use(ElementPlus)

