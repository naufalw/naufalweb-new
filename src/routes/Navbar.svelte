<script>
	import '@fontsource/saira-stencil-one';
</script>

<nav
	class=" md:w-10/12 w-11/12 left-1/2 -translate-x-1/2 top-3 border-gray-200 px-2 sm:px-4 py-2.5 rounded-[22px] dark:bg-gray-900"
>
	<div class=" flex flex-wrap items-center justify-between ">
		<button
			data-collapse-toggle="navbar-cta"
			type="button"
			class=" order-0 inline-flex items-center p-2 text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
			aria-controls="navbar-cta"
			aria-expanded="false"
		>
			<span class="sr-only">Open main menu</span>
			<svg
				class="w-6 h-6"
				aria-hidden="true"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path
					fill-rule="evenodd"
					d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
					clip-rule="evenodd"
				/></svg
			>
		</button>

		<a href="/" class="flex items-center order-1">
			<span class="naufalw self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
				>Naufalw.</span
			>
		</a>
		<div class="flex order-2">
			<button
				type="button"
				class="text-white px-8 bg-red-800 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
				>NGT</button
			>
		</div>
	</div>
</nav>

<!-- <nav class="fixed text-white w-10/12 top-5 -translate-x-1/2 left-1/2">aokwo</nav> -->
<style>
	.naufalw {
		font-family: 'Saira Stencil One', sans-serif;
		color: aquamarine;
	}
	nav {
		position: fixed;
		background: rgba(22, 38, 41, 0.45);
		backdrop-filter: blur(7px);
		/* Note: backdrop-filter has minimal browser support */

		border-radius: 22px;
	}
</style>
