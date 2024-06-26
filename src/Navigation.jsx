import { Link, Outlet } from 'react-router-dom';

export default function Navigation ( ) {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">Refresh</Link></li>
                    <li><Link to="/Page1">Page1</Link></li>
                    <li><Link to="/Page2">Page2</Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}

