import { useEffect, useState } from 'react';
import cancel from "../images/close.png";
import './AddTask.css'
import TaskInfoForm from '../task info form/TaskInfoForm';

const AddTask = (props) => {

    const [dur, setDuration] = useState();

    const [title, setTitle] = useState("");
    const changeTitle = (events) => {
        setTitle(events.target.value);
    }

    const [sdate, setsdate] = useState("");
    const changeSdate = (events) => {
        setsdate(events.target.value);
    }

    const [edate, setedate] = useState("");
    const changeEdate = (events) => {
        setedate(events.target.value);
    }

    let date, date1;
    let year, month, dat, hours, minutes;
    let year1, month1, dat1, hours1, minutes1;
    let sumyear, summonth, sumdate, sumhours, summinutes;

    let totalmonth, totalday;

    useEffect(() => {
        const duration = () => {
            date = new Date(sdate);
            date1 = new Date(edate);
            console.log('date1:', date);
            console.log("date2:", date1);

            year = date.getFullYear();
            month = date.getMonth();
            dat = date.getDate();
            hours = date.getHours();
            minutes = date.getMinutes();

            year1 = date1.getFullYear();
            month1 = date1.getMonth();
            dat1 = date1.getDate();
            hours1 = date1.getHours();
            minutes1 = date1.getMinutes();

            sumyear = year1 - year;
            summonth = (month1 + 1) - (month + 1);
            sumdate = dat1 - dat;

            if (sumyear == 0 && summonth == 0 && sumdate == 0) {
                if (hours1 >= hours) {
                    sumhours = hours1 - hours;
                }
                else {
                    sumhours = (24 - hours) + hours1;
                }
                if (minutes1 >= minutes) {
                    summinutes = minutes1 - minutes;
                }
                else {
                    summinutes = (60 - minutes) + minutes1;
                    sumhours = sumhours - 1;
                }
                totalday = Math.floor(sumdate);
            }
            else if (sumyear == 0 && summonth == 0 && sumdate == 1) {
                sumhours = (24 - hours) + hours1;
                summinutes = (60 - minutes) + minutes1;

                if (sumhours <= 24) {
                    sumdate = sumdate - 1;
                }
                else {
                    sumhours = hours1 - hours;
                }
                if (summinutes <= 60) {
                    sumhours = sumhours - 1;
                }
                else {
                    summinutes = minutes1 - minutes;
                }
                totalday = Math.floor(sumdate);
            }
            else {
                sumhours = (24 - hours) + hours1;
                summinutes = (60 - minutes) + minutes1;

                if (sumhours <= 24) {
                    sumdate = sumdate - 1;
                }
                else {
                    sumhours = hours1 - hours;
                }
                if (summinutes <= 60) {
                    sumhours = sumhours - 1;
                }
                else {
                    summinutes = minutes1 - minutes;
                }

                totalmonth = summonth + (sumyear * 12);
                totalday = Math.floor(sumdate + (totalmonth * 30.417));
            }

            if (totalday < 0) {
                setDuration("");
            }
            else {
                setDuration(totalday + "d" + " " + ":" + " " + sumhours + "h" + " " + ":" + " " + summinutes + "m");
            }

        };
        duration();

    },[sdate,edate]);

    const [show, setShow] = useState(props.change);
    const [selectOption,setSelectOption]=useState("Hourly");

    const selection = (events) => {
        setSelectOption(events.target.value);
    }

    const submit = (events) => {
        events.preventDefault();
        props.onAddTemplate(title, document.getElementById("duration").value, document.getElementById("task-category").value);
        setTitle("");
        setsdate("");
        setedate("");
        setDuration("");
        setTimeout(() => {
            props.sh(false);
        }, 200)
    }

    // const hide = () => {
    //     props.sh(false);
    // }

    return (
        <div className='w-full h-screen flex items-center justify-center my-1'>

            <div id="create-task" className='w-11/12 absolute bg-white rounded-lg px-3 py-2 z-10'>

                <form onSubmit={submit}>

                    <section className='w-full flex items-center justify-end'>

                        <button id="cancel" className='w-1/12 flex items-center justify-center rounded-full py-1 px-1 hover:bg-slate-300'>

                            <img src={cancel} className='w-3 h-3'></img>

                        </button>

                    </section>

                    <h2 className='text-xl font-semibold mb-1'>Create Task</h2>
                    <hr />

                    <TaskInfoForm type="text" title="Enter a name for the task" value={title} change={changeTitle} label="New Task" required={true} readOnly={false} />

                    <TaskInfoForm type="datetime-local" title="Enter Starting Date and Time of your Task" value={sdate} change={changeSdate} label="Task Start Date and Time" required={true} readOnly={false} />

                    <TaskInfoForm type="datetime-local" title="Enter Ending Date and Time of your Task" value={edate} change={changeEdate} label="Task End Date and Time" required={true} readOnly={false} />

                    <TaskInfoForm type="text" title="How much time will you get to complete your task" label="Task Duration" value={dur} required={false} readOnly={true} />

                    <TaskInfoForm type="text" title="Task Category" value={selectOption} label="Task Category" required={true} readOnly={true} />

                    <select value={selectOption} onChange={selection}>
                        <option className="options" value="Hourly">Hourly</option>
                        <option className="options" value="Daily">Daily</option>
                        <option className="options" value="Weekly">Weekly</option>
                        <option className="options" value="Monthly">Monthly</option>
                        <option className="options" value="Yearly">Yearly</option>
                    </select>

                    <button type="submit">
                        <img id="add-img" src="./images/plus.png"></img>
                        Add
                    </button>

                </form>

            </div>

        </div>
    );
}
export default AddTask;

