import { Table } from "react-bootstrap"
import './table.css'
export default function Morning({ period }) {
    return (
        <div>
            <h1>
                جدول كلاسات <span> الفترة {period}</span>
            </h1>

            <Table responsive striped hover className="my-table">
                <thead>
                    <tr>
                        <th>اليوم</th>
                        <th>8:30 - 9:15 صباحا</th>
                        <th>9:30 - 10:15 صباحا</th>
                        <th>10:30 - 11:15 صباحا</th>
                        <th>11:30 - 12:15 صباحا</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>الاحد</td>
                        <td>باوند مع كابتن شيماء
                            Pound
                        </td>
                        <td>بوكسينج مع كابتن سمية Boxing
                        </td>
                        <td>الرقص الشرقي مع كابتن سمية Belly Dance
                        </td>
                        <td>ليجز مع كابتن آسيل Legs
                        </td>
                    </tr>
                    <tr>
                        <td>الاثنين</td>
                        <td>ستيكس سويس بول مع كابتن سمية Sticks Swiss ball</td>
                        <td>زومبا مع كابتن سمية Zumba</td>
                        <td>الرقص الشرقي مع كابتن سمية Belly Dannce</td>
                        <td>اكتاف وترايسيبس وبطن مع كابتن آسيل shoulder & tri & abs</td>
                    </tr>
                    <tr>
                        <td>الثلاثاء</td>
                        <td>ايروبك مع كابتن سمية Aerobic</td>
                        <td>بوكسينج مع كابتن سمية Boxing</td>
                        <td>باوند مع كابتن شارما Pound</td>
                        <td>ظهر وبايسيبس وصدر مع كابتن آسيل Back & biceps & Chest</td>
                    </tr>
                    <tr>
                        <td>الاربعاء</td>
                        <td>التدريب الدائري مع كابتن سمية Circuit Training</td>
                        <td>زومبا مع كابتن سمية Zumba</td>
                        <td>الرقص الشرقي مع كابتن سمية Belly Dannce</td>
                        <td>ليجز مع كابتن آسيل Legs
                        </td>


                    </tr>
                    <tr>
                        <td>الخميس</td>
                        <td>ايروبك مع كابتن سمية Aerobic</td>
                        <td>توننج زومبا مع كابتن سوما Toning Zumba</td>
                        <td>باوند مع كابتن شارما Pound</td>
                        <td>كور مع كابتن آسيل Core
                        </td>

                    </tr>
                </tbody>
            </Table>
        </div>

    )
}
