import { Navbar, Container, Image, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './navbar.css'
export default function NavBar() {
    const user = JSON.parse(localStorage.getItem('user'))
    return (
        <Navbar className='top-navbar' collapseOnSelect expand="lg">
            <Container>
                <Link to='/'>
                    <Navbar.Brand className='logo'>
                        <Image src='images/logo.png' />
                    </Navbar.Brand>
                </Link>
                {
                    user ? <span>
                        مرحبا <span>{user.userName}</span>
                    </span>
                        : null
                }
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav>
                        <Link to='/'>
                            <button dir="rtl" lang="ar" className='log-in mx-1 bold'>
                                الرئيسيه
                            </button>
                        </Link>
                        {
                            user ?
                                <a href='/login'>
                                    <button dir="rtl" lang="ar" onClick={() => { localStorage.removeItem('user') }} className='log-in mx-1 bold'>
                                        تسجيل الخروج
                                    </button>
                                </a>
                                :
                                <Link to='/register'>
                                    <button dir="rtl" lang="ar" className='log-in mx-1 bold'>
                                        إنشاء حساب
                                    </button>
                                </Link>
                        }

                        {/* <Link to='/tables'>

                            <button dir="rtl" lang="ar" className='log-in mx-1 bold'>
                                جدول الكلاسات
                            </button>
                        </Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
