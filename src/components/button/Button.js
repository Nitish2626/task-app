const Button = (props) => {
    return (
        <button className="w-6 h-6 flex items-center justify-center rounded-full cursor-pointer z-10 hover:bg-white" onClick={props.click}>
            <img src={props.src} className={`${props.width} ${props.height}`}></img>
        </button>
    );
}

export default Button;