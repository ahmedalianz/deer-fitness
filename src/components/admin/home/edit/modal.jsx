import { Modal, Button, Form } from 'react-bootstrap'
import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-toastify'
export default function ModalApper(props) {
    const [name, setName] = useState('')
    const [time, setTime] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`https://evening-meadow-95836.herokuapp.com/class/editClass/${props.modalContent._id}`, {
                className: name, time
            })
            toast.success('تم تعديل الكلاس')
        }
        catch (err) {
            console.log(err)
        }
    }
    const handleRemove = async () => {
        try {
            await axios.delete(`https://evening-meadow-95836.herokuapp.com/class/removeClass/${props.modalContent._id}`)
            toast.success('تم حذف الكلاس')
        }
        catch (err) {
            console.log(err)
        }
    }
    const hideClass = async () => {
        try {
            if (props.modalContent.visible) {
                await axios.patch(`https://evening-meadow-95836.herokuapp.com/class/hideClass/${props.modalContent._id}`, { visible: false })
                toast.success('تم اخفاء الكلاس')
            } else {
                await axios.patch(`https://evening-meadow-95836.herokuapp.com/class/hideClass/${props.modalContent._id}`, { visible: true })
                toast.success('تم اظهار الكلاس')
            }
        }
        catch (err) {
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
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <h4>تعديل
                    <span className='text-danger mx-2'>
                        {
                            props.modalContent ?
                                <>
                                    {props.modalContent.className} {props.modalContent.time} - {props.modalContent.visible ? <span className='text-success'>كلاس متاح</span> : <span className='text-secondary'>كلاس مخفي</span>}
                                </>
                                :
                                'Loading . .'
                        }

                    </span>
                </h4>
                <Form onSubmit={e => handleSubmit(e)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control required type="text" placeholder="اسم الكلاس" value={name} onChange={e => setName(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control required type="text" placeholder="موعد الكلاس" value={time} onChange={e => setTime(e.target.value)} />
                    </Form.Group>
                    <Button className='mx-2' variant='dark' type="submit">تعديل</Button>
                    <Button onClick={hideClass} className='mx-2 text-light' variant='warning' type="button">إخفاء / إظهار</Button>
                    <Button className='mx-2' variant='danger' type="button" onClick={handleRemove}>حذف</Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='dark' onClick={props.onHide}>إغلاق</Button>
            </Modal.Footer>
        </Modal>
    )
}
