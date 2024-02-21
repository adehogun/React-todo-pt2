import { useState } from "react";

function AddTask (AddTask) {

    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        const newTask ={
            id: Date.now(),
            text:text,
            completed: false
        };

        AddTask(newTask);
        setText('');
    }

    return (
        <>
        <form onSubmit={onSubmit}>
            <input type="text" 
            placeholder="Enter your task..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Add Task</button>
        </form>
        
        </>
    );

    }


export default AddTask;