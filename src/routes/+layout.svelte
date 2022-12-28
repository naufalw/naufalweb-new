<script>
	import '../app.css';
	import Navbar from './Navbar.svelte';
</script>

<header><Navbar /></header>

<slot><!-- optional fallback --></slot>

<footer class="text-white">Copyright 2022 Naufal Wiwit</footer>

<style>
	:global(body) {
		background-image: url('/bg.webp');
		background-position: center;
		background-attachment: fixed;
		background-repeat: no-repeat;
		background-size: cover;
	}
	footer {
		text-align: center;
	}
	/* your styles go here */
</style>
