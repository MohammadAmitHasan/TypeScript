import React, { ChangeEvent, FormEvent, useState } from 'react';
interface User {
    name: string,
    age: number,
}
const Counter = () => {
    const [count, setCount] = useState<number>(0)
    const [user, setUser] = useState<User | null>(null)
    const handleUp = (): void => {
        setCount(count + 1)
    }
    const handleDown = (): void => {
        setCount(count - 1)
    }
    //Input data field e.target.name.value handle
    const handleUserSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userData = {
            name: 'Adan',
            age: 45,
        }
        setUser(userData)
    }
    // Input change events handle
    const handleNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
    }

    return (
        <div>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <button onClick={handleUp}>Up</button>
            <button style={{ marginLeft: '5px' }} onClick={handleDown}>Down</button>
        </div>
    );
};

export default Counter;