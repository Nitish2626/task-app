import './CompletedTask.css';

const Completed=()=>{
    return(
        <>
            <div id="completed-task-container">
                <div id="completedtask-container">
                    <h2>
                        <img id="ct" src="./images/completedtask-icon.png"></img>
                        Completed Tasks
                    </h2>
                </div>
                <hr color="black"></hr>
            </div>
        </>
    );
}
export default Completed;