import React, { useEffect, useState } from 'react';
import UserModel from '../Types/Models';
import User from './User';

const Users = () => {
    const [users, setUsers] = useState<UserModel[]>([])
    const [team, setTeam] = useState<UserModel[]>([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    const handleAddUser = (user: UserModel): void => {
        setTeam([...team, user])
    }

    return (
        <div>
            <h1>Total users: {users.length}</h1>
            <h1>Team size: {team.length}</h1>
            {
                users.map(user => <User user={user} addUser={handleAddUser}></User>)
            }
        </div>
    );
};

export default Users;