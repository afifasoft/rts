import {useState} from 'react';
import DatePicker from "react-datepicker";


export const EventComponent = () => {
    const[startDate, setStartDate] = useState(new Date());
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event);
    }
    const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
        console.log(event);
    }
     return <div>
            <input  onChange={onChange}/>
            <div draggable onDragStart={onDragStart}>Drag me!</div>
        </div>
}