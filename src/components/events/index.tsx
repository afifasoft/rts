import {useState} from 'react';
import DatePicker from "react-datepicker";


export const EventComponent = () => {
    const[startDate, setStartDate] = useState(new Date());
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event);
    }
     return <div>
            <input  onChange={onChange}/>
            <DatePicker selected={startDate} onChange={(date:Date) => setStartDate(date)}/>
        </div>
}