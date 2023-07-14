import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Inventory/Header';
import AddTodo from './Inventory/AddTodo';
import Footer from './Inventory/Footer';
import Todos from './Inventory/Todos';
import AboutPage from './Inventory/AboutPage';

function App() {
  const [todosArray, setTodosArray] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTodosArray(JSON.parse(storedTasks));
    }
  }, []);

  const addTask = (title, description) => {
    const newTask = {
      serial: todosArray.length + 1,
      title: title,
      description: description,
    };

    const updatedTasks = [...todosArray, newTask];
    setTodosArray(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const deleteTask = (task) => {
    const updatedTasks = todosArray.filter((t) => t.serial !== task.serial);
    setTodosArray(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const updateTask = (updatedTask) => {
    const updatedTasks = todosArray.map((task) => {
      if (task.serial === updatedTask.serial) {
        return updatedTask;
      }
      return task;
    });

    setTodosArray(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <Router>
      <div>
        <Header title="My List" searchBar={false} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddTodo addTask={addTask} />
                <Todos TodosProp={todosArray} deleteProp={deleteTask} updateProp={updateTask} />
              </>
            }
          />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
