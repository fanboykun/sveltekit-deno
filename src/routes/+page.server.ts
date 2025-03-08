import type { PageServerLoad } from './$types';
import { DATABASE_URL } from '$env/static/private';
import type { User } from '@prisma/client';
export const load: PageServerLoad = () => {
  const _u: User = {
    id: 'asas',
    name: 'Server World',
    email: 'Server World',
  };
  console.log(
    DATABASE_URL,
  );
  return {
    name: 'Server World',
  };
};
