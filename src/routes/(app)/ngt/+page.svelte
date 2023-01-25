<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	export const prerender = true;
	import toast from 'svelte-french-toast';
	import Title from '$lib/components/PageTitle.svelte';
	let loading = false;
	const submitNGT: SubmitFunction = ({ form, data, action, cancel }) => {
		const { ngt } = Object.fromEntries(data);
		loading = true;

		if (ngt.length < 1) {
			toast.error('Fill the form wen?', { position: 'bottom-right' });
			cancel();
			loading = false;
		}
		return async ({ result, update }) => {
			loading = false;
			console.log('sampe return async');
			switch (result.type) {
				case 'success':
					toast.success('NGT submitted. Thanks', { position: 'bottom-right' });
					break;
				case 'failure':
					toast.error('Error!', { position: 'bottom-right' });
					break;
				default:
					break;
			}
			await update();
		};
	};
</script>

<svelte:head>
	<title>NGT: Nopal Gak Tau | Naufalw.</title>
</svelte:head>

<Title title="NGT: Nopal Gak Tau" />

<div class="mb-2.5">
	<form method="POST" action="?/create" use:enhance={submitNGT} on:submit={() => {}}>
		<label
			title=""
			for="ngt_form"
			class="block tracking-wide text-center mb-5 text-4xl md:text-[48px] font-extrabold text-gray-900 dark:text-bunker-100"
			>Tell me something</label
		>
		<textarea
			id="ngt_form"
			name="ngt"
			rows="3"
			placeholder="tell here"
			class="block w-11/12 md:w-7/12 mx-auto p-4 text-gray-900 border text-center md:text-lg border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-red-500 focus:border-red-500 dark:bg-bunker-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-iron-100 dark:focus:ring-red-500 dark:focus:border-red-500"
		/>
		<button
			disabled={loading}
			type="submit"
			title="Submit NGT"
			class=" ngt_submit object-center  text-iron-200 disabled:text-iron-300 disabled:bg-red-900 bg-red-800 hover:bg-red-700 block w-11/12 md:w-7/12 mt-3 mb-8 uppercase mx-auto rounded-lg pt-3 pb-2.5 tracking-wide"
		>
			{#if loading}
				<svg
					aria-hidden="true"
					role="status"
					class="inline  mb-1 mr-3 w-4 h-4 text-red-900 animate-spin "
					viewBox="0 0 100 101"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
						fill="#E5E7EB"
					/>
					<path
						d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
						fill="currentColor"
					/>
				</svg>{/if}Submit
		</button>
	</form>
	<p class="fnote ml-auto text-xs text-gray-500 dark:text-gray-400" title="">
		Inspired by <a
			href="https://ngl.link"
			title="ngl.link"
			class="text-red-600 dark:text-red-500 hover:underline">ngl.link</a
		>. Your detail will not be shared with me.
	</p>
</div>

<style>
	.ngt_submit {
		font-family: 'Overpass', sans-serif;
		font-weight: 600;
	}
	.fnote {
		font-family: 'Overpass', sans-serif;
	}
</style>
