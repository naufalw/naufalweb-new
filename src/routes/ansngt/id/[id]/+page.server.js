import { altogic } from '../../../../../configs/altogic';
/** @type {import('./$types').PageServerLoad} */
export const load = async ({ params }) => {
	const { data } = await altogic.endpoint.get('/ngt/' + params.id);
	return {
		sambat: data.sambatan
	};
};
