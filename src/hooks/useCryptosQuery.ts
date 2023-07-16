import {QueryKey, useInfiniteQuery} from '@tanstack/react-query';
import {CryptoInfoTypes} from '~Root/types/types';
import instance from '~Root/config/axios';

interface Props {
  queryKey: QueryKey;
  pageNumber: number;
}

export const useCryptosQuery = (debouncedSearch: string) => {
  const fetchCryptos = async ({pageParam = 0}) => {
    const pageNumber = pageParam;
    const params = {
      vs_currency: 'usd',
      price_change_percentage: '7d',
      per_page: 10,
      page: pageNumber,
      ids: debouncedSearch,
    };

    try {
      const res = await instance.get<string, CryptoInfoTypes[]>(
        '/coins/markets',
        {
          params,
        },
      );
      return {
        data: res,
        nextPage: pageNumber + 1,
      };
    } catch (err) {
      console.error(err);
    }
  };

  return useInfiniteQuery(
    ['coins/markets', debouncedSearch],
    async ({pageParam = 1}) => await fetchCryptos({pageParam}),
    {
      getNextPageParam: lastPage => lastPage?.nextPage,
    },
  );
};
