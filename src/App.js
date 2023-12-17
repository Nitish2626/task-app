import Navigation from './Navigation/Navigation';
import AddTask from './AddTask/AddTask';
import Hourly from './AllTask/HourlyTask';
import Weekly from './AllTask/WeeklyTask';
import Daily from './AllTask/DailyTask';
import Monthly from './AllTask/MonthyTask';
import Yearly from './AllTask/YearlyTask';
import Completed from './AllTask/CompletedTask';
import Ongoing from './AllTask/OngoingTask';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Sidebar from './side-bar/Sidebar';

function App() {

  const [sho, setSho] = useState(true);

  const hideCreateTask = (s) => {
    setSho(s);
  }

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
        <Navigation />
        <Sidebar />

        {sho && <AddTask onAddTemplate={onAddTemplateHandler} sh={hideCreateTask} />}

        

        <Routes>

          <Route path=""></Route>

          <Route path="/hourly" element={<Hourly value={hourly} /> }></Route>

          <Route path="/daily" element={<Daily value={daily} />}></Route>

          <Route path="/weekly" element={<Weekly value={weekly} />}></Route>

          <Route path="/monthly" element={<Monthly value={monthly} />}></Route>

          <Route path="/yearly" element={<Yearly value={yearly} />}></Route>

          <Route path="/ongoing" element={<Ongoing />}></Route>

          <Route path="/completed" element={<Completed />}></Route>

        </Routes>
      </Router>
    </>
  );
}

export default App;
