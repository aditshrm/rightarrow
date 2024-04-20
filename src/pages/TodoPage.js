import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import React, { useState } from 'react';

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTask = () => {
    if (inputValue !== "") {
      setTasks([...tasks, { text: inputValue, checked: false }]);
      setInputValue('');
    } else {
      alert("Please enter a task");
    }
  };

  const toggleTask = index => {
    const newTasks = [...tasks];
    newTasks[index] = {
      ...newTasks[index],
      checked: !newTasks[index].checked
    };
    setTasks(newTasks);
  };

  const removeTask = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="container">
      <TopBar/>
      <div className="todoapp">
        <h2>
          To-Do List
        </h2>
        <div className="row">
          <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder="Add a task" />
          <button id="add" onClick={addTask}>+</button>
        </div>
        <ul id="tasklist">
          {tasks.map((task, index) => (
            <li key={index} className={task.checked ? 'checked' : ''}>
              <div onClick={() => toggleTask(index)}>
                {task.text}
              </div>
              <div onClick={() => removeTask(index)}>
                &times;
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Footer/>
    </div>
  );
}
export default TodoApp;