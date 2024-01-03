import { MdKeyboardDoubleArrowUp, MdKeyboardDoubleArrowLeft } from "react-icons/md";
import "./Dragable.css"

const Dragable = ({ isNotSmall }) => {

    return (
        <>
            <div className={"drag " + (isNotSmall ? "right" : "up")}>
                {isNotSmall ? <MdKeyboardDoubleArrowLeft /> : <MdKeyboardDoubleArrowUp />}
            </div>
        </>
    );
}

export default Dragable;
