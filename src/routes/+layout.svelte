<script>
	import '../app.css';
	import '@fontsource/titillium-web';
	import '@fontsource/overpass';
	import { Toaster } from 'svelte-french-toast';
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
