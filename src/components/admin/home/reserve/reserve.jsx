import { Button, Row, Col } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
export default function Reserve() {
    const [classes1, setClasses1] = useState([])
    const [classes2, setClasses2] = useState([])
    useEffect(() => {
        async function getClasses() {
            try {
                const res1 = await axios('https://evening-meadow-95836.herokuapp.com/class/showMClass')
                const res2 = await axios('https://evening-meadow-95836.herokuapp.com/class/showNClass')
                setClasses1(res1.data.data)
                setClasses2(res2.data.data)
            } catch (err) {
                console.log(err)
            }
        }
        getClasses()
    }, [])

    return (
        <div>
            <h1>
                عرض الحجز
            </h1>
            <div id='resrve'>
                <h2>
                    حجز الفتره الصباحيه
                </h2>
                <Row>
                    {classes1.map(c => (
                        <Col xs={12} sm={6} md={6} className='mb-2' key={c._id}>
                            <Link to={`/singleClass/${c._id}`}>
                                <Button variant='dark'>
                                    {c.className} {c.time}
                                </Button>
                            </Link>
                        </Col>

                    ))}
                </Row>
                <h2>
                    حجز الفتره المسائيه
                </h2>
                <Row>
                    {classes2.map(c => (
                        <Col xs={12} sm={6} md={6} className='mb-2' key={c._id}>
                            <Link to={`/singleClass/${c._id}`}>
                                <Button variant='dark'>
                                    {c.className} {c.time}
                                </Button>
                            </Link>
                        </Col>

                    ))}
                </Row>


            </div>
        </div>
    )
}
