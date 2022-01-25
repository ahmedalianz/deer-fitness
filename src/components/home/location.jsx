import { Container } from 'react-bootstrap'

export default function Location() {
    return (
        <Container className='gallery'>
            <h1>
                موقعنا على الخريطة
            </h1>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d573770.12110901!2d39.97457231058604!3d21.3763875403291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c21bd3f90be3e7%3A0x3404d337c871bda8!2zZGVlciBmaXRuZXNzINmE2YrYp9mC2Kkg2KfZhNi62LLYp9mE!5e0!3m2!1sar!2sde!4v1641065518241!5m2!1sar!2sde" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" title="لياقه الغزال" loading="lazy"></iframe>
            </div>
        </Container>
    )
}
