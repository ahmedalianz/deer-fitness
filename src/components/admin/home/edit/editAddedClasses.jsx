import { useEffect, useState } from "react"
import MyVerticallyCenteredModal from './modal'
import axios from "axios"
import { Button, Row, Col } from "react-bootstrap"

export default function EditAddedClasses() {
    const [classes, setClasses] = useState([])
    const [modalShow, setModalShow] = useState(false);
    const [modalContent, setModalContent] = useState(null)
    useEffect(() => {
        async function getClasses() {
            try {
                const res1 = await axios('https://evening-meadow-95836.herokuapp.com/class/showMClass')
                const res2 = await axios('https://evening-meadow-95836.herokuapp.com/class/showNClass')
                setClasses(res1.data.data.concat(res2.data.data))
            } catch (err) {
                console.log(err)
            }
        }
        getClasses()
    }, [])
    const handleEdit = (mClass) => {
        setModalContent(mClass)
        setModalShow(true)
    }

    return (
        <div>
            <h2>
                تعديل الكلاسات المضافه
            </h2>
            <Row>
                {classes.map(c => (
                    <Col xs={12} sm={6} md={6} className='mb-2' key={c._id}>
                        <Button variant='dark' onClick={() => handleEdit(c)}>
                            {c.className} {c.time}
                        </Button>
                    </Col>

                ))}
            </Row>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                modalContent={modalContent}
            />

        </div>
    )
}
