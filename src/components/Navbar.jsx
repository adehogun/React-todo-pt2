import './App.css';
const Navbar = () =>{

    return (
        <nav className='navbar'>
            <div className='logo'>LOGO</div>
            <ul>
                <li><a href='#'>Calendar</a></li>
                <li><a href='#'>Contacts</a></li>
                <li><a href='#'>Other List</a></li>
                <li><a href='#'>Appointments</a></li>
                <li><a href='#'>Repeated Tasks</a></li>
                <li><a href='#'>Settings</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;
