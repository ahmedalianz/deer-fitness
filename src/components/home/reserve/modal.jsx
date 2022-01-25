import { Modal, Button, Form } from 'react-bootstrap'
import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-toastify'
export default function ModalApper(props) {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // const x = await axios('https://geolocation-db.com/json/')
            // await axios.post(`https://evening-meadow-95836.herokuapp.com/class/addIp/`, {
            //     ip: x.data.IPv4, classId: props.modalContent._id
            // })
            await axios.patch(`https://evening-meadow-95836.herokuapp.com/class/reserveClass/${props.modalContent._id}`, {
                name, phone
            })
            toast.success('تم حجز الكلاس سيتم التواصل معك')
        }
        catch (err) {
            console.log(err)
            toast.error('هناك خطأ ما حاولي الدخول من متصفح جوجل كروم')

            if (err.response.data.data === 'sorry') {
                toast.error('عذرا تم اكتمال حجز هذا الكلاس')
            }
            else if (err.response.data.data === 'exist') {
                toast.error('عذرا لايمكنك التسجيل اكثر من مره')
            }
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
                <h4>حجز
                    <span className='text-danger mx-2'>
                        {
                            props.modalContent ?
                                <>
                                    {props.modalContent.className} {props.modalContent.time}
                                </>
                                :
                                'Loading . .'
                        }

                    </span>
                </h4>
                <Form onSubmit={e => handleSubmit(e)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control required type="text" placeholder="ادخلي اسمك ثلاثي" value={name} onChange={e => setName(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control required type="text" placeholder="ادخلي رقم الهاتف" value={phone} onChange={e => setPhone(e.target.value)} />
                    </Form.Group>
                    <Button variant='dark' type="submit">حجز</Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='dark' onClick={props.onHide}>إغلاق</Button>
            </Modal.Footer>
        </Modal>
    )
}
