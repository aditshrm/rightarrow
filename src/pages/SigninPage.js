
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
function Signin(){
    return (
        <div className='signin'>
            <TopBar/>
            <h1>Log into Your Account</h1>
            <form id="signinform">
                <input type="text" name="username" placeholder="Username" required/><br />
                <input type="password" name="password" placeholder="Password" id="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required/><br /><br />
                <input type="submit" value="Sign In" />
            </form>
            <a href="/signup">Don't have an account? Sign Up here.</a>
            <a href="/forgotpassword">Forgot Password?</a>
            <Footer/>
        </div>
    );
}
export default Signin;