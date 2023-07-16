import React from 'react';
import {TextInput, View} from 'react-native';

import styles from './styles';

interface Props {
  search: string;
  setSearch: (search: string) => void;
}

export const SearchInput: React.FC<Props> = ({search, setSearch}) => {
  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={search}
        onChangeText={setSearch}
      />
    </View>
  );
};
