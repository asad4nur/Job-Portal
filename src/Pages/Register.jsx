import Lottie from "react-lottie";
import { Link } from "react-router";
import registerLottieAnimation from '../assets/register.json';
import { useContext } from "react";
import { AuthContext } from "../Layout/AuthLayout/AuthProvider";
import SocialLogin from "./Shared/SocialLogin";

const Register = () => {

    const { createUser } = useContext(AuthContext)

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: registerLottieAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        //Password validation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/;
        if (!passwordRegex.test(password)) {
            alert("Password must be at least 8 characters, and include uppercase, lowercase, number, and special character.");
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.code);
            })

    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <Lottie options={defaultOptions} height={400} width={400} />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="m-5 text-5xl font-bold text-center">Register now!</h1>
                    <div className="card-body text-center">
                        <form onSubmit={handleRegister} className="fieldset">
                            <label className="label">Full Name</label>
                            <input type="text" name="name" className="input" placeholder="Email" />
                            <label className="label">Email</label>
                            <input type="email" name="email" className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name="password" className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Register</button>
                            <p>Already Have Account? <Link to='/signin'>Sign In</Link></p>
                        </form>
                        <SocialLogin/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;