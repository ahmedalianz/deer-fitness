import { Container, Row, Col } from "react-bootstrap"
import './reserve.css'
import { useEffect, useState } from "react"
import MyVerticallyCenteredModal from './modal'
import axios from "axios"
import Loader from "react-loader-spinner";

export default function Reserve({ url, img, period, morn }) {
    const [classes, setClasses] = useState([])
    const [modalShow, setModalShow] = useState(false);
    const [modalContent, setModalContent] = useState(null)
    const [openReserve, setOpenReserve] = useState(false)
    const [loader, setLoader] = useState(
        <Loader
            type="Oval"
            color="#00BFFF"
            height={200}
            width={200}
        />
    )
    const [warning, setWarning] = useState('عفوا الحجز مغلق الان حاولي الدخول في الساعة العاشرة مساءً وحتي الرابعة عصراً بتوقيت السعودية')
    useEffect(() => {
        async function getClasses() {
            try {
                const res = await axios(url)
                setClasses(res.data.data)
                setTimeout(() => {
                    setLoader('لايوجد كلاسات متاحة الان حاولي مره اخري')
                }, 5000)
            } catch (err) {
                console.log(err)
            }
        }
        getClasses()
    }, [])
    useEffect(() => {
        const d = new Date();
        const local = d.getTime();
        const offset = d.getTimezoneOffset() * (60 * 1000);
        const utc = new Date(local + offset);
        const riyadh = new Date(utc.getTime() + (3 * 60 * 60 * 1000));
        const friTest = riyadh.toString();
        let time = riyadh.toLocaleString('en-US', { hour: 'numeric', hour12: false })
        if (time >= 16 && time < 22) {
            return;
        } else {
            if (friTest.includes('Thu')) {
                if (time < 16) {
                    setOpenReserve(true)
                } else {
                    setWarning('عفواً الحجز مغلق اليوم')
                }
            } else if (friTest.includes('Fri')) {
                if (time < 16) {
                    setWarning('عفواً الحجز مغلق اليوم')
                } else {
                    if (!morn) {
                        setOpenReserve(true)
                    } else {
                        setWarning("عفوا الكلاسات الصباحية مغلقة اليوم")
                    }
                }
            } else if (friTest.includes('Sat')) {
                if (time < 16) {
                    if (!morn) {
                        setOpenReserve(true)
                    } else {
                        setWarning("عفوا الكلاسات الصباحية مغلقة اليوم")
                    }
                } else {
                    setOpenReserve(true)
                }
            } else {
                setOpenReserve(true)
            }
        }
    }, [])
    const handleReserve = (mClass) => {
        setModalContent(mClass)
        setModalShow(true)
    }
    return classes.length > 0 ? (
        <Container className='reserve'>
            <h1>
                حجز الحضور لكلاسات النادي <span> الفترة {period}</span>
            </h1>
            <Row>
                <Col xs={12} md={6}>
                    <div className="img-cont">
                        <img src={img} alt="" />
                    </div>
                </Col>
                <Col xs={12} md={6} >
                    <h3>اختاري الموعد المناسب</h3>
                    <Row>{
                        openReserve ? <>
                            {classes.filter(c => c.visible === true).map(c => (
                                <Col xs={12} sm={6} md={6} className='mb-2' key={c.id}>
                                    <button onClick={() => handleReserve(c)}>
                                        {c.className} {c.time}
                                    </button>
                                </Col>
                            ))}
                        </> : <>
                            <div>
                                <h2 className="text-danger">
                                    {warning}
                                </h2>
                            </div>
                        </>
                    }
                    </Row>
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        modalContent={modalContent}
                    />

                </Col>
            </Row>
        </Container>
    ) : (
        <div className="d-flex justify-content-center align-content-center p-4">
            <h2 className='text-danger'>
                {loader}
            </h2>
        </div>
    )
}
