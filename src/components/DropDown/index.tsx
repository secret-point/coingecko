import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import styles from './styles';

interface Props {
  dataSet: string[];
  value: string;
  setValue: (value: string) => void;
}

export const DropDown: React.FC<Props> = ({dataSet, value, setValue}) => {
  return (
    <SelectDropdown
      search
      data={dataSet}
      defaultValue={value}
      buttonStyle={styles.buttonStyle}
      buttonTextStyle={styles.buttonTextStyle}
      rowTextStyle={{textTransform: 'uppercase'}}
      onSelect={selectedItem => {
        setValue(selectedItem);
      }}
      dropdownIconPosition={'right'}
      data-testid="dropdown-component"
      showsVerticalScrollIndicator
    />
  );
};
