<template lang="pug">
.vue-layout(:class="layoutClasses")
	.vue-layout__overlay(@click="toggleSideNav")
	aside.vue-layout__sidenav
		.vue-layout__sidenav__logo
			slot(name="logo")
		slot(name="menu")
			b-menu
				template(v-for="item in menuItems")
					b-menu-list
						template(v-if="item.children")
							b-menu-item(:icon="item.icon" v-bind="item.props" animation="menu-item")
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
				slot(name="navbar-menu")
			.navbar-end
				slot(name="navbar-end")
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
.vue-layout__overlay {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 99;
	display: none;
	background-color: rgba(0, 0, 0, 0.2);
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
	/deep/ {
		.menu-list {
			line-height: 2rem;
			a.is-active {
				background-color: rgba(0, 0, 0, 0.2);
				color: #4a4a4a;
			}
		}
		.menu-item-enter-active,
		.menu-item-leave-active {
			transition: max-height 0.15s;
			overflow: hidden;
		}
		.menu-item-enter,
		.menu-item-leave-active {
			max-height: 0;
		}
		.menu-item-leave,
		.menu-item-enter-active {
			max-height: 128px;
		}
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
		.vue-layout__overlay {
			display: block;
		}
	}
	.vue-layout__sidenav {
		box-shadow: 2px 0 4px 2px rgba(0, 0, 0, 0.1);
		transition: left 0.15s;
		left: -$layout-width - 8px;
	}
	.vue-layout__main {
		padding-left: 0;
	}
}
</style>


