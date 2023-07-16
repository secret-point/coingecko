import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {DropDown} from '~Root/components/DropDown';

describe('DropDown', () => {
  const dataSet = ['Option 1', 'Option 2', 'Option 3'];
  const value = 'Option 2';
  const setValueMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call setValue when an option is selected', () => {
    const {getByText} = render(
      <DropDown dataSet={dataSet} value={value} setValue={setValueMock} />,
    );

    const dropdownComponent = getByText('Option 2');

    fireEvent(dropdownComponent, 'select', 'Option 3');
    expect(setValueMock).toHaveBeenCalledWith('Option 3');
  });
});
