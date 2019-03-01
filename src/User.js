import React from 'react';
const User = (props) => (
    <div key={props.User.id}>
        <p>{`${props.user.name} by ${props.user.email}`}</p>
    </div>
);
export default User;