import { useState } from "react";
import PropTypes from 'prop-types';
import Arrow from '../../assets/Vector.png'
import './Collapses.scss'

const Collapse = ({title, content}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };
    return ( 
        <div className="collapse">
            <div className="title-collapse" onClick={toggleCollapse}>
                <h2>{title}</h2>
                <img className={`arrow ${isOpen ? 'arrow-open' : ''}`} src={Arrow} alt=""></img>
            </div>
            <ul className={isOpen ? 'descriptionCollapse' : 'descriptionCollapse_hidden'}>
          {Array.isArray(content) ? content.map((item, index) => {
            return (
              <li key={index}>{item}</li>
            )
          }) : content
        }
        </ul>
        </div>
    );
};

export default Collapse;

Collapse.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
}