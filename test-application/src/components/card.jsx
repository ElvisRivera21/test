import Button from "./button";
import React, { useState} from "react";



function Card() {
  const [tasks, setTasks] = useState([]);  
const [newTask, setNewTasks] = useState('');

  const addTask = () => {
          if (newTask.trim()) {
          setTasks([...tasks, setNewTasks]);
        setNewTask('');
        
          }
};
  
  return (
     
       <div className='cardcomponents'>
       
      <div className='todocomponent'>
        



              <h1>To Do List</h1>
          <p>A simple to do list</p>
          <input type='text'
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder='Add your task'>
            </input>
        
        {/*using todo button */}

        <button className='todobtn' onClick={addTask}>Submit Task</button>
          
          
          
          
            

        </div>
            

       <div className="switchcomponent">
            <h1>A switch Component</h1>
            <p>A Simple On/Off Switch</p>
            <Button />
            </div>

            
            
            <div className='emailcomponent'>
              <h1>An email component to email me</h1>
            <p>A form to contact me</p>
            <Button />  

        </div>
        </div>
        
    )
}

export default Card;