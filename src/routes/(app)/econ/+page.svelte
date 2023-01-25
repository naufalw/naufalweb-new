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
	<meta
		name="description"
		content="Bahan persiapan untuk OSN Ekonomi tingkat SMA. Bahan-bahan ini telah terbukti membantu saya meraih medali emas di OSN Ekonomi 2022 tingkat SMA"
	/>
</svelte:head>
<!-- h-48 sm:h-52 md:h-56 -->
<Title title="econ olymp" />
<div class="pl-2 pb-5">
	<div class="">
		<h1 class=" text-[#DDDDDD] text-2xl">Books</h1>
		<div class="flex h-[30vw] min-h-[180px] max-h-56 overflow-x-auto shrink-0 gap-3 px-1 py-1">
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
	<div class="h-3" />
	<div><h1 class=" text-[#DDDDDD] text-2xl">Articles</h1></div>
</div>

<style>
	h1 {
		text-transform: uppercase;
		letter-spacing: 0.08em;
		font-family: 'Titillium Web', sans-serif;
		font-weight: 700;
	}
</style>
