import React, {useState} from "react"; 
import './index.css' 

function DatePicker() {
    const [date, setData] = useState(); 

    return(
        <div>
             
            <input type="date" onChange={e => setData(e.target.value)} className="classics"/>
        </div>
    )
}

export default DatePicker