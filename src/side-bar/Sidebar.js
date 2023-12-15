        
const Sidebar=()=>{
    return(
        <section id="container">
            <button className="links" id="add-task" onClick={showCreateTask}>
                <img id="add" src="./images/addtask-icon.png"></img>
                Add New Task
            </button>
            <hr />

            <NavLink className="links" to="/home" onClick={show}>
                <img id="home" src="./images/home-icon.png"></img>
                Home
            </NavLink>

            <NavLink className="links" to="/about" onClick={show}>
                <img id="about" src="./images/about-icon.png"></img>
                About Us
            </NavLink>

            <NavLink className="links" to="/ongoing" onClick={show}>
                <img id="ongoing" src="./images/ongoingtask-icon.png"></img>
                Ongoing Tasks
            </NavLink>

            <NavLink className="links" to="/hourly" onClick={show}>
                <img id="hourly" src="./images/hourlytask-icon.png"></img>
                Hourly Tasks
            </NavLink>

            <NavLink className="links" to="/daily" onClick={show}>
                <img id="daily" src="./images/dailytask-icon.png"></img>
                Daily Tasks
            </NavLink>

            <NavLink className="links" to="/weekly" onClick={show}>
                <img id="weekly" src="./images/weeklytask-icon.png"></img>
                Weekly Tasks
                </NavLink>

            <NavLink className="links" to="/monthly" onClick={show}>
                <img id="monthly" src="./images/monthlytask-icon.png"></img>
                Monthly Tasks
            </NavLink>

            <NavLink className="links" to="/yearly" onClick={show}>
                <img id="yearly" src="./images/yearlytask-icon.png"></img>
                Yearly Tasks
            </NavLink>

            <NavLink className="links" to="/completed" onClick={show}>
                <img id="completed" src="./images/completedtask-icon.png"></img>
                Completed Tasks
            </NavLink>

        </section>
    );
};

export default Sidebar;
        
        
        