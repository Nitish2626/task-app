import './WeeklyTask.css';
import Template from '../Template/Template';

const Weekly=(props)=>{
    return(
        <>
            <div id="weekly-task-container">
                <div id="weeklytask-container">
                    <h2>
                        <img id="wt" src="./images/weeklytask-icon.png"></img>
                        Weekly Tasks
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
export default Weekly;