<script>
	export let title;
	export let href;
</script>

<a {href}
	><div
		class="menu pt-4 md:pt-9 border border-gray-800/[.2] bg-gray-600/[.13] md:max-w-[24rem] hover:bg-gray-600/[.5] backdrop-blur rounded-br-[17px] rounded-bl-[17px] rounded-xl"
	>
		<div class="md:pb-3.5"><slot><!-- optional fallback --></slot></div>

		<h3
			class=" uppercase tracking-widest font-extrabold md:text-lg text-center py-2 bg-red-800 rounded-br-[17px] rounded-bl-[17px]"
		>
			{title}
		</h3>
	</div></a
>

<style>
	h3 {
		font-family: 'Titillium Web', sans-serif;
		font-weight: 800;
	}
</style>
