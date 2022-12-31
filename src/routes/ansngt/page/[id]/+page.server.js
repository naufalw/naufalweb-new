import { altogic } from '../../../../../configs/altogic';
/** @type {import('./$types').PageServerLoad} */
export const load = async ({ params }) => {
	const { data } = await altogic.endpoint.get('/ngt', {
		page: params.id,
		sort: 'updatedAt:desc'
	});
	return {
		ngt: {
			result: data.result,
			maxPage: data.countInfo.totalPages,
			currentPage: data.countInfo.currentPage
		}
	};
};
