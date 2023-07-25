import '../nav/Nav.scss'
import logo from '../../assets/logorouge.png';

function Nav() {
    return (
        <header className='navigation'>
            <div className='navLogo'>
            <img src={logo} alt='Kasa' className='kasa-logo' />
            </div>
            <nav className='navbar'>
                <ul>
                    <li className="navLink">Accueil</li>
                    <li className="navLink">A propos</li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav