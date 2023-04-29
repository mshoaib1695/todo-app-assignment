import { selector } from 'recoil';
import { todoListState } from '../atoms/atoms';

export const todoListStatsSelector = selector({
  key: 'todoListStatsSelector',
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((todo) => todo.completed).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted = totalNum === 0 ? 0 : Math.round((totalCompletedNum / totalNum) * 100);
    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted
    };
  }
});
