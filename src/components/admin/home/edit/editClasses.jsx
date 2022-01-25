import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import EditAddedClasses from './editAddedClasses'
export default function EditClasses() {
    const [classMName, setClassMName] = useState('')
    const [classMTime, setClassMTime] = useState('')
    const [classNName, setClassNName] = useState('')
    const [classNTime, setClassNTime] = useState('')
    const handleMSubmit = async (e) => {
        e.preventDefault();
        await axios.post('https://evening-meadow-95836.herokuapp.com/class/addClass', { className: classMName, time: classMTime, MorN: "M" })
        toast.success('تم اضافه الكلاس بنجاح')
    }
    const handleNSubmit = async (e) => {
        e.preventDefault();
        await axios.post('https://evening-meadow-95836.herokuapp.com/class/addClass', { className: classNName, time: classNTime, MorN: "N" })
        toast.success('تم اضافه الكلاس بنجاح')

    }
    return (
        <>
            <h1>
                تعديل الكلاسات
            </h1>
            <div id='editclasses'>
                <h2>
                    اضافه كلاس جديد للفتره الصباحيه
                </h2>
                <div>
                    <Form onSubmit={e => handleMSubmit(e)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control value={classMName} type="text" placeholder="اسم الكلاس" onChange={e => setClassMName(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control value={classMTime} type="text" placeholder="موعد الكلاس من الساعه .. الي الساعه .." onChange={e => setClassMTime(e.target.value)} />
                        </Form.Group>
                        <Button variant="dark" type="submit">
                            اضافه
                        </Button>
                    </Form>
                </div>
                <h2>
                    اضافه كلاس جديد للفتره المسائيه
                </h2>
                <div>
                    <Form onSubmit={e => handleNSubmit(e)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control value={classNName} type="text" placeholder="اسم الكلاس" onChange={e => setClassNName(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control value={classNTime} type="text" placeholder="موعد الكلاس من الساعه .. الي الساعه .." onChange={e => setClassNTime(e.target.value)} />
                        </Form.Group>
                        <Button variant="dark" type="submit">
                            اضافه
                        </Button>
                    </Form>
                </div>
                <div>
                    <EditAddedClasses />
                </div>

            </div>

        </>
    )
}
