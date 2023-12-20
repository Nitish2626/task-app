import './DailyTask.css';
import Template from '../components/Template/Template';

const Daily=(props)=>{
    return(
        <>
            <div id="daily-task-container">
                <div id="dailytask-container">
                    <h2>
                        <img id="dt" src="./images/dailytask-icon.png"></img>
                        Daily Tasks
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
export default Daily;