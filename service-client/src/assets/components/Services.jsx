import { Link, useLoaderData } from "react-router-dom";

const Services = () => {
    const services = useLoaderData();
    
    return (
        <div>
            <h2>Total Services: {services.length}</h2>
            {
                services.map(service => <li key={service.id}><Link to={`/services/${service.id}`}>{service.title}</Link></li>)
            }
        </div>
    );
};

export default Services;