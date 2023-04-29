import React from 'react';
import TodoItem from './TodoItem';
import withTodoList from './withTodoList';

function TodoList({ todoList, setTodoList }) {

  return (
    <div className="  h-[calc(100vh_-_200px)] overflow-y-auto">
      {todoList?.map((item, index) => {
        return <TodoItem key={index} item={item} setTodoList={setTodoList} />;
      })}
    </div>
  );
}
export default withTodoList(TodoList);