import { useState } from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import { Row, Col, Form } from 'react-bootstrap'
export default function Footer() {
    const [feedback, setFeedback] = useState('')
    const handleSubmitFeedback = (e) => {
        e.preventDefault();
        console.log('submitted')
    }
    return (
        <Row className='footer-bottom'>
            <Col>
                <h3>
                    روابط مهمه
                </h3>
                <div className='links'>
                    <Link to='/account'>الحساب</Link>
                    <Link to='/'>جدول الكلاسات</Link>
                    <Link to='/'>العروض</Link>
                    <Link to='/'>المدربين</Link>
                </div>
            </Col>
            <Col>
                <h3>
                    المزيد
                </h3>
                <div className='links'>
                    <Link to='/'>توصل معنا</Link>
                    <Link to='/'>معلومات عن النادي</Link>
                </div>
            </Col>
            <Col>
                <h3>
                    هل تحتاج لمساعده ؟
                </h3>
                <div className='links'>
                    <Link to='/privacy-policy'>سياسات الخصوصيه</Link>
                    <Link to='/booking-refund'>الحجز والاسترجاع</Link>
                </div>
            </Col>
            <Col>
                <h3>
                    ارسل لنا رأيك
                </h3>
                <div className='feedback'>
                    <Form onSubmit={(e) => handleSubmitFeedback(e)}>
                        <Form.Group className="mb-3">
                            <Form.Control as="textarea" rows={2}
                                value={feedback}
                                onChange={(e) => setFeedback(e.target.value)}
                                placeholder="اكتب رسالتك هنا" />
                        </Form.Group>
                        <button>
                            ارسال <i className="fas fa-chevron-right"></i>
                        </button>
                    </Form>
                </div>
            </Col>
        </Row>
    )
}
