<script>
	import '@fontsource/titillium-web';
	import '@fontsource/overpass';
</script>

<div
	class="bgblur backdrop-blur-md px-3 py-3 mx-auto sm:px-4 w-11/12 md:w-10/12 bg-red-300 text-white rounded-xl md:rounded-2xl"
>
	<div class="title tracking-wider md:tracking-widest pl-2 text-iron-300 pb-10">
		NGT : NOPAL GAK TAU
	</div>

	<div class="mb-2.5">
		<label
			for="large-input"
			class="block tracking-wide text-center mb-5 text-4xl md:text-[48px] font-extrabold text-gray-900 dark:text-bunker-100"
			>Tell me something</label
		>
		<form action="POST">
			<textarea
				id="large-input"
				rows="3"
				placeholder="tell here"
				class="block w-11/12 md:w-7/12 mx-auto p-4 text-gray-900 border text-center md:text-lg border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-red-500 focus:border-red-500 dark:bg-bunker-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
			/>
			<button
				type="submit"
				class="ngt_submit text-iron-200 bg-red-800 hover:bg-red-700 block w-11/12 md:w-7/12 mt-3 mb-8 uppercase mx-auto rounded-lg py-3 tracking-wide"
				>Submit
			</button>
		</form>
		<p class="ml-auto text-xs text-gray-500 dark:text-gray-400">
			Inspired by <a href="https://ngl.link" class="text-red-600 dark:text-red-500 hover:underline"
				>ngl.link</a
			>. Your detail will not be shared with me.
		</p>
	</div>
</div>

<style>
	.bgblur {
		background: rgba(22, 38, 41, 0.45);
	}
	.title {
		font-family: 'Titillium Web', sans-serif;
		font-weight: 400;
	}
	.ngt_submit {
		font-family: 'OverpassVariable', sans-serif;
		font-weight: 600;
	}
</style>
