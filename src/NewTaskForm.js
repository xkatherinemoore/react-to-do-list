import { useState } from 'react';

function AddNewTask() {
    const [input, setInput] = useState("");

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInput(values => ({...values, [name]: value}))
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        /* 
            Create new task item
            Add task item to task list 
        */
    }

    return (
    <form>
        <label>Task:
            <input type="text" name="task" value={input.task} placeholder="New Task" onChange={handleChange} required />
        </label>
        <label>Date:
            <input type="date" name="date" value={input.date || ""} onChange={handleChange} />
        </label>
        <label>Time
            <input type="time" name="time" value={input.time || ""} onChange={handleChange} />
        </label>
        <label>Location
            <input type="text" name="location" value={input.location || ""} onChange={handleChange} />
        </label>
        <label>Description
            <textarea name="description" value={input.description || ""} onChange={handleChange} />
        </label>
        <label>Priority
            <select name="priority" value={input.priority} onChange={handleChange}>
                <option value="critical">Crtical</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </select>
        </label>
        <label>Calendar
            <select name="calendar" value={input.calendar} onChange={handleChange}>
                <option value="Personal">Personal</option>
                <option value="Work">Work</option>
                <option value="Appointments">Appointments</option>
                <option value="Other">Other</option>
            </select>
        </label>
        <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
    )
}

export default AddNewTask;