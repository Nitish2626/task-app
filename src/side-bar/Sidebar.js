import "./Sidebar.css";
import homeIcon from "../images/home-icon.png";
import aboutIcon from "../images/about-icon.png";
import ongoingIcon from "../images/ongoingtask-icon.png";
import hourlyIcon from "../images/hourlytask-icon.png";
import dailyIcon from "../images/dailytask-icon.png";
import weeklyIcon from "../images/weeklytask-icon.png";
import monthlyIcon from "../images/monthlytask-icon.png";
import yearlyIcon from "../images/yearlytask-icon.png";
import completedIcon from "../images/completedtask-icon.png";
import Navlink from "../components/navlink/Navlink";
 
const Sidebar=()=>{
    return(
        <section className="w-9/12 flex flex-col justify-center fixed bg-white right-0 rounded-lg px-1 py-2 z-10 shadow-[2px_2px_10px_0px_black]">

            <button className="links" id="add-task">
                <img id="add" src="./images/addtask-icon.png"></img>
                Add New Task
            </button>
            <hr />

            <Navlink to="/home" src={homeIcon} link="Home" />

            <Navlink to="/about" src={aboutIcon} link="About" />

            {/* <NavLink className="links" to="/home">
                <img id="home" src="./images/home-icon.png"></img>
                Home
            </NavLink>

            <NavLink className="links" to="/about">
                <img id="about" src="./images/about-icon.png"></img>
                About Us
            </NavLink>

            <NavLink className="links" to="/ongoing">
                <img id="ongoing" src="./images/ongoingtask-icon.png"></img>
                Ongoing Tasks
            </NavLink>

            <NavLink className="links" to="/hourly">
                <img id="hourly" src="./images/hourlytask-icon.png"></img>
                Hourly Tasks
            </NavLink>

            <NavLink className="links" to="/daily">
                <img id="daily" src="./images/dailytask-icon.png"></img>
                Daily Tasks
            </NavLink>

            <NavLink className="links" to="/weekly">
                <img id="weekly" src="./images/weeklytask-icon.png"></img>
                Weekly Tasks
                </NavLink>

            <NavLink className="links" to="/monthly">
                <img id="monthly" src="./images/monthlytask-icon.png"></img>
                Monthly Tasks
            </NavLink>

            <NavLink className="links" to="/yearly">
                <img id="yearly" src="./images/yearlytask-icon.png"></img>
                Yearly Tasks
            </NavLink>

            <NavLink className="links" to="/completed">
                <img id="completed" src="./images/completedtask-icon.png"></img>
                Completed Tasks
            </NavLink> */}

        </section>
    );
};

export default Sidebar;
        
        
        