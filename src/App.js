import Navigation from './Navigation/Navigation';
import AddTask from './AddTask/AddTask';
import Hourly from './AllTask/HourlyTask';
import Weekly from './AllTask/WeeklyTask';
import Daily from './AllTask/DailyTask';
import Monthly from './AllTask/MonthyTask';
import Yearly from './AllTask/YearlyTask';
import Completed from './AllTask/CompletedTask';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Sidebar from './side-bar/Sidebar';
import Template from './components/Template/Template';

function App() {

  const [showAddTask, setShowAddTask] = useState(false);
  const [showSidebar,setShowSidebar]=useState(false);

  const showAddNewTask = (s) => {
    setShowAddTask(s);
  };

  const [hourly, setHourly] = useState([]);
  const [daily, setDaily] = useState([]);
  const [weekly, setWeekly] = useState([]);
  const [monthly, setMonthly] = useState([]);
  const [yearly, setYearly] = useState([]);

  const onAddTemplateHandler = (temptitle, temptime, tasksta) => {
    if(tasksta=="Hourly"){
      setHourly((prevState) => {
        return [...prevState, { title: temptitle, time: temptime, task:tasksta}];
      });
    }
    else if(tasksta=="Daily"){
      setDaily((prevState) => {
        return [...prevState, { title: temptitle, time: temptime, task:tasksta}];
      });
    }
    else if(tasksta=="Weekly"){
      setWeekly((prevState) => {
        return [...prevState, { title: temptitle, time: temptime, task:tasksta}];
      });
    }
    else if(tasksta=="Monthly"){
      setMonthly((prevState) => {
        return [...prevState, { title: temptitle, time: temptime, task:tasksta}];
      });
    }
    else if(tasksta=="Yearly"){
      setYearly((prevState) => {
        return [...prevState, { title: temptitle, time: temptime, task:tasksta}];
      });
    }   
  }
  

  return (
    <>
      <Router>
        <Navigation sidebar={setShowSidebar} />

        {showSidebar && <Sidebar addTask={showAddNewTask} />}

        {showAddTask && <AddTask onAddTemplate={onAddTemplateHandler} addTask={showAddNewTask} />}

        <Routes>

          <Route path="/" element={<Template />}></Route>

          <Route path="/hourly-tasks" element={<Hourly value={hourly} /> }></Route>

          <Route path="/daily-tasks" element={<Daily value={daily} />}></Route>

          <Route path="/weekly-tasks" element={<Weekly value={weekly} />}></Route>

          <Route path="/monthly-tasks" element={<Monthly value={monthly} />}></Route>

          <Route path="/yearly-tasks" element={<Yearly value={yearly} />}></Route>

          <Route path="/completed-tasks" element={<Completed />}></Route>

        </Routes>
      </Router>
    </>
  );
}

export default App;
