import { useState, useEffect } from "react";
import axios from "axios";

function RegisterForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [eMailAddress, setEmailAddress] = useState("");

    const userData = {firstName, lastName, eMailAddress};
    
    useEffect(() => {
        async function registerUser() {
            const data = await axios.post("http://localhost:5001/api/users/register", userData);
        }
    })
    
    return (
        <div>
            <input type="text" placeholder={Name}>
            </input>
        </div>
    )
}

export default RegisterForm
