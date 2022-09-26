import { useRef, useState, useEffect } from 'react';

const users = [
    { name : 'Sarah', age: 20},
    { name: 'Alex', age: 23},
    { name: 'Michael', age: 25}
];

export const UserSearch = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [name, setName] = useState('');
    const [user, setUser] = useState<undefined>();

    useEffect(() => {
        inputRef.current?.focus();
    }, []);
    const onClick = () => {
        console.log('Finding the user')
        console.log(name);
        
        const foundUser = users.find((user) => {
            return user.name === name;
        });
        console.log(foundUser);
        
    }
    return (
        <div className="container">
            <h3>User Search</h3>
            <input ref={inputRef} />
        <span>
          
        </span>
            
        </div>
    );
}