<script lang="ts">
	import type { PageData } from './$types';
	export const ssr = true;
	export let data: PageData;
	const { sambat } = data;
</script>

<div class=" px-8  ">
	<div
		class=" max-w-sm mx-auto my-[12vh] bg-white r border-gray-200 rounded-xl shadow-md  dark:bg-[#171F21] dark:border-gray-700 "
	>
		<h5
			class="titlengt  font-bold text-2xl py-2  rounded-lg text-center tracking-tight bg-red-700 text-gray-900 dark:text-white"
		>
			Tell me something
		</h5>
		<p class="sambatan  text-lg px-4 py-8 text-gray-700 dark:text-[#D8D8D8] text-center">
			{sambat}
		</p>
	</div>
</div>

<style>
	.titlengt {
		font-family: 'Overpass', sans-serif;
	}
	.sambatan {
		font-family: 'Titillium Web', sans-serif;
		font-weight: 400;
	}
</style>
