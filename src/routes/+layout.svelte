<script>
	import '../app.css';
	import '@fontsource/titillium-web';
	import '@fontsource/overpass/300.css';
	import '@fontsource/overpass/400.css';
	import { Toaster } from 'svelte-french-toast';
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

<Toaster />
<slot />

<style>
	:global(body) {
		background-color: black;
		background-image: url('/bg.webp');
		background-position: center;
		background-attachment: fixed;
		background-repeat: no-repeat;
		background-size: cover;
	}
</style>
