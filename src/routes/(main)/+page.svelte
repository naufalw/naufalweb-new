<script>
	import ProjectIcon from '$lib/components/menu/ProjectIcon.svelte';
	import BlogIcon from '$lib/components/menu/BlogIcon.svelte';
	import EconIcon from '$lib/components/menu/EconIcon.svelte';
	import BugIcon from '$lib/components/menu/BugIcon.svelte';
	import ContactsIcon from '$lib/components/menu/ContactsIcon.svelte';
	import AboutIcon from '$lib/components/menu/AboutIcon.svelte';
	import MenuCard from '$lib/components/menu/MenuCard.svelte';
</script>

<svelte:head>
	<title>Naufal's Personal Website | Naufalw.</title>
</svelte:head>

<div class="full">
	<h1 class="text-3xl sm:text-3xl md:text-4xl font-semibold text-white">Hello Bwang! Welkam</h1>
	<h2 class="text-md sm:text-base md:pt-1 md:text-lg ">to my personal website:)</h2>
	<div
		class="grid items-center justify-between  mx-auto grid-cols-1  sm:grid-cols-2 md:grid-cols-3 w-full gap-y-5 xl:gap-y-6 gap-2.5 pt-4 md:pt-6 "
	>
		<MenuCard title="Project" href="/project"><ProjectIcon /></MenuCard>
		<MenuCard title="Blog" href="/blog"><BlogIcon /></MenuCard>
		<MenuCard title="Econ Olymp" href="/econ"><EconIcon /></MenuCard>
		<MenuCard title="Bug Report" href="/report"><BugIcon /></MenuCard>
		<MenuCard title="Contacts" href="/contact"><ContactsIcon /></MenuCard>
		<MenuCard title="About Me" href="/about"><AboutIcon /></MenuCard>
	</div>
</div>

<style>
	h1 {
		font-family: 'Titillium Web', sans-serif;
	}
	h2 {
		font-family: 'OverpassVariable', sans-serif;
		color: rgba(219, 221, 222, 0.81);
	}
</style>
