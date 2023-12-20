import { useState } from 'react';
import './HourlyTask.css'
import Template from '../components/Template/Template';

const Hourly = (props) => {

    return (
        <>
            <div id="hourly-task-container">
                <div id="hourlytask-container">
                    <h2>
                        <img id="ht" src="./images/hourlytask-icon.png"></img>
                        Hourly Tasks
                    </h2>
                </div>
                <hr color="black"></hr>
                {props.value.map((item)=>{
                    return <Template title={item.title} time={item.time} />
                })}
            </div>
        </>
    );
}
export default Hourly;