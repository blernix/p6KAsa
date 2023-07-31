import imgBannerAbout from '../../assets/banner-montagnes.png'
import Banner from '../../compoments/banner/Banner'
import Collapse from '../../compoments/collapses/Collapses'
import collapsesData from '../../compoments/collapses/Collapses.json'
import './About.scss'


 function About() {
    return (
        <div className='about'>
            <Banner image= {imgBannerAbout} imageClassName='about-banner-image' banner='about-banner' imageAlt='paysage montagne'/>
            <section className='container-collapses'>
            {collapsesData.map((data)=> (
                <Collapse key={data.id} id={data.id} title={data.title} content={data.description} />
            ))
            
            }
            </section>
        </div>
    )
}

export default  About;
