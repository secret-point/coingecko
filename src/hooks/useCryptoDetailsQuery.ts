import instance from '~Root/config/axios';
import {useQuery} from '@tanstack/react-query';
import {CryptoDetailsTypes} from '~Root/types/types';
import {REFETCH_PERIOD} from '~Root/config/constant';

export const useCryptoDetailsQuery = (id: string) => {
  const fetchCryptoDetails = async () => {
    return await instance.get<string, CryptoDetailsTypes>(`/coins/${id}`);
  };

  return useQuery({
    queryKey: ['coins', id],
    queryFn: fetchCryptoDetails,
    refetchInterval: REFETCH_PERIOD,
  });
};
