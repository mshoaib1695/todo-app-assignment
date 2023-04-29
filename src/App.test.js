import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import TodoItem from './components/TodoItem';

describe('TodoItem component', () => {
  const item = {
    id: 1,
    text: 'Example task',
    completed: false,
  };

  test('Testing Todo List Rendering', () => {
    const { getByText, getByRole } = render(
      <RecoilRoot>
        <TodoItem item={item} />
      </RecoilRoot>
    );

    expect(getByText('Example task')).toBeInTheDocument();
    expect(getByRole('button', { name: 'Done' })).toBeInTheDocument();
    expect(getByRole('button', { name: 'Delete' })).toBeInTheDocument();
  });

  test('Testing Delete Functionality', () => {
    const setTodoList = jest.fn();
    const { getByRole } = render(
      <RecoilRoot>
        <TodoItem item={item} setTodoList={setTodoList} />
      </RecoilRoot>
    );

    fireEvent.click(getByRole('button', { name: 'Delete' }));

    expect(setTodoList).toHaveBeenCalledWith([]);
  });
});
