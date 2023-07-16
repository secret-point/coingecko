import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {GlobalStyles} from '~Root/config';
import {useRoute} from '@react-navigation/native';
import {DropDown} from '~Root/components/DropDown';
import {CryptoHistory} from '~Root/types/types';
import Typography from '~Root/components/Typography';
import {TextLabel} from '~Root/components/TextLabel';
import {CryptoTrackerChart} from '~Root/components/CryptoTrackerChart';
import {RootRouteProps} from '~Root/navigation/AppRoute';
import {useCryptoDetailsQuery} from '~Root/hooks/useCryptoDetailsQuery';

const Details: React.FC = () => {
  const route = useRoute<RootRouteProps<'Details'>>();
  const {id} = route.params;

  const {data, isLoading, isError} = useCryptoDetailsQuery(id);
  const [currency, setCurrency] = useState('usd');

  if (isLoading) return <Text>Loading....</Text>;
  if (isError) return <Text>Error Occured....</Text>;
  if (!data) return <Text>No data available.</Text>;

  const {symbol, name, image, market_data, tickers} = data;
  const {
    market_cap_change_percentage_24h: marketCapPercent,
    market_cap_change_24h_in_currency: marketCapChange,
    current_price: currentPrice,
    market_cap,
    circulating_supply,
    total_supply,
    high_24h: high24h,
    low_24h: low24h,
  } = market_data;

  const cryptoDetails = tickers.find(
    (ticker: CryptoHistory) => ticker.target === currency.toUpperCase(),
  );

  return (
    <View style={[GlobalStyles.p20, GlobalStyles.gap15]}>
      <View style={[GlobalStyles.gap15]}>
        <View
          style={[
            GlobalStyles.flexRow,
            GlobalStyles.itemsCenter,
            GlobalStyles.justifyBetween,
            GlobalStyles.gap10,
          ]}>
          <View
            style={[
              GlobalStyles.flexRow,
              GlobalStyles.itemsCenter,
              GlobalStyles.gap10,
            ]}>
            <Image
              source={{uri: image.small}}
              style={[GlobalStyles.icon30x30, {resizeMode: 'contain'}]}
            />
            <Typography h2 extraBold colorVariant="black" title={name} />
          </View>
          <View>
            <DropDown
              dataSet={Object.keys(currentPrice)}
              value={currency}
              setValue={setCurrency}
            />
          </View>
        </View>
        <View
          style={[
            GlobalStyles.flexRow,
            GlobalStyles.gap10,
            GlobalStyles.itemsCenter,
          ]}>
          <TextLabel
            label="price"
            value={cryptoDetails?.last || currentPrice[currency]}
            currency={currency}
          />

          <Typography
            p
            bold
            colorVariant={marketCapPercent > 0 ? 'success' : 'error'}
            title={
              marketCapPercent > 0
                ? `+${marketCapPercent}%`
                : `${marketCapPercent}%`
            }
          />
        </View>
        <TextLabel
          label="Market Cap"
          value={market_cap['usd']}
          currency="usd"
        />
        <TextLabel
          label="24-hour trading volume"
          value={marketCapChange['usd']}
          currency="usd"
        />

        <TextLabel
          label="Circulating supply"
          value={circulating_supply}
          currency={symbol}
        />
        <TextLabel
          label="Total supply"
          value={total_supply}
          currency={symbol}
        />

        <View style={[GlobalStyles.flexRow, GlobalStyles.gap20]}>
          <TextLabel
            label="All-time high price"
            value={high24h['usd']}
            currency="usd"
          />
          <TextLabel
            label="All-time low price"
            value={low24h['usd']}
            currency="usd"
          />
        </View>
      </View>
      <CryptoTrackerChart id={id} currency="usd" />
    </View>
  );
};

export default Details;
