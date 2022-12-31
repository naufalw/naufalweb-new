<script>
	import '@fontsource/saira-stencil-one';
	import '@fontsource/overpass';
	let showDropdown = false;

	const changeDropdown = () => {
		showDropdown = !showDropdown;
	};
</script>

<nav
	class="md:w-10/12 w-11/12 left-1/2 -translate-x-1/2 top-3  pl-2 pr-2 sm:px-4 pt-2 pb-2 rounded-2xl md:rounded-2xl  backdrop-blur"
>
	<div class=" flex flex-wrap items-center justify-between ">
		<button
			data-collapse-toggle="navbar-cta"
			type="button"
			class=" order-0 inline-flex align-middle pt-2 items-center p-2 text-sm dark:text-gray-300 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  dark:hover:bg-gray-700 dark:focus:ring-gray-600"
			aria-controls="navbar-cta"
			aria-expanded="false"
			on:click={changeDropdown}
		>
			<span class="sr-only">Open main menu</span>
			<svg
				class="w-5 h-5 md:w-6 md:h-6"
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
			<span
				class="naufalw self-center align-middle pt-1/2 text-center text-xl md:text-2xl font-semibold whitespace-nowrap dark:text-white"
			>
				Naufalw.</span
			>
		</a>
		<div class="flex order-2">
			<a href="/ngt"
				><button
					type="button"
					class="ngt text-iron-100  font-semibold md:font-bold  px-5 md:px-8 dark:bg-red-800 dark:hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-900  rounded-lg text-sm md:text-base py-2 text-center mr-0"
				>
					NGT</button
				></a
			>
		</div>
	</div>
	{#if showDropdown}
		<div
			class=" ddown fixed font-normal mt-3.5 bg-white divide-y divide-gray-100 rounded-xl w-44 dark:bg-gray-800 dark:divide-gray-700"
		>
			<ul
				class="pt-3.5 text-sm text-gray-700 dark:text-gray-400 "
				aria-labelledby="dropdownLargeButton"
			>
				<li>
					<a
						href="/"
						class="block px-4 py-2 hover:bg-red-100 dark:hover:bg-red-700 dark:hover:text-white "
						>Home</a
					>
				</li>
				<li>
					<a
						href="/project"
						class="block px-4 py-2 hover:bg-red-100 dark:hover:bg-red-700 dark:hover:text-white "
						>Project</a
					>
				</li>
				<li>
					<a
						href="/blog"
						class="block px-4 py-2 hover:bg-red-100 dark:hover:bg-red-700 dark:hover:text-white"
						>Blog</a
					>
				</li>
				<li>
					<a
						href="/econ"
						class="block px-4 py-2 hover:bg-red-100 dark:hover:bg-red-700 dark:hover:text-white"
						>Econ Olymp</a
					>
				</li>

				<li>
					<a
						href="/contact"
						class="block px-4 py-2 hover:bg-red-100 dark:hover:bg-red-700 dark:hover:text-white"
						>Contact</a
					>
				</li>
			</ul>
			<div class="pt-1 pb-3.5">
				<a
					href="/about"
					class="block px-4 py-2 text-sm text-gray-700 hover:bg-red-100 dark:hover:bg-red-700 dark:text-gray-400 dark:hover:text-white"
					>About me</a
				>
			</div>
		</div>
	{/if}
</nav>

<style>
	.naufalw {
		font-family: 'Saira Stencil One', sans-serif;
		color: rgba(255, 255, 255, 0.85);
		text-align: center;
	}
	.ngt {
		font-family: 'OverpassVariable', sans-serif;
	}
	.ddown {
		z-index: 200;
		background: rgba(22, 38, 41, 1);
	}
	nav {
		position: fixed;
		z-index: 1;
		background: rgba(22, 38, 41, 0.6);
		/* Note: backdrop-filter has minimal browser support */
	}
</style>
