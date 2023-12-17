import { NavLink } from "react-router-dom";

const Navlink = (props) => {
    return (
        <NavLink
            to={props.to}
            className="flex items-center text-black text-xl cursor-pointer pl-1 py-1">
            
            <img
                src={props.src}
                className="w-6 h-6 mr-5">
            </img>

            {props.link}
        </NavLink>
    );
}

export default Navlink;