import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div>
            <h3>Users: {users.length}</h3>
            {
                users.map(user => <li key={user.id}><Link  to={`/users/${user.id}`}>{user.name}</Link></li>)
            }
            
        </div>
    );
};

export default Users;