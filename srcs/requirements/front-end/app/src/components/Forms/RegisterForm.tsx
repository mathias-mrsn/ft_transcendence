// import axios from 'axios';
import axios from 'axios';
import { useState } from 'react';
import '../../styles/Forms/RegisterForm.css';

export function RegisterForm() {

    const [login, setLogin] = useState('')
    const [mail, setMail] = useState('')
    const [pw, setPW] = useState('')
    const [cpw, setCPW] = useState('')
    // const [error, setError] = useState('')

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        const dto = {
            login: login,
            email: mail,
            password: pw,
        }
        try {
            const response = axios.post('http://localhost:3000/api/auth/register', {
                data: dto
            });    
            console.log(response);
        } catch (err) {
            
        }

        // console.log("\n\n")
        // alert("your login is " + login);
        // console.log("|", login, "|")

    }

    return (
        <>
        <section>
            <div className="register">
                <div className="left">
                    <h2>Sign In</h2>
                    <form className='form' onSubmit={handleSubmit}>
                        <input type="text" onChange={(e) => setMail(e.target.value)} name="email" placeholder='email' />
                        <input type="text" onChange={(e) => setLogin(e.target.value)} name="login" placeholder="login" />
                        <input type="password" onChange={(e) => {
                            setPW(e.target.value);
                        }} name="password" placeholder="password" />
                        <input type="password" onChange={(e) => {
                            setCPW(e.target.value);
                        }} name="confirmed_password" placeholder="confirm password" />
                        
                        <br></br>
                        <button className='button_register' type="submit">Sign In</button>
                    </form>
                </div>
                <div className="right">
                    <h2>You already have an account ?</h2>
                    <button className='btn_redirect'>Login</button>
                </div>
            </div>
        </section>
        </>
    );
}