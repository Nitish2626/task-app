import addTaskIcon from "../images/addtask-icon.png";
import homeIcon from "../images/home-icon.png";
import aboutIcon from "../images/about-icon.png";
import hourlyIcon from "../images/hourlytask-icon.png";
import dailyIcon from "../images/dailytask-icon.png";
import weeklyIcon from "../images/weeklytask-icon.png";
import monthlyIcon from "../images/monthlytask-icon.png";
import yearlyIcon from "../images/yearlytask-icon.png";
import completedIcon from "../images/completedtask-icon.png";
import Navlink from "../components/navlink/Navlink";
 
const Sidebar=(props)=>{

    const showTask=()=>{
        props.addTask(true);
    };

    return(
        <section className="w-56 flex flex-col justify-center fixed bg-white right-0 rounded-lg px-1 py-2 z-10 shadow-[2px_2px_10px_0px_black]">

            <button className="flex items-center text-black text-xl cursor-pointer pl-3 py-1 mb-2 rounded-lg hover:bg-slate-200" onClick={showTask}>
                <img src={addTaskIcon} className="w-6 h-6 mr-5 border-2 border-dashed border-black rounded-full"></img>
                Add New Task
            </button>
            <hr />

            <Navlink to="/home" src={homeIcon} link="Home" />

            <Navlink to="/about" src={aboutIcon} link="About" />

            <Navlink to="/hourly-tasks" src={hourlyIcon} link="Hourly Task" />

            <Navlink to="/daily-tasks" src={dailyIcon} link="Daily Tasks" />

            <Navlink to="/weekly-tasks" src={weeklyIcon} link="Weekly Tasks" />

            <Navlink to="/monthly-tasks" src={monthlyIcon} link="Monthly Tasks" />

            <Navlink to="/yearly-tasks" src={yearlyIcon} link="Yearly Tasks" />

            <Navlink to="/completed-tasks" src={completedIcon} link="Completed Tasks" />

        </section>
    );
};

export default Sidebar;
        
        
        