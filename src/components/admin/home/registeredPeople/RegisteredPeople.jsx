import { useEffect, useState } from 'react'
import MyVerticallyCenteredModal from './modal'
import axios from 'axios'
import { Button, Row, Col } from 'react-bootstrap'
export default function RegisteredPeople() {
  const [people, setPeople] = useState([])
  const [modalShow, setModalShow] = useState(false)
  const [modalContent, setModalContent] = useState(null)
  useEffect(() => {
    async function getPeople() {
      try {
        const res = await axios(
          'https://evening-meadow-95836.herokuapp.com/admin/showPeople',
        )
        console.log(res)
        setPeople(res.data.data)
      } catch (err) {
        console.log(err)
      }
    }
    getPeople()
  }, [])
  const handleEdit = (person) => {
    setModalContent(person)
    setModalShow(true)
  }

  return (
    <div id="editpeople">
      <h1>تعديل الحسابات</h1>
      <h2>تعديل حسابات الاشخاص المسجلين</h2>
      <Row>
        {people.map((c) => (
          <Col xs={12} sm={6} className="mb-2" key={c._id}>
            <Button variant="success" onClick={() => handleEdit(c)}>
              {c.userName} - {c.phone}
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
