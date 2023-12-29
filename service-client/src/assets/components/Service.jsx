import { useLoaderData } from 'react-router-dom';
import './Service.css'

const Service = () => {
    const service = useLoaderData();
    console.log(service);
    return (
        <div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <img className='service-img' src={service.img} alt="" />
            <h1>Price: {service.price}</h1>
            
        </div>
    );
};

export default Service;