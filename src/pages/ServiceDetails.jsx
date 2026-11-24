import { useParams, Link } from "react-router-dom";
function ServiceDetails() {
    const { id } = useParams();
    let serviceName = "";
    if (id === "1") {
        serviceName = "Web Development";
    } else if (id === "2") {
        serviceName = "Graphic Design";
    } else if (id === "3") {
        serviceName = "Digital Marketing";
    }
    return (
        <div className="page">
            <h1>{serviceName}</h1>
            <p>
                You are viewing the details of {serviceName}.
            </p>
            <Link to="/services">Back to Services</Link>
        </div>
    );
}
export default ServiceDetails;