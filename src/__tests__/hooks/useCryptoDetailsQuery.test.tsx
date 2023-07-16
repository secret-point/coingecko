import React from 'react';
import {renderHook} from '@testing-library/react-hooks';
import nock from 'nock';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ENV} from '~Root/config/env';
import {MOCK_BITCOIN_CRYPTO_DETAILS} from '../__mocks__/useCryptoDetailsQuery.mock';
import {useCryptoDetailsQuery} from '~Root/hooks/useCryptoDetailsQuery';

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

describe('useCryptoDetailsQuery', () => {
  it('fetches the cryptos details', async () => {
    nock(ENV.API_URL)
      .get('/coins/bitcoin')
      .reply(200, {data: MOCK_BITCOIN_CRYPTO_DETAILS});

    const {result, waitFor} = renderHook(
      () => useCryptoDetailsQuery('bitcoin'),
      {
        wrapper: createWrapper(),
      },
    );

    await waitFor(() => result.current.isSuccess);
    expect(result.current.data.data).toEqual(MOCK_BITCOIN_CRYPTO_DETAILS);
  });
});
