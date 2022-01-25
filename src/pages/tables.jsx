import Morning from "../components/table/morning";
import Night from "../components/table/night";

export default function Tables() {
    return (
        <div className='table-cont'>
            <Morning period="الصباحية" />
            <Night period="المسائيه" />
        </div>
    )
}
