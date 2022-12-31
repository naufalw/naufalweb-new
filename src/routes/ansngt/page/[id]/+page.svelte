<script>
	export let data;
	const { result, maxPage, currentPage } = data.ngt;
</script>

<div class="text-white container text-4xl mt-4 text-center mx-auto ">Max Page : {maxPage}</div>

<div class="text-white container mx-auto grid sm:grid-cols-2 mt-5 gap-x-7 gap-y-4">
	{#each result as ngt, i}
		<a href={'../id/' + ngt._id}
			><button class="bg-red-800 py-2 rounded-md text-center w-full" type="submit"
				>{i + 1}. {ngt.sambatan}</button
			></a
		>
	{/each}
</div>

<div class="mx-auto container ">
	<div class="mx-auto px-auto mt-3">
		{#if currentPage > 1}
			<a
				href="${currentPage - 1}"
				class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
			>
				Previous
			</a>
		{/if}
		<!-- Next Button -->
		{#if currentPage < maxPage}
			<a
				href={currentPage + 1}
				class="inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
			>
				Next
			</a>
		{/if}
	</div>
	<!-- Previous Button -->
</div>
