<script>
	import '../app.css';
	import Navbar from './Navbar.svelte';
	import '@fontsource/overpass';
</script>

<header><Navbar /></header>

<main class="pt-20">
	<slot><!-- optional fallback --></slot>
</main>

<footer class="text-bombay-400">Copyright © 2022 Naufal Wiwit</footer>

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
	}
	/* your styles go here */
</style>
