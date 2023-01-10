// import axios from 'axios';

export function LoginButton() {

    async function LoginAction () {
        console.log('Login Button Clicked');
        // const {data} = await axios.get('http://localhost:3000/api/auth/login',
       
        const res = await fetch('http://localhost:3000/api/auth/login');

        console.log("salut", res);

    }

    return (
        <button onClick={LoginAction}>Login</button>
    );
}