import { useState } from "react";

function AddTask({ onAddTask}) {

    const [text, setText] = useState('');

    const makeSumbit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        const newTask ={
            id: Date.now(),
            text:text,
            completed: false
        };

        onAddTask(newTask);
        setText('');
    }

    return (
        <form onSubmit={makeSumbit}>
            <input type="text" 
            placeholder="Enter your task..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Add Task</button>
        </form>
    );

    }


export default AddTask;