interface LoginPageProps {
    
}
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function LoginPage(props: LoginPageProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState()

    const navigate = useNavigate()

    async function logIn() {

        try{
            await signInWithEmailAndPassword(getAuth(), email, password);
            navigate('/articles')
        } catch(e) {
            setError(e.messege);
        }
    }
    

    return (
        <>
        <h3>Log In</h3>
        {error && <p>{error}</p>}
        <input type="text" placeholder="Your email adress"  value={email} onChange={e => setEmail(e.target.value)}/>
        <input type="password" placeholder="Your password"  value={password} onChange={e => setPassword(e.target.value)}/>
        <button onClick={logIn}>Log In</button>
        <Link to='/create-account'>Don't have an account? Create one here</Link>
        </>
        
    );
}
