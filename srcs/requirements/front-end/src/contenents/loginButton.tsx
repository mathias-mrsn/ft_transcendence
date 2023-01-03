import axios from 'axios';

export function LoginButton() {

    async function LoginButton () {
        console.log('Login Button Clicked');
        // const {data} = await axios.get('http://localhost:3000/api/auth/login',
       
        const res = await fetch('http://localhost:3000/api/auth/login');
        {
            // mode: 'cors',
            // headers: {
            //     'Access-Control-Allow-Origin' : "http://localhost:3000",
            //     "withCredentials": true
            // }
        }
        
        // {mode: 'cors'}
        
        // );

        console.log("salut", res);

    }

    return (
        <button onClick={LoginButton}>Log In</button>
    );
}