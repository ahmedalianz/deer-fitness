import { Container } from 'react-bootstrap'
import ReactIntense from 'react-intense'
import './gallery.css'
export default function Gallery() {
    const images = [
        { images: 'images/gallery/1.webp', title: "أفضل الاجهزه" },
        { images: 'images/gallery/2.webp', title: "وجبات خفيفه" },
        { images: 'images/gallery/3.webp', title: "العاب للاطفال" },
        { images: 'images/gallery/4.webp', title: "أفضل الاجهزه" },
        { images: 'images/gallery/5.webp', title: "أفضل الاجهزه" },
        { images: 'images/gallery/6.webp', title: "أفضل الاجهزه" },
        { images: 'images/gallery/7.webp', title: "أفضل الاجهزه" },
        { images: 'images/gallery/8.webp', title: "أفضل الاجهزه" },
        { images: 'images/gallery/9.webp', title: "أفضل الاجهزه" },
    ]

    return (
        <Container className='gallery'>
            <h1>
                صور النادي
            </h1>
            <div className="images-cont">
                {
                    images.map(i => (
                        <div key={i.images}>
                            <ReactIntense src={i.images} title={i.title} />
                        </div>
                    ))
                }
            </div>
        </Container>
    )
}
