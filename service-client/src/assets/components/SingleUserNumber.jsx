import { useLoaderData } from "react-router-dom";


const SingleUserNumber = () => {
    const singleUser = useLoaderData();
    console.log(singleUser);

    return (
        <div>
            <h3>{singleUser.name} : {singleUser.phone}</h3>
        </div>
    );
};

export default SingleUserNumber;