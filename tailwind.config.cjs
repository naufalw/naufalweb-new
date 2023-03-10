/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	plugins: [require('flowbite/plugin')],
	theme: {
		colors: {
			red: '#9C452F',
			gray: {
				50: '#375F66',
				100: '#305359',
				200: '#29474D',
				300: '#254045',
				400: '#223B40',
				500: '#1D3236',
				600: '#162629',
				700: '#111D20',
				800: '#0C1618',
				900: '#0C1114'
			},
			white: '#F4F5F5'
		},
		extend: {
			colors: {
				bombay: {
					50: '#f8f8f8',
					100: '#f0f0f0',
					200: '#e4e4e4',
					300: '#d0d1d1',
					400: '#b3b4b5',
					500: '#989a9b',
					600: '#808182',
					700: '#696b6c',
					800: '#595a5b',
					900: '#4d4e4f'
				},
				iron: {
					50: '#f7f8f8',
					100: '#eeeff0',
					200: '#dbddde',
					300: '#babebf',
					400: '#949a9c',
					500: '#767d81',
					600: '#606669',
					700: '#4e5356',
					800: '#434749',
					900: '#3b3e3f'
				},
				bunker: {
					50: '#f5f7f8',
					100: '#ddeaea',
					200: '#bad3d5',
					300: '#8fb5b9',
					400: '#689299',
					500: '#4e767e',
					600: '#3d5d64',
					700: '#334d52',
					800: '#2c3f43',
					900: '#171f21'
				}
			}
		}
	}
};
