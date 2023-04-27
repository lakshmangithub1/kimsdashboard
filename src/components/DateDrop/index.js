import { useState } from 'react'

import './index.css'

const DateDrop = () => { 

  const [topInput1, setTopInput1] = useState('')
  const [topInput2, setTopInput2] = useState('')
  const [topInput3, setTopInput3] = useState('')
  const [topInput4, setTopInput4] = useState('')
  const [topInput5, setTopInput5] = useState('')
  const [date1, setData1] = useState(); 
  const [date2, setData2] = useState(); 
  const [date3, setData3] = useState(); 

  return (
    <div className='main-drop'> 
      <div className='drops-card'> 
        <p className='label-para'>Date of Counselling</p>
        <input type="date" onChange={e => setData1(e.target.value)} className="classics"/>
        
      </div>
      <div className='drops-card'> 
        <p className='label-para'>Estimated Date of Admission</p>
        <input type="date" onChange={e => setData2(e.target.value)} className="classics"/>
        
      </div>
      <div className='drops-card'> 
        <p className='label-para'>Token Number</p> 
        <input type="text" className='card-drop classic ' value={topInput1} onChange={e => setTopInput1(e.target.value)} />
        
        
      </div>
      
      <div className='drops-card'> 
        <p className='label-para'>UMR number</p> 
        <input type="text" className='card-drop classic ' value={topInput2} onChange={e => setTopInput2(e.target.value)} />
        
      </div>
      <div className='drops-card'> 
        <p className='label-para'>Patient Name</p> 
        <input type="text" className='card-drop classic ' value={topInput3} onChange={e => setTopInput3(e.target.value)} />
        
      </div>
      <div className='drops-card'> 
        <p className='label-para'>Patient Name</p> 
        <input type="text" className='card-drop classic ' value={topInput4} onChange={e => setTopInput4(e.target.value)} />
        
      </div>
      <div className='drops-card'> 
        <p className='label-para'>Doctor Name</p>
        <select class="classic">
          <option>Dr.Priyatosh Tiwari</option>
          
        </select>
      </div>
      <div className='drops-card'> 
        <p className='label-para'>Speciality</p>
        <select class="classic">
          <option>Speciality</option>
          
        </select>
      </div>
      <div className='drops-card'> 
        <p className='label-para'>Date of Surgery</p>
        <input type="date" onChange={e => setData3(e.target.value)} className="classics"/>
        
      </div>
      <div className='drops-card'> 
        <p className='label-para'>Surgery/Procedure Name</p>
        <select class="classic">
          <option>Procedure Name</option>
          
        </select>
      </div>
      <div className='drops-card'> 
        <p className='label-para'>Length of Stay(Approx)</p> 
        <input type="text" className='card-drop classic ' value={topInput5} onChange={e => setTopInput5(e.target.value)} />
        
      </div>
      <div className='drops-card'> 
        <p className='label-para'>Room Eligibility</p>
        <select class="classic">
          <option>Room Name</option>
          
        </select>
      </div>
      <div className='drops-card'> 
        <p className='label-para'>Room Opted</p>
        <select class="classic">
          <option>Room Name</option>
          
        </select>
      </div>
      <div className='drops-card'> 
        <p className='label-para'>Tariff of Room Opted:</p>
        <select class="classic">
          <option>Tariff Of Room</option>
          
        </select>
      </div>
      <div className='drops-card'> 
        <p className='label-para'>Mode of Payment</p>
        <select class="classic">
          <option>Cash</option>
          
        </select>
      </div>
      
    </div>
  )
}

export default DateDrop
