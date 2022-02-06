import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Admin() {
  const [userName, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      let res = await axios.post(
        'https://evening-meadow-95836.herokuapp.com/admin/registerUser',
        { userName, phone, password },
      )
      localStorage.setItem('user', JSON.stringify(res.data.data))
      window.location.assign('/')
    } catch (err) {
      console.log(err)
      console.log(err.response.data)
      if (err.response.data.message.phone === 'short') {
        setError('برجاء ادخال هاتف صحيح المكون من 10 ارقام')
      } else if (err.response.data.message.phone === 'exist') {
        setError(
          'عذرا هذا الهاتف مسجل لدينا حاولي تسجيل الدخول او التواصل مع اداره الموقع',
        )
      } else {
        setError('هناك خطأ ما حاولي مره اخري')
      }
    }
  }
  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <div className="fadeIn first">
          <img src="images/logo.png" id="icon" alt="لياقه الغزال" />
        </div>

        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            required
            value={userName}
            onChange={(e) => setName(e.target.value)}
            type="string"
            id="login"
            className="fadeIn second"
            name="login"
            placeholder="الإسم"
          />
          <input
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="string"
            id="login"
            className="fadeIn second"
            name="login"
            placeholder="الهاتف"
          />
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            className="fadeIn third"
            name="login"
            placeholder="الرقم السري"
          />
          <div className="text-danger">{error}</div>
          <input type="submit" className="fadeIn fourth" value="إنشاء حساب" />
        </form>

        <div id="formFooter">
          <Link to="/login" className="underlineHover">
            اذا كنتي مسجلة لدينا يمكنك الدخول من هنا
          </Link>
        </div>
      </div>
    </div>
  )
}
