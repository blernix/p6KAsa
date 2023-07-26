import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../cards/Card.scss';

export default function Card({id, title, cover}) {
    return (
        <Link to={`/accomodation/${id}`} className="card">
        <img src={cover} alt="logement"/>
        <span className='title-card'>{title}</span>
        
        </Link> 
        
    )
}

Card.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string,

}
