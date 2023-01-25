<script>
	import Title from '$lib/components/PageTitle.svelte';
	export const prerender = true;
	import '@fontsource/titillium-web/700.css';
	import Book from '$lib/components/econ/Book.svelte';
	import mankiw from '$lib/assets/books/mankiw.webp';
	import prathama from '$lib/assets/books/pie_prathama.webp';
</script>

<svelte:head>
	<title>Econ Olymp | Naufalw.</title>
</svelte:head>

<Title title="econ olymp" />
<div class="pl-2 pb-2">
	<div class=" pb-3">
		<h1 class=" text-[#DDDDDD] text-2xl">Books</h1>
		<div class="flex h-52 sm:h-64 md:h-72 overflow-x-auto shrink-0 gap-3 px-1 py-1">
			<Book
				title="Pengantar Ilmu Ekonomi (by Prathama Rahardja)"
				link="https://penerbitsalemba.com/buku/04-0082-pengantar-ilmu-ekonomi-edisi-4"
				imgSource={prathama}
			/>

			<Book
				title="Principles of Economics (by N. Gregory Mankiw)"
				link="https://www.tokopedia.com/lapakwagino/principles-of-economics-n-gregory-mankiw"
				imgSource={mankiw}
			/>
		</div>
	</div>

	<h1 class=" text-[#DDDDDD] text-2xl">Articles</h1>
</div>

<style>
	h1 {
		text-transform: uppercase;
		letter-spacing: 0.08em;
		font-family: 'Titillium Web', sans-serif;
		font-weight: 700;
	}
</style>
