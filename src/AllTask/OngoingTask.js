import './OngoingTask.css';

const Ongoing=(props)=>{
    return(
        <>
            <div id="ongoing-task-container">
                <div id="ongoingtask-container">
                    <h2>
                        <img id="ot" src="./images/ongoingtask-icon.png"></img>
                        Ongoing Tasks
                    </h2>
                </div>
                <hr color="black"></hr>
                {props.Hv}
                {props.Dv}
            </div>
        </>
    );
}
export default Ongoing;