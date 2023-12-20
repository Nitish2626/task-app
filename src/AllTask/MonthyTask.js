import './MonthlyTask.css';
import Template from '../components/Template/Template';

const Monthly=(props)=>{
    return (
        <>
            <div id="monthly-task-container">
                <div id="monthlytask-container">
                    <h2>
                        <img id="mt" src="./images/monthlytask-icon.png"></img>
                        Monthly Tasks
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
export default Monthly;