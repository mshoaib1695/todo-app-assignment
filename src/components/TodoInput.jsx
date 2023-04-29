import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../recoil/atoms/atoms';
import uniqueId from 'lodash/uniqueId';

function TodoInput() {
  const [todoText, setTodoText] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const changHandler = ({ target: { value } }) => {
    setTodoText(value);
  };

  const addTodo = () => {
    if(todoText){
      setTodoList((preVals) => [
        ...preVals,
        {
          id: uniqueId(),
          text: todoText,
          completed: false
        }
      ]);
      setTodoText('');
    }
  };

  return (
    <div className="flex mt-4">
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
        placeholder="Add Todo"
        value={todoText}
        onChange={changHandler}
      />
      <button
        className="flex-no-shrink p-2 border-2  bg-[#fa5a29] hover:bg-[#ED4005] rounded text-teal border-teal text-white hover:bg-teal"
        onClick={addTodo}
      >
        Add
      </button>
    </div>
  );
}

export default TodoInput;
