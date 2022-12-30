import { createClient } from 'altogic';
import { SECRET_ALTOGIC_ENV_URL, SECRET_ALTOGIC_CLIENT_KEY } from '$env/static/private';

export const altogic = createClient(SECRET_ALTOGIC_ENV_URL, SECRET_ALTOGIC_CLIENT_KEY);
