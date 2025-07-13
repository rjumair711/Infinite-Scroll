import { useInfiniteQuery } from 'react-query';
import { fetchUsers, UsersResponse } from '@/utils/api';

export function useInfiniteUsers() {
  return useInfiniteQuery<UsersResponse>(
    'users',
    ({ pageParam = 0 }) => fetchUsers(10, pageParam),
    {
      getNextPageParam: (lastPage) => {
        const nextSkip = lastPage.skip + lastPage.limit;
        return nextSkip < lastPage.total ? nextSkip : undefined;
      },
    }
  );
}
