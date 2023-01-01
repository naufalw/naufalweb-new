<script>
	import Navbar from '$lib/components/Navbar.svelte';
</script>

>
<header><Navbar /></header>
<main class="pt-[75px] md:pt-20">
	<div
		class="-md px-2 py-3 mx-auto sm:px-4 w-11/12 md:w-10/12  text-white rounded-xl md:rounded-2xl"
	>
		<slot />
	</div>
</main>
<footer class="text-bombay-400 pb-4 text-sm pt-5">Copyright © 2022 Naufal Wiwit</footer>

<style>
	footer {
		text-align: center;
		font-family: 'OverpassVariable', sans-serif;
		font-weight: 300;
	}
</style>
