import { useLoaderData } from "react-router-dom";

const User = () => {
    const user = useLoaderData();
    return (
        <div>
            <h2>Name: {user.name}</h2>
            <p>Email: {user.email}</p>
            
        </div>
    );
};

export default User;