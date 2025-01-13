import React from "react";
import { useState } from "react";

//create your first component
const Home = () => {
    const [createTask, setTask] = useState('');
    const [listTask, setPendingTask] = useState([]);

    return (
        <div className="text-center my-3">
            <h1>To do list</h1>
            {setTask}
            <div className="d-flex row">
                <input
                    className="form-control m-5"
                    type="text"
                    value={createTask}
                    onChange={(event) => {
                        setTask(event.target.value);
                    }}
                    onKeyDown={(event) => {
                        if (event.key === "Enter") {
                            setPendingTask([...listTask, createTask]);
                            setTask("");
                        }
                    }}
                />
                {listTask.map(task => (
                    
					<div><p
                        style={{ border: '1px solid black' }}
                        key={task}
                    >
                        {task}
                    </p>
					
					</div>
					
                ))}
            </div>
        </div>
    );
};

export default Home;
