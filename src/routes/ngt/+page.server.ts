import { fail } from '@sveltejs/kit';
import { altogic } from '../../../configs/altogic';

export const actions = {
	create: async ({ request }) => {
		try {
			const ngtData = await request.formData();
			const ngt = ngtData.get('ngt');
			if (ngt.length < 1) {
				return fail(400, {
					ngt,
					empty: true
				});
			}
			const { data } = await altogic.endpoint.post('/ngt', { sambatan: ngt });
			if (data) {
				return {
					success: true
				};
			}
		} catch {
			return fail(500, {
				errorMsg: 'cannot submit, server error'
			});
		}
	}
};
