
import 'react-native';
import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';

// Note: test renderer must be required after react-native.
import {create, act, renderer}  from 'react-test-renderer';
import AuthorCard from '../AuthorCard';

// SnapShots
test('renders correctly', () => {
  const tree = create(<AuthorCard />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe('<AuthorCard /> Basics', () => {
    it('has 2 child', async () => {
        let tree
    act(()=>{
       tree = create(<AuthorCard />)
    })
    expect(tree.toJSON().children.length).toBe(2);
  });

  it("Component should have one test text",()=>{
    render(<AuthorCard title='test' tags={['tag1',"tag2"]} />);
    const title=screen.getByText(/Title: test/i)
    expect(title).toBeTruthy();
  })

})

