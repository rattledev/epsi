import "../styles/Cap.css";
import { useState} from "react";
export const Cap = ({onClick}) => {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });


    const handleMouseDown = (e) => {
        const cap = e.currentTarget.getBoundingClientRect();
        const clientX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
        const clientY = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;
        const x = clientX - cap.left - cap.width / 2;
        const y = clientY - cap.top - cap.height / 2;

        setRotation({ x: y / 6, y: -x / 6 });

    };

    const handleMouseUp = () => {
        setRotation({ x: 0, y: 0 });
    };
    return (
        <div className={"cap"}  onMouseDown={handleMouseDown}
             onMouseUp={handleMouseUp}
             onTouchStart={handleMouseDown}
             onTouchEnd={handleMouseUp}
             onClick={onClick}
             style={{
                 transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
             }}>
        <img  className={"cap-image"} src={"./images/test.jpg"} alt={"cap"}/>
        </div>
    )
}