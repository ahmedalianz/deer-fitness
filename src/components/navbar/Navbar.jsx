import { Navbar, Container, Image, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './navbar.css'
export default function NavBar() {
    return (
        <Navbar className='top-navbar' collapseOnSelect expand="lg">
            <Container>
                <Link to='/'>
                    <Navbar.Brand className='logo'>
                        <Image src='images/logo.png' />
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav>
                        <Link to='/'>
                            <button dir="rtl" lang="ar" className='log-in mx-1 bold'>
                                الرئيسيه
                            </button>
                        </Link>

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
