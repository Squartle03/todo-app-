import './App.css';
import { useState } from 'react';





function Task() {

  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({ note:"",completed: false });

  const addTask = (e) => {
    e.preventDefault();
    setTasks([form, ...tasks]);
    setForm({ note:"",completed: false });

  };




  return (
    < form className="container" onSubmit={addTask}>
      <hr />
      <h1>My todo List</h1>

      <input type="text" className="input" placeholder="Create New task"
        value={form.note}
        onChange={(e) => setForm({...form,note:e.target.value})}/>

      <button type="submit" className="button">Add</button>

      <div className="form">

        <ul className="todo-list">
          {tasks.map((item) => (
            <li className="task-item" >
              <input type="checkbox" className="task-checked" completed="false" />
              {item.note}
            </li>
          ))}
        </ul>

      </div>



    </form>)

};

export default Task;
