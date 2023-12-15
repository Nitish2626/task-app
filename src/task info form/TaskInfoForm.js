const TaskInfoForm=(props)=>{
    return(
        <>
            <label className="text-lg text-gray-500">{props.label}</label>

            <input className="w-full border-2 border-gray-500 rounded-md text-lg py-1 px-2 mb-2" type={props.type} title={props.title} value={props.value} onChange={props.change} required={props.required} readOnly={props.readOnly}></input>

        </>
    );
};

export default TaskInfoForm;