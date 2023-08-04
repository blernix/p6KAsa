import logo from '../../assets/logonoir.png';
import '../../compoments/footer/Footer.scss'

function Footer() {
    return (
        <div className='footer'>
        <div className='nav-logo'>
        <img src={logo} alt='Kasa' className='kasa-logonoir' />
        </div>
        <div className='copyright'>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    </div>
    )
}

export default Footer