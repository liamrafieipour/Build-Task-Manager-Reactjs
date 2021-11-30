
import { useHistory } from "react-router";
import React, { useState } from "react";
import Modal from './Modal';
import { MdTask } from "react-icons/md";



const Tasks = (props) => {
    const [isOpen, setIsOpen] = useState(false)

    const tasks = props.tasks;
    const history = useHistory();
    return (
        <div className="task-list">



            {tasks.map(tasks => (
                <div className="task-preview" key={tasks.id}>
                    <div onClick={() => setIsOpen(true)} >
                        <div className="task-title"><MdTask size="1.5em" /><h2>{tasks.title}</h2></div>

                        <p>{tasks.subtitle}</p>

                    </div>
                </div>
            ))}


            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                Congratulation, you passed the task.
            </Modal>







        </div>
    );
}

export default Tasks;