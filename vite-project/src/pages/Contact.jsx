import { useState } from "react"

export default function Contact(){
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        if(!name || !email || !message){
            alert ('Please fill out all fields')
            return
        }

        console.log("Form submitted", {name, email, message});
        alert ("Thank you for reaching out");

        setName('');
        setEmail('');
        setMessage('');
    };
    
    
    return(
        <div>
            <h1>Contact Me</h1>

            <div className="form-container">
                <div className="name-input">
                    <label>Name</label>
                    <input 
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name" />
                </div>

                <div className="email-input">
                    <label>Email</label>
                    <input 
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email" />
                </div>

                <div className="message-input">
                    <label>Message</label>
                    <input 
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter your message" />
                </div>

            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}