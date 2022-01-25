import { Table } from "react-bootstrap"

export default function Night({ period }) {
    return (
        <div >
            <h1>
                جدول كلاسات <span> الفترة {period}</span>
            </h1>

            <Table responsive striped hover className="my-table">
                <thead>
                    <tr>
                        <th>اليوم</th>
                        <th>4:30 - 5:15 مساءً</th>
                        <th>5:30 - 6:15 مساءً</th>
                        <th>6:30 - 7:15 مساءً</th>
                        <th>7:30 - 8:15 مساءً</th>
                        <th>8:30 - 9:15 مساءً</th>
                        <th>9:30 - 10:15 مساءً</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>السبت</td>
                        <td>الجسم كامل مع كابتن وسان
                            Full Body
                        </td>
                        <td>---------------
                        </td>
                        <td>التدريب الدائري مع كابتن وسان
                            Circuit Training
                        </td>
                        <td>هييت مع كابتن وسان
                            Hiit
                        </td>
                        <td>الرقص الشرقي مع كابتن سمية Belly Dannce</td>
                        <td>جمباز مع كابتن بسنت Gymnastics</td>

                    </tr>
                    <tr>
                        <td>الاحد</td>
                        <td>مقاومه سفلي مع كابتن وسان
                            Lower Body
                        </td>
                        <td>ستيبس مع كابتن آسيل Steps
                        </td>
                        <td>مقاومه سفلي مع كابتن وسان
                            Lower Body
                        </td>
                        <td>هييت كارديو مع كابتن آسيل Hiit Cardio
                        </td>
                        <td> كارديو مع كابتن وسان  Cardio
                        </td>
                        <td>تايكوندو مع كابتن بسنت Taekwondo </td>

                    </tr>
                    <tr>
                        <td>الاثنين</td>
                        <td>كور مع كابتن وسان Core</td>
                        <td>زومبا مع كابتن آسيل Zumba</td>
                        <td>كور مع كابتن وسان Core</td>
                        <td>تاباتا مع كابتن آسيل Tabatta</td>
                        <td>باوند مع كابتن شيماء Pound</td>
                        <td>جمباز مع كابتن بسنت Gymnastics</td>
                    </tr>
                    <tr>
                        <td>الثلاثاء</td>
                        <td>مقاومه علوي مع كابتن وسان
                            Upper Body
                        </td>
                        <td>بلوكسينج مع كابتن آسيل Peloxing</td>
                        <td>مقاومه علوي مع كابتن وسان
                            Upper Body
                        </td>
                        <td>ستيبس مع كابتن آسيل Steps
                        </td>
                        <td>الرقص الشرقي مع كابتن سمية Belly Dannce</td>
                        <td>تايكوندو مع كابتن بسنت Taekwondo </td>
                    </tr>
                    <tr>
                        <td>الاربعاء</td>
                        <td>مقاومه سفلي مع كابتن وسان
                            Lower Body
                        </td>
                        <td>هييت كارديو مع كابتن آسيل Hiit Cardio
                        </td>
                        <td>مقاومه سفلي مع كابتن وسان
                            Lower Body
                        </td>
                        <td>تاباتا مع كابتن آسيل Tabatta</td>
                        <td>باوند مع كابتن شيماء Pound</td>
                        <td>جمباز مع كابتن بسنت Gymnastics</td>
                    </tr>
                    <tr>
                        <td>الخميس</td>
                        <td>كور مع كابتن وسان Core</td>
                        <td>بلوكسينج مع كابتن آسيل Peloxing</td>
                        <td>كور مع كابتن وسان Core</td>
                        <td>زومبا مع كابتن آسيل Zumba</td>
                        <td>الرقص الشرقي مع كابتن سمية Belly Dannce</td>
                        <td>تايكوندو مع كابتن بسنت Taekwondo </td>

                    </tr>

                </tbody>
            </Table>
        </div>
    )
}
