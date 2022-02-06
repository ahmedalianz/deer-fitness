import { Navbar, Container, Nav } from 'react-bootstrap'
import './nav.css'
export default function AdminNavBar() {
  return (
    <Navbar className="top-admin-navbar" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Toggle />
        <Navbar.Collapse
          className="justify-content-center"
          id="basic-navbar-nav"
        >
          <Nav>
            <a href="#reserve" dir="rtl" lang="ar" className="log-in mx-1 bold">
              عرض الحجز
            </a>
            <a
              href="#editclasses"
              dir="rtl"
              lang="ar"
              className="log-in mx-1 bold"
            >
              تعديل الكلاسات
            </a>
            <a
              href="#editpeople"
              dir="rtl"
              lang="ar"
              className="log-in mx-1 bold"
            >
              تعديل الحسابات
            </a>
            <a dir="rtl" lang="ar" className="log-in mx-1 bold">
              اضافه اعلانات
            </a>
            <a dir="rtl" lang="ar" className="log-in mx-1 bold">
              اضافه صور للنادي
            </a>
            <a dir="rtl" lang="ar" className="log-in mx-1 bold">
              اضافه خدمات
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
