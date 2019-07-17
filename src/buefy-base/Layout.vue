<template lang="pug">
.vue-layout
	aside.vue-layout__sidenav
		.vue-layout__sidenav__logo
			slot(name="logo")
		slot(name="menu")
			b-menu
				template(v-for="item in menuItems")
					b-menu-list
						template(v-if="item.children")
							b-menu-item(:icon="item.icon" v-bind="item.props")
								template(slot='label', slot-scope='props')
									| {{item.label}}
									b-icon.is-pulled-right(:icon="props.expanded ? 'menu-down' : 'menu-up'")
								template(v-for="subitem in item.children")
									template(v-if="subitem.children")
										b-menu-item(:icon="subitem.icon" v-bind="subitem.props")
											template(slot='label', slot-scope='props')
												| {{subitem.label}}
												b-icon.is-pulled-right(:icon="props.expanded ? 'menu-down' : 'menu-up'")
											template(v-for="subsubitem in subitem.children")
												b-menu-item(:label="subsubitem.label" v-bind="subsubitem.props")
									template(v-else)
										b-menu-item(:label="subitem.label" v-bind="subitem.props")
						template(v-else)
							b-menu-item(:icon="item.icon" :label="item.label" v-bind="item.props")


	.vue-layout__main
		.vue-layout__content
			slot
</template>
<script>
export default {
	props: {
		menuItems: Array,
	},
};
</script>
<style lang="scss" scoped>
.vue-layout {
	display: flex;
}
.vue-layout__sidenav {
	flex: 0 0 256px;
	.vue-layout__sidenav__logo {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 5rem;
	}
}
.vue-layout__main {
	flex: 1 1 0;
}
</style>


