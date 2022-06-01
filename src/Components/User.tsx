import React, { FC } from 'react';
import UserModel from '../Types/Models';

interface Props {
    user: UserModel,
    addUser: (user: UserModel) => void
}

const User: FC<Props> = ({ user, addUser }) => {
    return (
        <div>
            <h2>{user.name}</h2>
            <button onClick={() => addUser(user)}>Add Me</button>
        </div>
    );
};

export default User;