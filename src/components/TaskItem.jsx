function TaskItem({task, toggledCompletion, deleteTask}) {

    return (
        <li>
            <input
            type="tickbox"
            checked={task.completed}
            onChange={()=> toggledCompletion (task.id)}
            />

            <span style={{ textDecoration: task.completed ? 'line-through' : 'none'}}>
                {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
    );
}

export default TaskItem