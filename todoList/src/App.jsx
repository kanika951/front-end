import { useState } from 'react'
import {TodoContextProvider} from './Contexts/index'
import {TodoForm, TodoItem} from './Components/index'
import { useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
      setTodos((prev) => [...prev, { id: Date.now(), ...todo }])
  }

  const updateTodo = (id, todo) => {
    const newTodos = todos.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo));
    setTodos(newTodos);
  }

  const deleteTodo = (id) => {
     const newTodos = todos.filter((prevTodo) => prevTodo.id !== id);
     setTodos(newTodos);
  }

  const toggleComplete = (id) => {
    const newTodos = todos.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed}: prevTodo);
    setTodos(newTodos)
  }

  useEffect(() => {
     const todos = JSON.parse(localStorage.getItem("todos"));
     if(todos && todos.length > 0)
     {
      setTodos(todos);
     }
  }, [])

  useEffect(() => {
     localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <TodoContextProvider value={{todos, updateTodo, deleteTodo, addTodo, toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                      {/* todo form goes here */}
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => {
                             return <div key={todo.id} className='w-full'> 
                                  <TodoItem todo={todo} />
                             </div>
                        })}
                    </div>
                </div>
            </div>
    </TodoContextProvider>        
  )
}

export default App
