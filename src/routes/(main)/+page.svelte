<script>
	import project from '$lib/assets/menu/project.webp';
	import blog from '$lib/assets/menu/blog.webp';
	import econ from '$lib/assets/menu/econ.webp';
	import bug from '$lib/assets/menu/bug.webp';
	import contact from '$lib/assets/menu/contact.webp';
	import about from '$lib/assets/menu/about.webp';

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
		<MenuCard title="Project" href="/project" imgPath={project} />
		<MenuCard title="Blog" href="/blog" imgPath={blog} />
		<MenuCard title="Econ Olymp" href="/econ" imgPath={econ} />
		<MenuCard title="Bug Report" href="/report" imgPath={bug} />
		<MenuCard title="Contact" href="/contact" imgPath={contact} />
		<MenuCard title="About Me" href="/about" imgPath={about} />
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
