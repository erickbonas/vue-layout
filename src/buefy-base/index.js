import Layout from './Layout.vue';

export default Layout;
export const Plugin = {
	install(vue) {
		vue.component('vue-layout', Layout);
	},
};
