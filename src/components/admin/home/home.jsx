import { Container } from 'react-bootstrap'
import EditClasses from './edit/editClasses'
import './adminhome.css'
import Reserve from './reserve/reserve'
export default function Home() {
    return (
        <Container className="admin-home">
            <Reserve />
            <EditClasses />

        </Container>
    )
}
