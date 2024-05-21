import { Link } from "react-router-dom";


const Navbar = () => {

    const navitem = <>
        <li><Link to='/'>Home</Link></li>

        <li><Link to='/alltoys'>All Toys</Link></li>
        <li><Link to='/mytoys'>My Toys</Link></li>
        <li><Link to='/addtoys'>Add A Toy</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li>
        <li><a href="User profile picture."></a></li>
    </>
    return (
        <div className="navbar bg-base-100 bg-custom-color text-white h-8 p-2 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navitem}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">
                    <div className="avatar">
                        {/* <div className="w- rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://www.shutterstock.com/shutterstock/photos/729932047/display_1500/stock-vector-smart-mind-logo-729932047.jpg" />
                        </div> */}
                    </div>
                    <img className="h-12 w-15 rounded-full" src="data:image/png;base64,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" alt="" />
                    <h4 className="text-white pl-6">BrainBuilders </h4>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navitem}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to ='/login'><button className="btn btn-active btn-ghost">log in</button></Link>
            </div>
        </div>
    );
};

export default Navbar;