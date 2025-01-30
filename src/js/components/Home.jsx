import React, { useState } from "react";

const Home = () => {
    const [createTask, setTask] = useState('');
    const [listTask, setPendingTask] = useState([]);

    const deleteTask = (indexToRemove) => {
        const updatedTasks = listTask.filter((_, index) => index !== indexToRemove);
        setPendingTask(updatedTasks);
    };

    return (
        <div className="text-center my-3">
            <h1>To Do List</h1>

            <div className="">
                <div className=" d-flex justify-content-center ">
                <input
                    className="form-control"
                    type="text"
                    placeholder="Add a task"
                    value={createTask}
                    onChange={(event) => setTask(event.target.value)}
                    onKeyDown={(event) => {
                        if (event.key === "Enter" && createTask.trim() !== "") {
                            setPendingTask([...listTask, createTask.trim()]);
                            setTask("");
                        }
                    }}
                    style={{
                        margin: "",
                        padding: "8px",
                        width: "24rem",
                    }}
                />
                </div>
                    {listTask.map((task, index) => (
                        <div
                            key={index}
                            className="d-flex justify-content-between align-items-center border justify-content-center form-control"
                            style={{
                                margin: "auto",
                                padding: "8px",
                                width: "24rem",
                            }}
                        >
                            <span>{task}</span>
                            <button
                                className="btn"
                                onClick={() => deleteTask(index)}
                                 >
                                x
                            </button>
                        </div>
                        
                    ))}
                    <div
                            className="d-flex justify-content-between align-items-center border justify-content-center form-control"
                            style={{
                                margin: "auto",
                                padding: "8px",
                                width: "24rem",
                                color: "lightgray",
                                fontSize: 12

                            }}>{listTask.length} item left</div>

            </div>
        </div>
    );
};

export default Home;
