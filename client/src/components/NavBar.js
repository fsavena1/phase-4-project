import { NavLink } from 'react-router-dom'

function NavBar() {

    return (
         <nav className="navbar">
            <div className="Title">
                <NavLink to='/' >
                    <h1> NFT Market</h1>
                </NavLink>
            </div>
            <div></div>
            

        </nav>
    )
}

export default NavBar