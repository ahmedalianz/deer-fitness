import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, Link } from "react-router-dom";
import { Button, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify'
export default function SingleClass() {
    const [clazz, setClazz] = useState([])
    const { id } = useParams()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        async function getClazz() {
            const res = await axios(`https://evening-meadow-95836.herokuapp.com/class/getSingleClass/${id}`)
            setClazz(res.data.data)
        }
        getClazz()
    }, [])
    const removePerson = async (p) => {
        try {
            // const x = await axios('https://geolocation-db.com/json/')
            const res = await axios.patch(`https://evening-meadow-95836.herokuapp.com/class/removePerson/${id}/${p._id}`)
            setClazz(res.data.data)
            toast.success('تم حذف الشخص المسجل')
        } catch (err) {
            console.log(err)
        }
    }
    const removeAll = async () => {
        try {
            await axios.patch(`https://evening-meadow-95836.herokuapp.com/class/removeAllPeople/${id}`)
            const newClazz = clazz.people
            newClazz.people = []
            setClazz(newClazz)
            toast.success('تم حذف الكل')
            handleClose()
        } catch (err) {
            console.log(err)
        }

    }
    return (
        <div className="single-class">
            <h1>الاشخاص المسجلون لحجز
                <span className='text-danger mx-2'>
                    {
                        clazz ?
                            <>
                                {clazz.className} {clazz.time}
                            </>
                            :
                            'Loading . .'
                    }
                </span>
            </h1>
            <div className="mt-4">
                <div className='people'>
                    {clazz ?
                        <>
                            <div className="d-flex justify-content-between">
                                <div>
                                    <span>الاسم</span>
                                </div>
                                <span>رقم الهاتف</span>
                                <span>تعديلات</span>
                            </div>

                            {clazz.people && clazz.people.map(p => (
                                <div className="d-flex justify-content-between mt-3" key={p._id}>
                                    <div>
                                        <span className="mx-2 number-badge">{clazz.people.indexOf(p) + 1}</span>
                                        <span>{p.name}</span>
                                    </div>
                                    <span>{p.phone} </span>
                                    <span><Button variant='danger' onClick={() => removePerson(p)}>حذف</Button></span>
                                </div>
                            ))}

                        </> : "loading"
                    }
                </div>{
                    clazz.people && clazz.people.length > 0 && <div className="d-flex justify-content-center align-content-center">
                        <Button variant='danger' onClick={handleShow}>حذف الكل</Button>
                    </div>

                }
            </div>
            <div className='back'>
                <Link to='/admin'>
                    رجوع
                </Link>

            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <p>هل انت متأكد من حذف الكل ؟</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>إغلاق</Button>
                    <Button variant="dark" onClick={removeAll}>حذف الكل</Button>
                </Modal.Footer>
            </Modal>
        </div >
    )
}
