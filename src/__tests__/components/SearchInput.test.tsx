import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {TextInput} from 'react-native';
import {SearchInput} from '~Root/components/SearchInput';

describe('SearchInput', () => {
  const search = 'initial value';
  const setSearchMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the search input with the correct props', () => {
    const {getByPlaceholderText} = render(
      <SearchInput search={search} setSearch={setSearchMock} />,
    );

    const searchInput = getByPlaceholderText('Search');

    expect(searchInput.props.value).toEqual(search);
    expect(searchInput.props.onChangeText).toEqual(setSearchMock);
  });

  it('should call setSearch when the input text changes', () => {
    const {getByPlaceholderText} = render(
      <SearchInput search={search} setSearch={setSearchMock} />,
    );

    const searchInput = getByPlaceholderText('Search');

    const newSearch = 'new search value';
    fireEvent.changeText(searchInput, newSearch);

    expect(setSearchMock).toHaveBeenCalledWith(newSearch);
  });
});
