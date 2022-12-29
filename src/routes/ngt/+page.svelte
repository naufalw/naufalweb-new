<script>
	import '@fontsource/titillium-web';
	import '@fontsource/overpass';
</script>

<div
	class="bgblur backdrop-blur-md px-3 py-3 mx-auto sm:px-4 w-11/12 md:w-10/12 bg-red-300 text-white rounded-xl md:rounded-2xl"
>
	<div class="title tracking-widest pl-2 pb-10">NGT : NOPAL GAK TAU</div>
	<div class="mb-6">
		<label
			for="large-input"
			class="block text-center uppercase mb-6 tracking-wider text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
			>Tell me something</label
		>
		<textarea
			id="large-input"
			rows="3"
			class="block w-10/12 md:w-8/12 mx-auto p-4 text-gray-900 border text-center md:text-lg border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-bunker-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
		/>
		<button
			type="submit"
			class="ngt_submit bg-red-800 hover:bg-red-700 block w-10/12 md:w-8/12 mt-3 uppercase mx-auto rounded-lg py-3 tracking-wide"
			>Submit
		</button>
	</div>
</div>

<style>
	.bgblur {
		background: rgba(22, 38, 41, 0.45);
	}
	.title {
		font-family: 'Titillium Web', sans-serif;
		font-weight: 600;
	}
	.ngt_submit {
		font-family: 'OverpassVariable', sans-serif;
		font-weight: 500;
	}
</style>
