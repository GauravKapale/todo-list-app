import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleTodo, updateTodo, deleteTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
