import React from 'react';
import {LineChart, Grid, XAxis, YAxis} from 'react-native-svg-charts';
import {View} from 'react-native';
import {useQuery} from '@tanstack/react-query';
import {CryptoChartResponseTypes} from '~Root/types/types';
import {GlobalStyles} from '~Root/config';
import instance from '~Root/config/axios';
import styles from './styles';

interface Props {
  id: string;
  currency: string;
}

export const CryptoTrackerChart: React.FC<Props> = ({id, currency}) => {
  const fetchMarketChart = () => {
    const params = {
      vs_currency: currency,
      days: 30,
    };
    return instance.get<string, CryptoChartResponseTypes>(
      `/coins/${id}/market_chart`,
      {params},
    );
  };

  const {
    isLoading,
    isError,
    data: trades,
  } = useQuery<CryptoChartResponseTypes>({
    queryKey: ['coins/market_chart', id],
    queryFn: fetchMarketChart,
  });

  const dates = trades?.prices.map((point: Array<number>) => point[0]) || [];
  const prices = trades?.prices.map((point: Array<number>) => point[1]) || [];

  return (
    <View>
      {!isLoading && !isError && (
        <View>
          <View style={[GlobalStyles.flexRow]}>
            <YAxis data={prices} />

            <LineChart
              style={styles.chart}
              svg={{stroke: 'green'}}
              data={prices}
              numberOfTicks={6}>
              <Grid />
            </LineChart>
          </View>
          <XAxis
            data={prices}
            svg={{fontSize: 10, fill: '#617485'}}
            numberOfTicks={6}
            formatLabel={(value, index) =>
              new Date(
                dates[Math.floor((dates.length / 8) * index)],
              ).toLocaleString('default', {month: 'short', day: '2-digit'})
            }
            contentInset={{
              left: 60,
              right: 10,
            }}
          />
        </View>
      )}
    </View>
  );
};
