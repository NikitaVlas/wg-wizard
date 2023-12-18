import React, {useEffect, useState} from 'react';

const TodolistPage = () => {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddTask = () => {
        if (inputValue.trim() !== '') {
            setTasks([...tasks, inputValue]);
            setInputValue('');
        }
    };

    const handleCheckboxChange = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index] = "Completed: " + updatedTasks[index];
        setTasks(updatedTasks);
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <div className="todo-container">
                        <div className="mb-3">
                            <h2 className="form-label">Todos</h2>
                            <div className="d-flex">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="todoInput"
                                    placeholder="Enter your task"
                                    value={inputValue}
                                    onChange={handleInputChange}
                                />
                                <button className="btn btn-primary ml-2" onClick={handleAddTask}>+</button>
                            </div>
                            <div className="mt-3">
                                {tasks.map((task, index) => (
                                    <div key={index} className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id={`checkbox-${index}`}
                                            onChange={() => handleCheckboxChange(index)}
                                        />
                                        <label className="form-check-label" htmlFor={`checkbox-${index}`}>
                                            {task}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="completed-tasks-container">
                        <h2>Completed Tasks</h2>
                        <ul>
                            {tasks.map((task, index) => (
                                task.startsWith("Completed:") && <li key={index}>{task}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodolistPage;