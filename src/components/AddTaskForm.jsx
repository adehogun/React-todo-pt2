// AddTaskForm.js
import React, { useState } from 'react';
import ReactDatePickerProps  from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


function AddTaskForm({ onAddTask }) {
  const [text, setText] = useState('');
  const [dueDate, setDate] = useState (null)
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    const newTask = {
      id: Date.now(),
      text: text,
      completed: false,
      dueDate: dueDate

    };
    onAddTask(newTask);
    setText('');
    setDate(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Enter task..." 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
      />
      <ReactDatePickerProps
      selected={dueDate}
      onChange={(date) => setDate(date)}
      placeholderText='Inser date here...'
      showTimeSelect
      timeFormat='HH:mm'
      timeIntervals={15}
      timeCaption='Time'
      dateFormat={"d, yyyy, MMMM h:mm aa"}
      />
      {dueDate && (
        <p>Selected Date and Time: {dueDate.toString()}</p>

      )}
     
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTaskForm;
