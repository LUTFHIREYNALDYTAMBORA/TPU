import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import TodoItem from '../TodoItem';

describe('src/components/elements/TodoItem', () => {
  test('render correctly', () => {
    const shallow = new ShallowRenderer();
    const tree = shallow.render(<TodoItem />);
    expect(tree).toMatchSnapshot();
  });
});
