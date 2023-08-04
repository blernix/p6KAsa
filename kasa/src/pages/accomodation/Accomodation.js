import '../accomodation/Accomodation.scss'
import Collapse from "../../compoments/collapses/Collapses";
import datas from '../../data/data.json';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Carousel from "../../compoments/carousel/Carousel";
import Error from '../nofound/Nofound';
import StarRed from "../../assets/starGrey.png"
import StarGrey from "../../assets/starRed.png"


export default function Accomodation() {

	const { id } = useParams();	

	const dataCurrentAccomodations = datas.filter(data => data.id === id); 
	const [imageSlider, setImageSlider] = useState([]); 

	useEffect(() => {
		const dataCurrentAccomodations = datas.filter(data => data.id === id);
		if (dataCurrentAccomodations[0] !== undefined){
		setImageSlider(dataCurrentAccomodations[0].pictures);
		}
	}, [id]); 
	
	
//   console.log(dataCurrentAccomodations[0]);
  if (dataCurrentAccomodations[0] !== undefined) {
	

	
		
	

	const name = dataCurrentAccomodations[0].host.name.split(' ');
	const rating = dataCurrentAccomodations[0].rating;
	const description = dataCurrentAccomodations[0].description;
	const equipments = dataCurrentAccomodations[0].equipments;
	

	

	return (
		<>
			<Carousel imageSlider={imageSlider} />
			<main className="announce">
				<div className="announce_content">
					<div className="announce_content_infos">
						<h1>{dataCurrentAccomodations[0].title}</h1>
						<p>{dataCurrentAccomodations[0].location}</p>
						<div className='announce_content_infos_button'>
							{dataCurrentAccomodations[0].tags.map((tag, index) => {
								return (
									<button key={index}>{tag}</button>
								)
							})}
						</div>
					</div>
					<div className="announce_content_host">
						<div className='announce_content_host_profile'>
							<div className='announce_content_host_name'>
								<span>{name[0]}</span>
								<span>{name[1]}</span>
							</div>
							<img src={dataCurrentAccomodations[0].host.picture} alt="host of this announce" />
						</div>

						<div className="announce_content_host_stars">
							{[...Array(5)].map((star, index) => {
								const ratingValue = index + 1; 
								return (
									<img key={index} src={ratingValue <= rating ? StarGrey : StarRed} alt="star" /> 
								)
							})}
						</div>
					</div>
				</div>
				<div className="announce_dropdown">
					<div className="announce_dropdown_item">
						<Collapse title={'Description'} content={description} />
					</div>
					<div className="announce_dropdown_item">
						<Collapse title={'Équipements'} content={equipments} />
					</div>
				</div>
			</main>
		</>
	)
	}					
	else {
	return <Error />; 
	}
}