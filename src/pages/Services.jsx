import { Link } from "react-router-dom";
function Services() {
    return (
        <div className="page">
            <h1>Our Services</h1>
            <p>Choose a service to learn more about it.</p>
            <div className="service-list">
                <div className="service-item">
                    <h2>Web Development</h2>
                    <p>We create professional and responsive websites.</p>
                    <Link to="/services/1">View Details</Link>
                </div>
                <div className="service-item">
                    <h2>Graphic Design</h2>
                    <p>We create attractive designs for your business.</p>
                    <Link to="/services/2">View Details</Link>
                </div>
                <div className="service-item">
                    <h2>Digital Marketing</h2>
                    <p>We help businesses reach more customers online.</p>
                    <Link to="/services/3">View Details</Link>
                </div>
            </div>
        </div>
    );
}
export default Services;