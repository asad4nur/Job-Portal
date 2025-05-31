import Lottie from 'react-lottie';
import signInAnimationData from '../assets/signin.json'
import { Link } from 'react-router';
import { useContext } from 'react';
import { AuthContext } from '../Layout/AuthLayout/AuthProvider';
import SocialLogin from './Shared/SocialLogin';


const SignIn = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: signInAnimationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const { signInUser } = useContext(AuthContext);

    const handleSignIn = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInUser(email, password)
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
                    <p className="py-6">
                        <Lottie options={defaultOptions} height={400} width={400} />
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body text-center">
                        <h1 className="text-5xl font-bold">Sign In!</h1>
                        <form onSubmit={handleSignIn} className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                            <p>Don't have an account <Link to='/register'>Sign In</Link></p>
                        </form>
                        <SocialLogin/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;