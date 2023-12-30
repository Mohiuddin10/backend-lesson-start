import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
    const users = useLoaderData();
    console.log(users);

    const handleAddUser = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = {name, email};
        console.log(user);
        fetch('http://localhost:5000/users', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log('inside post response', data);
        })
    }

    return (
        <div>
            <h3>Users: {users.length}</h3>
            {
                users.map(user => <li key={user.id}><Link  to={`/users/${user.id}`}>{user.name}</Link></li>)
            }
            <form action="" onSubmit={handleAddUser}>
                <input type="text" name="name" placeholder="Enter your name" id="" />
                <br />
                <input type="email" name="email" placeholder="Enter your email" id="" />
                <br />
                <input type="submit" value="add user" />
            </form>
            
        </div>
    );
};

export default Users;