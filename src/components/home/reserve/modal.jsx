import { Modal, Button } from 'react-bootstrap'
import axios from 'axios'
import { toast } from 'react-toastify'
export default function ModalApper(props) {
    const handleSubmit = async () => {
        toast.info('برجاء الإنتظار لحظات')
        const user = JSON.parse(localStorage.getItem('user'))
        try {
            await axios.patch(`https://evening-meadow-95836.herokuapp.com/class/reserveClass`, { user, clazz: props.modalContent })
            toast.success('تم حجز الكلاس سيتم التواصل معك')
        }
        catch (err) {
            console.log(err)
            if (err.response.data.data === 'sorry') {
                toast.error('عذرا تم اكتمال حجز هذا الكلاس')
            }
            else if (err.response.data.data === 'exist') {
                toast.error('عذرا لايمكنك التسجيل اكثر من مره')
            } else {
                toast.error('هناك خطأ ما حاولي التواصل مع ادارة الموقع')
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
                <h4>هل ترغبين بحجز
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
            </Modal.Body>
            <Modal.Footer>
                <Button variant='primary' onClick={handleSubmit}>حجز</Button>
                <Button variant='dark' onClick={props.onHide}>إغلاق</Button>
            </Modal.Footer>
        </Modal>
    )
}
