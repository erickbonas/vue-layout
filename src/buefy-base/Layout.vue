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
			p Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss deixa as pessoas mais interessantis. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Quem num gosta di mim que vai caçá sua turmis! Interagi no mé, cursus quis, vehicula ac nisi.
			p Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Leite de capivaris, leite de mula manquis sem cabeça. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.
			p A ordem dos tratores não altera o pão duris. Quem num gosta di mé, boa gentis num é. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Mé faiz elementum girarzis, nisi eros vermeio.
			p Delegadis gente finis, bibendum egestas augue arcu ut est. Quem manda na minha terra sou euzis! Atirei o pau no gatis, per gatis num morreus. Diuretics paradis num copo é motivis de denguis.
			p Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Detraxit consequat et quo num tendi nada. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose.
			p Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum. Casamentiss faiz malandris se pirulitá. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.
			p Viva Forevis aptent taciti sociosqu ad litora torquent. Copo furadis é disculpa de bebadis, arcu quam euismod magna. In elementis mé pra quem é amistosis quis leo. Pra lá , depois divoltis porris, paradis.
			p Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Aenean aliquam molestie leo, vitae iaculis nisl.
			p Manduma pindureta quium dia nois paga. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Cevadis im ampola pa arma uma pindureta. Sapien in monti palavris qui num significa nadis i pareci latim.
			p Paisis, filhis, espiritis santis. Si num tem leite então bota uma pinga aí cumpadi! Per aumento de cachacis, eu reclamis. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio.
			p Quem manda na minha terra sou euzis! Paisis, filhis, espiritis santis. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.
			p Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Mé faiz elementum girarzis, nisi eros vermeio. In elementis mé pra quem é amistosis quis leo.
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


