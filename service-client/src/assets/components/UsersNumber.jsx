import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UsersNumber = () => {
    const [userNumbers, setUserNumbers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/user-numbers')
        .then(res => res.json())
        .then(data => setUserNumbers(data))
    },[])
    return (
        <div>
            <h3>Total Number of users: {userNumbers.length}</h3>
            {
                userNumbers.map(userNumber => <li key={userNumber.id}><Link to={`/usersNumber/${userNumber.id}`}>{userNumber.id} {userNumber.name}</Link></li>)
            }
            
        </div>
    );
};

export default UsersNumber;