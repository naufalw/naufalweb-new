<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import NProgress from 'nprogress';
	import { navigating } from '$app/stores';

	// NProgress css
	import '$lib/nprogress.css';

	NProgress.configure({
		// Full list: https://github.com/rstacruz/nprogress#configuration
		minimum: 0.16
	});

	$: {
		if ($navigating) {
			NProgress.start();
		}
		if (!$navigating) {
			NProgress.done();
		}
	}
</script>

<header><Navbar /></header>
<main class="pt-[75px] md:pt-20">
	<div
		class="bgblur backdrop-blur-md px-3 py-3 mx-auto sm:px-4 w-11/12 md:w-10/12  text-white rounded-xl md:rounded-2xl"
	>
		<slot />
	</div>
</main>
<footer class="text-bombay-400 text-sm mb-4 pt-5">Copyright © 2022 Naufal Wiwit</footer>

<style>
	.bgblur {
		background: rgba(22, 38, 41, 0.45);
	}
	footer {
		text-align: center;
		font-family: 'Overpass', sans-serif;
		font-weight: 300;
	}
</style>
