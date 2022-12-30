<script>
	import '../app.css';
	import Navbar from './Navbar.svelte';
	import '@fontsource/titillium-web';
	import '@fontsource/overpass';
	import { Toaster } from 'svelte-french-toast';
</script>

<Toaster />
<header><Navbar /></header>

<main class="pt-[75px] md:pt-20">
	<slot />
</main>

<footer class="text-bombay-400 text-sm pt-5">Copyright © 2022 Naufal Wiwit</footer>

<style>
	:global(body) {
		background-color: black;
		background-image: url('/bg.webp');
		background-position: center;
		background-attachment: fixed;
		background-repeat: no-repeat;
		background-size: cover;
	}
	footer {
		text-align: center;
		font-family: 'OverpassVariable', sans-serif;
		font-weight: 300;
	}
	/* your styles go here */
</style>
