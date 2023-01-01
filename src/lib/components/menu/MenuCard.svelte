<script lang="ts">
	export let title: string;
	export let href: string;
</script>

<a {href}
	><div
		class="menu pt-4 md:pt-9 border border-gray-800/[.2] bg-[#16262959] backdrop-blur-sm  md:max-w-[24rem] hover:bg-[#111D20]  rounded-br-[17px] rounded-bl-[17px] rounded-xl"
	>
		<div class="md:pb-3.5"><slot><!-- optional fallback --></slot></div>

		<h3
			class=" uppercase tracking-widest md:text-lg text-center py-2 bg-red-800 rounded-br-[17px] rounded-bl-[17px]"
		>
			{title}
		</h3>
	</div></a
>

<style>
	h3 {
		font-family: 'Titillium Web', sans-serif;
		font-weight: 900;
	}
</style>
