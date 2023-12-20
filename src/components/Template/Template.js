import { useState } from 'react';
import AddTask from '../../AddTask/AddTask';
import Button from '../button/Button';
import edit from "../../images/edit-icon.png";
import del from "../../images/delete-icon.png";

const Template = (props) => {

    const [showTask,setShowTask]=useState(false);

    const task=()=>{
        setShowTask(true);
    }

    return (
        <>
            <div className="w-full relative rounded-lg px-4 py-1 my-4 z-0 animate-[fade_3s_linear_1] before:w-full before:bg-[url('/src/images/task-template.jpeg')] before:bg-cover before:absolute before:bg-no-repeat before:rounded-lg before:top-0 before:left-0 before:right-0 before:bottom-0 before:opacity-40">

                <h5 className="relative text-xl font-bold text-blue-900">
                    homework
                </h5>
                <h1 className='relative text-center text-red-600 text-2xl font-bold my-2'>
                    0d : 4h : 4m 
                </h1>
                <section className='flex gap-2 justify-end'>
                    <Button src={edit} click={task} width="w-4" height="h-4" />
                    <Button src={del} click={props.value} width="w-5" height="h-5" />
                </section>
            </div>
            {showTask && <AddTask />}
        </>
    );
}
export default Template;