import { useActionState } from "react";
import { Link, useNavigate } from "react-router";
import { useLogin } from "../../api/authApi";

export default function LoginPage({
    onLogin
}) {
    const navigate = useNavigate();
    //useLogin is a custom hook and we use the function login to send the data
    const {login} = useLogin();

    // previusstate can be _ - in JS this value is not nessecary 
    const loginHandler = async (previusstate, formData) => {
     
        const state = Object.fromEntries(formData);

        // we use the login function in the costom hook to make a POST request with email + pass
        const authData = await login(state.email, state.password);

        onLogin(authData);

        navigate("/games");
    }

    // state can be _  [ in JS underscore _ means that this value is not nessecary]
    const [state, loginAction, isPending] = useActionState(loginHandler, {email: '', password: ''});
    
    
    return (
        <>
            {/* <!-- Login Page ( Only for Guest users ) --> */}
            <section id="login-page" className="auth">
            <form id="login" action={loginAction}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Sokka@gmail.com" autoComplete="email"/>
                    <label htmlFor="login-pass">Password:</label>
                    <input type="password" id="login-password" name="password" fdprocessedid = "45q4he" autoComplete="password" />
                    <input type="submit" className="btn submit" value="Login" disabled={isPending}/>
                    <p className="field">
                        <span>If you don't have profile click <Link to="/register">here</Link></span>
                    </p>
                </div>
            </form>
            </section>
        </>

    );

}