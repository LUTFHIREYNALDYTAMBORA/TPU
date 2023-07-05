import React from 'react';
import PropTypes from 'prop-types';

export default function TodoItem(props) {
  const { todo, onRemove } = props;

  return (
    <li className="flex bg-gray-100 p-3 my-2">
      <button
        className="mr-2 font-bold text-red-400"
        onClick={() => onRemove(todo)}
      >
        X
      </button>
      <p>{todo.text}</p>
    </li>
  );
}

TodoItem.defaultProps = {
  onRemove: () => {},
  todo: {}
};

TodoItem.propTypes = {
  onRemove: PropTypes.func,
  todo: PropTypes.object
};
