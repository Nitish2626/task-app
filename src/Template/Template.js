import { useState } from 'react';
import './Template.css';
import AddTask from '../AddTask/AddTask';

const Template = (props) => {

    const [showTask,setShowTask]=useState(false);

    const task=()=>{
        setShowTask(true);
    }

    return (
        <>
            <div id="template-container">
                <h5 id="template-heading">{props.title}</h5>
                <h1 id="time">{props.time}</h1>
                <section id="template-footer">
                    <button id="edit-button" onClick={task}>
                        <img id="edit-icon" src="/images/edit-icon.png" alt="edit-icon"></img>
                    </button>
                    <button id="delete-button" onClick={props.value}>
                        <img id="delete-icon" src="/images/delete-icon.png" alt="delete-icon"></img>
                    </button>
                </section>
            </div>
            {showTask && <AddTask />}
        </>
    );
}
export default Template;