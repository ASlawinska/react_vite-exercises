
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";


export default function CreateAccountPage() {
        const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState()

    const navigate = useNavigate()

    async function createAccount() {
        if(password !== confirmPassword){
            setError('Password and confirm password do not match!')
            return;
        }

        try{
            await createUserWithEmailAndPassword(getAuth(), email, password);
            navigate('/articles')
        } catch(e) {
            setError(e.messege);
        }
    }

    return (
        <>
            <h3>Create account</h3>
                    {error && <p>{error}</p>}
                    <input 
                    type="text" 
                    placeholder="Your email adress"  
                    value={email} 
                    onChange={e => setEmail(e.target.value)}/>
                    <input 
                    type="password" 
                    placeholder="Your password"  
                    value={password} 
                    onChange={e => setPassword(e.target.value)}/>
                    <input type="password" 
                    placeholder="Confirm password"  
                    value={confirmPassword} 
                    onChange={e => setConfirmPassword(e.target.value)}/>
                    <button onClick={createAccount}>Create an account</button>
                    <Link to='/login'>Already have an account? Log in. </Link>
        </>
        
    );
}
