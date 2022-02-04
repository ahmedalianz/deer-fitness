import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Admin() {
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await axios.post('https://evening-meadow-95836.herokuapp.com/admin/LoginUser', { phone, password })
            localStorage.setItem('user', JSON.stringify(res.data.data))
            window.location.assign("/");
        }
        catch (e) {
            console.log(e)
            setError("الهاتف او الرقم السري غير صحيح")
        }
    }
    return (
        <div className="wrapper fadeInDown">
            <div id="formContent">


                <div className="fadeIn first">
                    <img src="images/logo.png" id="icon" alt="لياقه الغزال" />
                </div>

                <form onSubmit={e => handleSubmit(e)}>
                    <input required value={phone} onChange={e => setPhone(e.target.value)} type="string" id="login" className="fadeIn second" name="login" placeholder="الهاتف" />
                    <input required value={password} onChange={e => setPassword(e.target.value)} type="password" id="password" className="fadeIn third" name="login" placeholder="الرقم السري" />
                    <div className="text-danger">{error}</div>
                    <input type="submit" className="fadeIn fourth" value="تسجيل الدخول" />
                </form>


                <div id="formFooter">
                    <Link to='/register' className="underlineHover">اذا لم تكوني مسجلة لدينا يمكنك التسجيل من هنا</Link>
                </div>

            </div>
        </div>
    )
}
