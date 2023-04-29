import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from '../recoil/atoms/atoms';

const withTodoList = (Component) => {
  return function WithTodoList(props) {
    const [showCompleted, setShowCompleted] = useState(false);
    const [todoList, setTodoList] = useRecoilState(todoListState);

    const toggleCompleted = () => {
      setShowCompleted(!showCompleted);
    };

    let filteredTodos = todoList;
    if (showCompleted) {
      filteredTodos = todoList.filter((todo) => todo.completed);
    }

    return (
      <>
        <button
          onClick={toggleCompleted}
          className="flex-no-shrink p-2 border-2  bg-[#fa5a29] hover:bg-[#ED4005] rounded text-teal border-teal text-white hover:bg-teal"
        >
          {showCompleted ? 'Show All' : 'Show Completed'}
        </button>
        <Component {...props} todoList={filteredTodos} setTodoList={setTodoList}/>;
      </>
    );
  };
};

export default withTodoList;
