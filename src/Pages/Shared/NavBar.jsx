import { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Layout/AuthLayout/AuthProvider";
import logo from '../../assets/logo.png'

const NavBar = () => {

    const { user, signOutUser } = useContext(AuthContext);

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log('Log Out Successfully');
            })
            .catch(error => {
                console.log(error.code);
            })
    }

    const links = <>
        <div className="space-x-5">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/'>Home</NavLink>
        </div>
    </>
    return (
        <div>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <img src={logo} alt="" />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <img src={logo} alt="" className="w-25" />
                    <a className=" text-xl font-bold">Job Portal</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-5">
                    {
                        user ? <>  <button onClick={handleSignOut} className="btn">Sign Out</button>  </> :

                            <><Link to='/register' className="underline">Register</Link>
                                <Link to='/signin' className="btn bg-blue-500 text-white">Sign In</Link> </>
                    }

                </div>
            </div>
        </div>
    );
};

export default NavBar;