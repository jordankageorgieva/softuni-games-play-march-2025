import { Link, useNavigate } from "react-router";

export default function LoginPage({
    login
}) {
    const navigate = useNavigate();

    const loginAction = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email');
        login(email);

        navigate("/games");

    }
    return (
        <>
            {/* <!-- Login Page ( Only for Guest users ) --> */}
            <section id="login-page" className="auth">
            <form id="login" onSubmit={loginAction}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Sokka@gmail.com" />
                    <label htmlFor="login-pass">Password:</label>
                    <input type="password" id="login-password" name="password" fdprocessedid = "45q4he" />
                    <input type="submit" className="btn submit" value="Login" />
                    <p className="field">
                        <span>If you don't have profile click <Link to="/register">here</Link></span>
                    </p>
                </div>
            </form>
            </section>
        </>

    );

}