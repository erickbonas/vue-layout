<template lang="pug">
.vue-layout(:class="layoutClasses")
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
		nav.navbar.vue-layout__navbar
			.navbar-brand
				<a @click="toggleSideNav" role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
					<span aria-hidden="true"></span>
				</a>
			.navbar-menu
			.navbar-end
		.vue-layout__content
			slot
</template>
<script>
export default {
	props: {
		menuItems: Array,
	},
	data() {
		return {
			sidenavActive: false,
		};
	},
	computed: {
		layoutClasses() {
			return {
				'is-sidenav-active': this.sidenavActive,
			};
		},
	},
	methods: {
		toggleSideNav() {
			this.sidenavActive = !this.sidenavActive;
		},
	},
};
</script>
<style lang="scss" scoped>
@import 'sass-mq';
$layout-width: 256px;
.vue-layout {
}
.vue-layout__sidenav {
	position: fixed;
	overflow-y: auto;
	z-index: 100;
	left: 0;
	top: 0;
	bottom: 0;
	width: $layout-width;
	.vue-layout__sidenav__logo {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 5rem;
	}
}
.vue-layout__main {
	width: 100%;
	padding-left: $layout-width;
}
.vue-layout__navbar {
	.navbar-burger {
		margin-left: 0;
	}
}

@include mq($until: desktop) {
	.vue-layout.is-sidenav-active {
		.vue-layout__sidenav {
			left: 0;
		}
	}
	.vue-layout__sidenav {
		left: -$layout-width;
	}
	.vue-layout__main {
		padding-left: 0;
	}
}
</style>


