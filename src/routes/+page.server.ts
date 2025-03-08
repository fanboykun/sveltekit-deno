import type { PageServerLoad } from './$types';
import { DATABASE_URL } from '$env/static/private';
export const load: PageServerLoad = () => {
  console.log(
    DATABASE_URL,
  );
  return {
    name: 'Server World',
  };
};
