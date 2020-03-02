import React, {useState} from "react";
import { useHistory } from "react-router-dom";

const Contact = () => {

    const history = useHistory();
    const goBack = () => {
        history.goBack();
    }

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [contactEmail, setContactEmail] = useState(""); 

    const sendEmail = async(e) =>{
        e.preventDefault();

        let email = {
            title,
            content,
            contactEmail
        }

        console.log("sending email", email);
    }


    return(
        <React.Fragment>
           <button className="back" onClick={goBack}> &larr; Go Back</button>

            <form className="contact" onSubmit={sendEmail}>
                <h2>Send me a message so we can start a new project</h2>
                
                <label htmlFor="title">Message Title: </label>
                <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} />
                
                <label htmlFor="content">Message Content: </label>
                <textarea name="content"  onChange={(e) => setContent(e.target.value)}  ></textarea>
            
                <label htmlFor="email">Contact Email: </label>
                <input type="email" name="email" onChange={(e) => setContactEmail(e.target.value)} />

                <input type="submit" value="Send Message" />
            </form>

        </React.Fragment>
    )

}


export default Contact;