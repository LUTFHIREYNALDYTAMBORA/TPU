import Head from 'next/head';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import TodoItem from '../../elements/TodoItem';
import { addTodo, removeTodo } from './action';
import Link from 'next/link';

export default function Todo() {
  const dispatch = useDispatch();
  const { items } = useSelector((s) => s.todo || {});

  const [text, setText] = useState('');

  const _handleAddTodos = (e) => {
    e.preventDefault();

    dispatch(addTodo(text));
    setText('');
  };

  const _handleRemoveTodo = (todo) => {
    dispatch(removeTodo(todo));
  };

  return (
    <>
      <Head>
        <title>Todo App</title>
      </Head>
      <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 p-6 md:p-0">
        <form
          className="bg-white rounded-lg shadow-xl p-4 md:p-8 w-full md:w-2/3 lg:w-1/3"
          onSubmit={_handleAddTodos}
        >
          <section className="mb-4" id="form-back" >
            <Link href="/">&larr; Back to Home</Link>
          </section>

          <section className="mb-4" id="form-header">
            <h1 className="text-3xl font-bold">A Todo App</h1>
            <p>Fill the form then hit &quot;Enter&quot; to Add new Task</p>
          </section>

          <section id="form-textfield">
            <input
              className="bg-white p-3 w-full text-gray-700 rounded-md outline outline-1 outline-gray-500 transition focus:outline-2 focus:outline-cyan-500"
              id="input"
              onInput={(e) => setText(e.target.value)}
              placeholder="What's next?"
              type="text"
              value={text}
            />
          </section>
        </form>

        <div
          className="bg-white rounded-lg shadow-xl p-4 md:p-8 w-full md:w-2/3 lg:w-1/3 mt-4"
          id="form-items"
        >
          <ul className="list-none text-gray-700">
            {items.length === 0 ? (
              <p className="text-center">
                You&apos;ve completed all your tasks!
              </p>
            ) : (
              items.map((todo, idx) => (
                <TodoItem key={idx} onRemove={_handleRemoveTodo} todo={todo} />
              ))
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

Todo.propTypes = {
  items: PropTypes.array.isRequired,
};
