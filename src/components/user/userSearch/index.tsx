import { useState } from 'react';
//import { UserSeachProps } from './UserSearchProps';
import { UserProps } from './UserProps';
import { ButtonComponent } from '../../../lib/components/button';
import { InputComponent } from '../../../lib/components/input';

import '../../../scss/container/container.scss';
import { EventComponent } from '../../events';

const users = [
    { name : 'Sarah', age: 20},
    { name: 'Alex', age: 23},
    { name: 'Michael', age: 25}
];

export const UserSearch = () => {
    const [name, setName] = useState('');
    const [user, setUser] = useState< UserProps| undefined>();

    const onClick = () => {
        console.log('Finding the user')
        console.log(name);
        
        const foundUser = users.find((user) => {
            return user.name === name;
        });
        console.log(foundUser);
        setUser(foundUser);
    }
    return (
        <div className="container">
            <h3>User Search</h3>
        <span>
            <InputComponent text={name} onChange={(e) => { setName(e.target.value)}} />
            <ButtonComponent label="Find User" onClick={onClick}/>
        </span>
            {user && user.name}
            {user && user.age}
        <EventComponent/>
        </div>
    );
}