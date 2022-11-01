import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoCreateButton } from "../TodoCreateButton";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

let searchedTodos = [];

function useLocalStorage(key) {
  const localStorageItem = localStorage.getItem(key);
  const parsedItems = localStorageItem ? JSON.parse(localStorageItem) : []
  const [item, setItem] = React.useState(parsedItems);
  const saveItems = (updatedTodos) => {
    updatedTodos.forEach(function (value, i) {
      value.id = i+1
    });
    setItem(updatedTodos);
    localStorage.setItem(key, JSON.stringify(updatedTodos));
  }
  return [
    item,
    saveItems
  ]
}

function App(props) {
  const [todos, saveTodos] = useLocalStorage('TODOS');
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  if (searchValue.length >= 1) {
    searchedTodos = todos.filter(todo => {
      const todoTextLowerCare =  todo.text.toLowerCase();
      const searchValueLowerCare =  searchValue.toLowerCase();
      return todoTextLowerCare.includes(searchValueLowerCare);
    });
  } else {
    searchedTodos = todos;
  }

  const addTodo = (todoMessage) => {
    const updatedTodos = [...searchedTodos];
    updatedTodos.push({
      id: updatedTodos.length + 1,
      completed: false,
      text: todoMessage
    })
    saveTodos(updatedTodos);
  }

  const completeTodo = (completedTodo) => {
    const updated = searchedTodos.map(todo => {
      if (todo.id === completedTodo.id) {
        todo.completed = true;
      }
      return todo;
    });
    const updatedTodos = [...updated];
    saveTodos(updatedTodos);
  }

  const deleteTodo = (deletedTodo) => {
    const updated = searchedTodos.filter(todo => todo.id !== deletedTodo.id );
    const updatedTodos = [...updated];
    saveTodos(updatedTodos);
  }


  return (
    <React.Fragment>
      <TodoCounter todos={todos}></TodoCounter>
      <TodoSearch searchValue = {searchValue} setSearchValue = {setSearchValue}></TodoSearch>
      <TodoList>
        {
          searchedTodos.map(todo => (
            <TodoItem key={todo.id} todo={todo} completeTodo = {() => {completeTodo(todo)}} deleteTodo = {() => {deleteTodo(todo)}}/> 
          ))
        }
      </TodoList>
      <TodoCreateButton setOpenModal = {setOpenModal}>

      </TodoCreateButton>
      {openModal &&
        <Modal>
          <TodoForm addTodo = {addTodo} setOpenModal = {setOpenModal}></TodoForm>
        </Modal>
      }
    </React.Fragment>
  );
}

export default App;
