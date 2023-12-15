import './YearlyTask.css';
import Template from '../Template/Template';

const Yearly=(props)=>{
    return(
        <>
            <div id="yearly-task-container">
                <div id="yearlytask-container">
                    <h2>
                        <img id="yt" src="./images/yearlytask-icon.png"></img>
                        Yearly Tasks
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
export default Yearly;