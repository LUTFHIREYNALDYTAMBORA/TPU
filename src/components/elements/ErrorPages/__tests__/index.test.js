import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ErrorPages from '../ErrorPages';

describe('src/components/elements/ErrorPages', () => {
  test('render correctly', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<ErrorPages />);
    expect(tree).toMatchSnapshot();
  });
});
