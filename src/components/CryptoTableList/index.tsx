import React, {useState, useEffect} from 'react';

import {View, Text, ScrollView} from 'react-native';
import {GlobalStyles} from '~Root/config';
import {CRYPTO_HEADER} from '~Root/config/constant';
import Typography from '../Typography';
import styles from './styles';
import {SearchInput} from '../SearchInput';
import {useDebounce} from '~Root/hooks/useDebounce';
import {useCryptosQuery} from '~Root/hooks/useCryptosQuery';
import {CryptoList} from './CryptoList';

export const CryptoTableList = () => {
  const [search, setSearch] = useState<string>('');
  const [debouncedSearch] = useDebounce([search], 1000);

  const {data, isLoading, isError, isFetching, hasNextPage, fetchNextPage} =
    useCryptosQuery(debouncedSearch);

  const cryptosData = data?.pages.flatMap(page => page?.data || []);
  const fetchMoreCryptos = () => hasNextPage && fetchNextPage();

  if (isLoading) return <Typography textCenter title="Loading...." />;
  if (isError) return <Typography textCenter title="Oops, Error occured!" />;
  if (!data?.pages) return <Typography textCenter title="No data available" />;

  return (
    <ScrollView horizontal>
      <View style={{backgroundColor: 'white'}}>
        <View style={[GlobalStyles.p10]}>
          <SearchInput search={search} setSearch={setSearch} />
        </View>
        <View style={styles.table}>
          <View style={styles.header}>
            {CRYPTO_HEADER.map(({name, width}, index) => (
              <Text
                key={name}
                style={[{textAlign: index > 1 ? 'right' : 'center'}, {width}]}>
                {name}
              </Text>
            ))}
          </View>
          <CryptoList
            isFetching={isFetching}
            cryptosData={cryptosData}
            fetchMoreCryptos={fetchMoreCryptos}
          />
        </View>
      </View>
    </ScrollView>
  );
};
