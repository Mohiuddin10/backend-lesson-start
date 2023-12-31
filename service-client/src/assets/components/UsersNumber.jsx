import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const UsersNumber = () => {
    const [userNumbers, setUserNumbers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/user-numbers')
        .then(res => res.json())
        .then(data => setUserNumbers(data))
    },[userNumbers])

    const handleNumberSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const newUser = {name, phone};
        console.log(newUser);
        fetch('http://localhost:5000/user-numbers', {
            method: 'post',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data => {
            setUserNumbers(data);
        })
    }
    return (
        <div>
            <h3>Total Number of users: {userNumbers.length}</h3>
            {
                userNumbers.map(userNumber => <li key={userNumber.id}><Link to={`/usersNumber/${userNumber.id}`}>{userNumber.id} {userNumber.name}</Link></li>)
            }

            <form action="" onSubmit={handleNumberSubmit}>
                <input type="text" name="name" placeholder="Name" id="" />
                <br />
                <input type="tel" name="phone" placeholder="phone number" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            
        </div>
    );
};

export default UsersNumber;