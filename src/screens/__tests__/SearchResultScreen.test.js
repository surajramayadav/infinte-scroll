
import 'react-native';
import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';

// Note: test renderer must be required after react-native.
import SearchResultScreen from '../SearchResultScreen';

jest.useFakeTimers()
const route={
    params:{
        result:[1,2,3],
        Keyword:'test search'

    }
}

describe('<SearchResultScreen /> Basics', () => {
  it("Component should have this text",()=>{
    render(<SearchResultScreen route={route} />);
    const input=screen.getByText(/Search Keyword: test search/i)
    expect(input).toBeTruthy();
  })

})

