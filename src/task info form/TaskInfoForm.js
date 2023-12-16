const TaskInfoForm = (props) => {
    return (
        <>
            <label className="w-full block text-lg text-gray-500">
                {props.label}
            </label>

            <input
                className={props.css}
                type={props.type}
                title={props.title}
                value={props.value}
                onChange={props.change}
                required={props.required}
                readOnly={props.readOnly}  >
            </input>

        </>
    );
};

export default TaskInfoForm;