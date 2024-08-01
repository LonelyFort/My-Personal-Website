import { FaChevronDown, FaChevronUp } from "react-icons/fa"

export default function DropdownButton({children, open,  toggle}) {
    return (
        <div onClick={toggle}
            className={`dropdown-btn ${open 
                ? "button-open" 
                : null}`}
        >
            {children}
            <span className="toggle-icon">
                {open ? <FaChevronUp/> 
                    : <FaChevronDown/>}
            </span>
        </div>
    )
}