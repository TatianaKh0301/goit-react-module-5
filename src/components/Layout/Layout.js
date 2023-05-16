import { Outlet, NavLink } from "react-router-dom"

export const Layout = () => {
    return(
        <div>
            <header>
                <nav>
                    <NavLink to="/">Home page</NavLink>
                    <NavLink to="/dogs">Collection</NavLink>
                </nav>
            </header>            
            <main>
                <Outlet />
            </main> 
            <footer>footer</footer>          
        </div>
    );
    
}