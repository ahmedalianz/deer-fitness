import { Modal, Button, Form } from 'react-bootstrap'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
export default function ModalApper(props) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  useEffect(() => {
    if (props.modalContent) {
      setName(props.modalContent.userName)
      setPhone(props.modalContent.phone)
    }
  }, [props.modalContent])
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.patch(
        `https://evening-meadow-95836.herokuapp.com/admin/editProfile/${props.modalContent._id}`,
        {
          userName: name,
          phone,
        },
      )
      toast.success('تم تعديل الحساب')
    } catch (err) {
      console.log(err)
    }
  }
  const handleRemove = async () => {
    try {
      await axios.patch(
        `https://evening-meadow-95836.herokuapp.com/admin/deleteProfile/${props.modalContent._id}`,
      )
      toast.success('تم حذف الحساب')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <h4>
          تعديل حساب
          <span className="text-danger mx-2">
            {props.modalContent ? (
              <>
                {props.modalContent.userName} - {props.modalContent.phone} -{' '}
              </>
            ) : (
              'Loading . .'
            )}
          </span>
        </h4>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              required
              type="text"
              placeholder="اسم الشخص"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              required
              type="text"
              placeholder="رقم التليفون"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>
          <Button className="mx-2" variant="dark" type="submit">
            تعديل
          </Button>
          <Button
            className="mx-2"
            variant="dark"
            type="button"
            onClick={handleRemove}
          >
            حذف
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={props.onHide}>
          إغلاق
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
