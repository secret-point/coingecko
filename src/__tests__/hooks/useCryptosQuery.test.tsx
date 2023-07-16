import React from 'react';
import {renderHook} from '@testing-library/react-hooks';
import nock from 'nock';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {useCryptosQuery} from '~Root/hooks/useCryptosQuery';
import {ENV} from '~Root/config/env';
import {MOCK_CRYPTO, MOCK_CRYPTO_LIST} from '../__mocks__/useCryptosQuery.mock';

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  return ({children}: {children: React.ReactNode}) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe('useCryptosQuery', () => {
  it('fetches the cryptos list', async () => {
    const params = {
      vs_currency: 'usd',
      price_change_percentage: '7d',
      per_page: 10,
      page: 1,
      ids: '',
    };
    nock(ENV.API_URL, {
      reqheaders: {
        'Content-Type': 'application/json',
      },
    })
      .get('/coins/markets')
      .query({...params})
      .reply(200, {data: MOCK_CRYPTO_LIST});

    const {result, waitFor} = renderHook(() => useCryptosQuery(''), {
      wrapper: createWrapper(),
    });

    await waitFor(() => result.current.isSuccess);

    expect(result.current.data?.pages).toEqual([
      {
        data: {
          data: MOCK_CRYPTO_LIST,
        },
        nextPage: 2,
      },
    ]);
  });

  it('fetch the crypto list with search value', async () => {
    const params = {
      vs_currency: 'usd',
      price_change_percentage: '7d',
      per_page: 10,
      page: 1,
      ids: 'bitcoin',
    };

    nock(ENV.API_URL)
      .get('/coins/markets')
      .query({...params})
      .reply(200, {data: MOCK_CRYPTO});

    const {result, waitFor} = renderHook(() => useCryptosQuery('bitcoin'), {
      wrapper: createWrapper(),
    });

    await waitFor(() => result.current.isSuccess);

    expect(result.current.data?.pages).toEqual([
      {
        data: {
          data: MOCK_CRYPTO,
        },
        nextPage: 2,
      },
    ]);
  });
});
