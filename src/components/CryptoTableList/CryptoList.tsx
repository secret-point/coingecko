import React from 'react';
import {
  FlatList,
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {GlobalStyles} from '~Root/config';
import {TextFormat} from '../TextFormat';
import {CryptoInfoTypes} from '~Root/types/types';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Typography from '../Typography';
import styles from './styles';

interface Props {
  cryptosData: CryptoInfoTypes[] | undefined;
  fetchMoreCryptos: () => void;
  isFetching: boolean;
}

export const CryptoList: React.FC<Props> = ({
  cryptosData,
  fetchMoreCryptos,
  isFetching,
}) => {
  const {navigate} = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <FlatList
      data={cryptosData}
      refreshing={isFetching}
      keyExtractor={item => item.id}
      onEndReachedThreshold={0.7}
      onRefresh={fetchMoreCryptos}
      onEndReached={fetchMoreCryptos}
      ListFooterComponent={
        <ActivityIndicator style={GlobalStyles.mt15} size="large" />
      }
      renderItem={({item}) => {
        if (!item) return <Text>!!!!!!</Text>;
        const {
          id,
          name,
          symbol,
          image,
          current_price: currentPrice,
          market_cap_rank: ranking,
          price_change_percentage_24h: priceChangePercent24h,
          price_change_percentage_7d_in_currency: priceChangePercent7d,
        } = item;
        return (
          <TouchableOpacity onPress={() => navigate('Details', {id})}>
            <View style={[GlobalStyles.itemsCenter, styles.row]}>
              <Text
                style={[
                  GlobalStyles.textUppercase,
                  {width: 50},
                  {textAlign: 'center'},
                ]}>
                {ranking}
              </Text>
              <View
                style={[
                  GlobalStyles.flexRow,
                  GlobalStyles.itemsCenter,
                  GlobalStyles.gap10,
                  styles.cell,
                  {width: 120},
                ]}>
                {image && (
                  <Image
                    source={{uri: image}}
                    style={[GlobalStyles.icon30x30, {resizeMode: 'contain'}]}
                  />
                )}
                <View>
                  <Text style={[{width: 100}, {textAlign: 'left'}]}>
                    {name}
                  </Text>
                  <Typography
                    title={symbol}
                    colorVariant="gray"
                    style={[GlobalStyles.textUppercase]}
                  />
                </View>
              </View>
              <TextFormat
                style={[styles.cell, {width: 80}]}
                value={currentPrice}
                unit="usd"
              />

              <TextFormat
                style={[styles.cell, {width: 90}]}
                value={priceChangePercent24h}
                unit="%"
              />

              <TextFormat
                style={[styles.cell, {width: 80}]}
                value={priceChangePercent7d}
                unit="%"
              />
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};
