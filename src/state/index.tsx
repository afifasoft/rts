import { useState } from 'react';
import { GuestProps } from './GustProps';
import { InputComponent } from '../lib/components/input';

import { ButtonComponent } from '../lib/components/button';

export const GuestList = ({label} : GuestProps) => {

    const [name, setName] = useState('');
    const [guests, setGuests] = useState<string[]>([]);

    const onChange = (e : any) => {
        console.log('input change');
        console.log(e.target.value);
        setName(e.target.value);
    }

    const onClick = () => {
        
        console.log('Button Click');
        setName('');
        setGuests([...guests, name]);
    }
    return (
        <div>
            <h3>Guest List</h3>
            <ul>
                { guests.map(guest => <li key={guest}>{guest}</li>)}
            </ul>
            <InputComponent onChange={onChange} text={name}/>
            <ButtonComponent label="Add Guest" onClick={onClick}/>
        </div>
    )
}