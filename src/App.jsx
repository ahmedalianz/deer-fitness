import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
// import Tables from './pages/tables'
import Footer from './components/footer/Footer';
import ScrollTop from './components/scrollToTop';
import NavBar from './components/navbar/Navbar';
import ScrollToTop from "react-scroll-to-top";
import AdminLogin from './pages/admin-login';
import AdminHome from './pages/admin-home';
import SingleClass from './components/admin/home/reserve/singleClass';
import UserRegister from './pages/user-register';
import UserLogin from './pages/user-login';

function App() {
  let admin = sessionStorage.getItem('admin')
  return (
    <>
      <BrowserRouter>
        <ScrollTop />
        <ScrollToTop smooth />

        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/register' element={<UserRegister />} />
          <Route path='/login' element={<UserLogin />} />
          {/* <Route path="/tables" element={<Tables />} /> */}
          <Route path="/admin" element={
            admin ? <AdminHome /> : <AdminLogin />
          } />
          <Route path="/singleClass/:id" element={<SingleClass />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>


    </>
  );
}

export default App;
