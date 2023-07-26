import '../nav/Nav.scss';
import logo from '../../assets/logorouge.png';
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <header className='navigation'>
            <div className='navLogo'>
            <Link to="/" ><img src={logo} alt='Kasa' className='kasa-logo' /></Link>
            </div>
            <nav className='navbar'>
                <ul>
                   <Link to="/"><li className="navLink">Accueil</li></Link>
                    <Link to="/About"><li className="navLink">A propos</li></Link>
                </ul>
            </nav>
        </header>
    )
}

export default Nav