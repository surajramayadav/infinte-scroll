import 'react-native';
import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';

// Note: test renderer must be required after react-native.
import HomeScreen from '../HomeScreen';

jest.useFakeTimers();

const navigation = {navigate: 'test'};

describe('<HomeScreen /> Basics', () => {
  it('Component should have input field', async () => {
    render(<HomeScreen navigation={navigation} />);
    const input = await screen.findByLabelText("Search Keyword");
    expect(input.props.value).toBe(string);
  });
});
