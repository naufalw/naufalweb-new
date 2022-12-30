<script>
	import naufal from '$lib/assets/naufal.webp';
</script>

<!-- text-xl sm:text-[30px] md:text-[56px] -->
<div
	class="bgblur backdrop-blur-md px-3 py-3 mx-auto sm:px-4 w-11/12 md:w-10/12 bg-red-300 text-white rounded-xl md:rounded-2xl"
>
	<div class="title uppercase tracking-wider md:tracking-widest pl-2 text-iron-300 pb-5 md:pb-10">
		About Me
	</div>

	<div class="flex flex-row  items-center w-11/12 justify-items-start ustify pl-2 ">
		<div><img class="w-[30vh] md:w-[40vh]" src={naufal} alt="foto nopal gemink" /></div>

		<div class="nama  flex-col  ml-4 md:ml-8   items-center">
			<div
				class="uppercase leading-none text-clip text-xl sm:text-[30px] md:text-[3.8vw] text-white tracking-wider"
			>
				Naufal Wiwit Putra
			</div>
			<div class="text-[14px] font-light pt-3 md:text-xl text-iron-200/[.81]">
				a 17 y.o. tech geek that loves economics and aerospace
			</div>
		</div>
	</div>
	<div class="ml-5 mt-5 mb-4 ">
		<ul class="list-inside list-disc leading-5 text-md md:text-lg">
			<li class="li_item text-iron-200">Was born in 2005</li>
			<li class="li_item text-iron-200">
				I'm currently majoring social science in MAN 2 Kota Malang
			</li>
			<li class="li_item text-iron-200">
				My passions are about:
				<ul class="ml-5 md:ml-6 list-disc list-inside">
					<li class="li_item text-iron-200">
						Coding, mainly app development both in web and mobile
					</li>
					<li class="li_item text-iron-200">
						Economics, mainly public policy and stock market investment
					</li>
					<li class="li_item text-iron-200">
						Aerospace, all about plane’s system and rocket propulsion and aerodynamics
					</li>
				</ul>
			</li>
		</ul>
	</div>
</div>

<style>
	.bgblur {
		background: rgba(22, 38, 41, 0.45);
	}
	.title {
		font-family: 'Titillium Web', sans-serif;
		font-weight: 400;
	}
	.nama {
		font-family: 'Titillium Web', sans-serif;
		font-weight: 700;
	}
	.li_item {
		font-family: 'OverpassVariable', sans-serif;
		font-weight: 300;
	}
</style>
