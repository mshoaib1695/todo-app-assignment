import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListState } from '../recoil/atoms/atoms';

function TodoItem({ item, setTodoList }) {
  const todoList = useRecoilValue(todoListState);
  const { text, id, completed } = item;

  const deleteHandler = (id) => {
    const newList = todoList.filter((todo) => todo.id != id);
    setTodoList(newList);
  };

  const completeHandler = (id) => {
    const updatedList = todoList.map((todo) =>
      todo.id === id ? { ...todo, completed: true } : todo
    );
    setTodoList(updatedList);
  };

  return (
    <div className="flex mb-4 items-center">
      <p className={`w-full text-grey-darkest text-left  ${completed ? 'line-through' : ''}`}>
        {text}
      </p>
      <button
        className="flex-no-shrink p-2  ml-4 mr-2 border-2 rounded text-white text-green border-green hover:bg-green bg-[#d11a2a] hover:bg-[#d92232]"
        onClick={() => completeHandler(id)}>
        Done
      </button>
      <button
        className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded text-white text-green border-green hover:bg-green bg-[#d11a2a] hover:bg-[#d92232]"
        onClick={() => deleteHandler(id)}>
        Delete
      </button>
    </div>
  );
}
export default TodoItem;
