import React from 'react';
import TodoList from '../components/TodoList';
import TodoInput from '../components/TodoInput';
import { RecoilRoot } from 'recoil';

function TodoAppContainer() {
  return (
    <div className="App">
      <RecoilRoot>
        <div className="h-100 w-full flex items-center h-screen justify-center bg-teal-lightest font-sans">
          <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-xl">
            <div className="mb-4">
              <h1 className="text-[#ED4005]">Todo List</h1>
              <TodoInput />
            </div>
            <TodoList />
          </div>
        </div>
      </RecoilRoot>
    </div>
  );
}

export default TodoAppContainer;
