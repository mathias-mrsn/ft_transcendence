export function LoginButton() {

    function LoginButton () {
        console.log('Login Button Clicked');
        fetch('http://localhost:3000/api/auth/login').then((result) => {
            return result;
        })
    }

    return (
        <button onClick={LoginButton}>Log In</button>
    );
}