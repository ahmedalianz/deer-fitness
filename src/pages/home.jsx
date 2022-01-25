import Hero from '../components/home/hero/hero'
import Reserve from '../components/home/reserve/reserve'
import Fade from 'react-reveal/Fade';
import Gallery from '../components/home/gallery/gallery';
import Ads from '../components/home/ads/ads';
import Location from '../components/home/location';
import Services from '../components/home/services/services'
export default function Home() {
    return (
        <div>
            <Hero />
            <div className="offers">
                <Fade left>
                    <Reserve
                        url='https://evening-meadow-95836.herokuapp.com/class/showMClass'
                        img="images/offer1.jpg"
                        period="الصباحية"
                        morn={true}
                    />
                </Fade>
                <Fade right>
                    <Reserve
                        url='https://evening-meadow-95836.herokuapp.com/class/showNClass'
                        img="images/offer2.jpg"
                        period="المسائية"
                        morn={false}
                    />
                </Fade>
            </div>
            <Ads />
            <Services />
            <Gallery />
            <Location />
        </div>
    )
}
