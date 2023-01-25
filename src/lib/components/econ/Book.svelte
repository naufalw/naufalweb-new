<script lang="ts">
	export let link: string;
	export let title: string;
	export let imgSource: string;
</script>

<div class=" ">
	<a target="_blank" rel="noopener noreferrer" href={link}
		><img
			class=" object-center mx-auto hover:ring focus:ring-red-800 ring-red-700 rounded-lg h-full w-full object-cover"
			src={imgSource}
			alt={title}
			{title}
		/></a
	>
</div>
