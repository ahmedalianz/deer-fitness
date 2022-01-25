import './admin.css'
import axios from 'axios'
import { useState } from 'react'

export default function Admin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://evening-meadow-95836.herokuapp.com/admin/login', { email, password })
            sessionStorage.setItem('admin', true)
            window.location.assign("/admin");
        }
        catch (e) {
            console.log(e)
            setError("غير مصرح لك بالدخول")
        }
    }
    return (
        <div className="wrapper fadeInDown">
            <div id="formContent">


                <div className="fadeIn first">
                    <img src="images/logo.png" id="icon" alt="لياقه الغزال" />
                </div>

                <form onSubmit={e => handleSubmit(e)}>
                    <input required calue={email} onChange={e => setEmail(e.target.value)} type="email" id="login" className="fadeIn second" name="login" placeholder="الحساب" />
                    <input required calue={password} onChange={e => setPassword(e.target.value)} type="password" id="password" className="fadeIn third" name="login" placeholder="الرقم السري" />
                    <div className="text-danger">{error}</div>
                    <input type="submit" className="fadeIn fourth" value="تسجيل الدخول" />
                </form>


                <div id="formFooter">
                    <a className="underlineHover" href="#">هل نسيت كلمه المرور؟</a>
                </div>

            </div>
        </div>
    )
}
