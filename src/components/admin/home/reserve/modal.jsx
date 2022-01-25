import { Modal, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'
export default function ModalApper(props) {
    const [people, setPeople] = useState([])
    const [noPeople, setNoPeople] = useState('')
    const [show, setShow] = useState(false)
    useEffect(() => {
        if (props.modalContent !== null) {
            setPeople(props.modalContent.people)
            if (props.modalContent.people.length === 0) {
                setNoPeople('لا يوجد اشخاص مسجلون لهذا الكلاس')
            } else {
                setNoPeople('')
            }
            setShow(true)
        }
    }, [])
    return (
        <Modal
            show={show}
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <h4>الاشخاص المسجلون لحجز
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
                <div className="mt-4">
                    <div>
                        {props.modalContent ?
                            <>
                                {people && people.map(p => (
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <span className="mx-2">{people.indexOf(p) + 1}</span>
                                            <span>{p.name}</span>
                                        </div>
                                        <span>{p.phone}</span>
                                    </div>
                                ))}

                            </> : "loading"
                        }
                    </div>
                    <div>
                        {noPeople}
                    </div>

                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='dark' onClick={props.onHide}>إغلاق</Button>
            </Modal.Footer>
        </Modal>
    )
}
