import accomodations from '../../data/data.json';
import Card from '../../compoments/cards/Card';
import imgBannerHome from '../../assets/banner-falaises.png'
import Banner from '../../compoments/banner/Banner'
import '../home/Home.scss'


 function Home() {
	return (
        <div className='Home'>
            <Banner image = {imgBannerHome} title = "Chez vous, partout et ailleurs" imageClassName="home-banner-img" banner ="home-banner" alt ="paysage de falaises sur un littoral " />
        <section className='center-container'>   
        <section className='container-cards'>
        {accomodations.map((accomodation)=> (
            <Card key={accomodation.id} id={accomodation.id} title={accomodation.title} cover={accomodation.cover} />
        ))}
        </section>
        </section> 
        </div>
	)
	
	
}
export default Home 