import React, { useEffect, useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import { Iuser } from '../interface/user.interface';

const Userpage: React.FC = () => {
    const { user } = useAuthContext();
    const [user2, setUser2] = useState<Iuser | null>(null)

    useEffect(() => {
        setUser2(user);
    }, [user]);

    return (
        <div>
            {user2 ? (
                <div>
                    <h2>Email: {user2.email}</h2>
                    <h2>ID: {user2.id}</h2>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Userpage;
