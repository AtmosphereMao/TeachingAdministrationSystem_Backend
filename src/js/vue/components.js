import Vue from 'vue';
import SubMenu from 'components/common/sub-menu';
import SearchFilter from 'components/common/search-filter';

Vue.component('SubMenu', SubMenu);
Vue.component('SearchFilter', SearchFilter);
Vue.component('MarkdownEditor', (resolve) => require(['components/common/markdown-editor'], resolve));
