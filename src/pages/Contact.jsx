import { useState } from "react";
function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        alert("Thank you! Your message has been submitted.");

        setName("");
        setEmail("");
        setMessage("");
    }
    return (
        <div className="page">
            <h1>Contact Us</h1>
            <p>Have any questions? Send us a message.</p>
            <form className="contact-form" onSubmit={handleSubmit}>
                <label>Name</label>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={function (e) {
                        setName(e.target.value);
                    }}
                    required
                />
                <label>Email</label>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={function (e) {
                        setEmail(e.target.value);
                    }}
                    required
                />
                <label>Message</label>
                <textarea
                    placeholder="Write your message"
                    value={message}
                    onChange={function (e) {
                        setMessage(e.target.value);
                    }}
                    rows="5"
                    required
                ></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
export default Contact;