import React, {useRef} from 'react' 
import Table from 'react-bootstrap/Table';
import DocData from '../DocData'
import { useReactToPrint } from 'react-to-print'
import FooterDocument from "../FooterDocument" 
import './index.css'
import { useLocation } from 'react-router-dom'

const PrintDocument = () => { 

  const componentRef = useRef(); 
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'emp-data',
    
  }) 

  const {state} = useLocation(); 
  const {bill, input1, input2, input3, input4, input5, input6, input7, input8, input9, input10, input11, input12, input13, input14, input15, input16, surgicalManagment, insurance, corporate, roomUpgrade, complementaryUpgrade, excessChargePayable, initialCounselling, reCounselling, onBedCounselling, medicalManagment, topInput1,topInput2, topInput3, topInput4, topInput5, date1,date2, date3}  = state
  console.log(state);

  return (
    <div className="print-card" ref = {componentRef}>  
      <div className="header">
        <h1 className="print-logo-head ">KIMS</h1> 
        <p className="print-logo-para">KIMS-K/BILL/F/B/03</p>
      </div>
      <h1 className="doc-main-head">FINANCIAL COUNSELLING</h1>
      <div className='doc-data-card'> 
            <div className='common-card'>
                <div className='first-line'>
                    <p className='first-pa'>Date:</p>
                    <p className='first-pa'>UMR NUmber:</p>
                    <p className='first-pa'>Doctor Name:</p>
                    <p className='first-pa'>Medical Managment:</p>
                    <p className='first-pa'>Date of Surgery:</p>
                    <p className='first-pa'>Mode of Payment:</p>
                    <p className='first-pa'>Room Eligibility:</p>
                    <p className='first-pa'>Room Upgrade:</p>
                    <p className='first-pa'>Excess Charge Pay:</p>
                </div>
                <div className='second-line'>
                    <p className='first-pa'>{date1}</p>
                    <p className='first-pa'>{topInput2}</p>
                    <p className='first-pa'>Abhishiek Chowdary</p>
                    <p className='first-pa'>{medicalManagment}</p>
                    <p className='first-pa'>{date3}</p>
                    <p className='first-pa'>Cash</p>
                    <p className='first-pa'>Room name</p>
                    <p className='first-pa'>{roomUpgrade}</p>
                    <p className='first-pa'>Lorem Ipsum</p>
                </div>
            </div> 
            <div className='common-card'>
                <div className='first-line'>
                    <p className='first-pa'>Estimated Date of Admission:</p>
                    <p className='first-pa'>Patient Full Name:</p>
                    <p className='first-pa'>Doctor's Speciality:</p>
                    <p className='first-pa'>Surgical Managment:</p>
                    <p className='first-pa'>Surgery/Procedure Name:</p>
                    <p className='first-pa'>Insurance:</p>
                    <p className='first-pa'>Room Opted:</p>
                    <p className='first-pa'>complemantary Upgrade:</p>
                    <p className='first-pa'>Counselling Type:</p>
                </div>
                <div className='second-line'>
                    <p className='first-pa'>{date2}</p>
                    <p className='first-pa'>{topInput3}</p>
                    <p className='first-pa'>Abhishiek Chowdary</p>
                    <p className='first-pa'>{surgicalManagment}</p>
                    <p className='first-pa'>Procedure Name</p>
                    <p className='first-pa'>{insurance}</p>
                    <p className='first-pa'>Room name</p>
                    <p className='first-pa'>{complementaryUpgrade}</p>
                    <p className='first-pa'>Lorem Ipsum</p>
                </div>
            </div> 
            <div className='common-card'>
                <div className='first-line'>
                    <p className='first-pa'>Phone Number:</p>
                    <p className='first-pa'>Length of Stay:</p>
                    <p className='first-pa'>Corporate:</p>
                    <p className='first-pa'>Tariff of Room:</p>
                    <p className='first-pa'>Non Availability:</p>
                    
                </div>
                <div className='second-line'>
                    <p className='first-pa'>{topInput4}</p>
                    <p className='first-pa'>{topInput5}</p>
                    <p className='first-pa'>{corporate}</p>
                    <p className='first-pa'>Rs. 1299/Day</p>
                    <p className='first-pa'>Lorem Ipsum</p>
                    
                </div>
            </div>

        </div> 

      <div className='final-table'> 
        <div className='final-card'>
          <h2>Total Estimated Amount</h2>
          <h2>Rs. {bill}</h2> 
          </div>
          <Table bordered >
          <thead>
            <tr>
              <th>S.NO</th>
              <th>SERVICE GROUP</th>
              <th>APPROX AMOUNT</th>
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Room Charges</td>
              <td>{input1}</td>
              
            </tr>
            <tr>
              <td>2</td>
              <td>Pharmacy</td>
              <td>{input2}</td>
              
            </tr>
            <tr>
              <td>3</td>
              <td>Professional Fees & DMD</td>
              <td>{input3}</td>
              
            </tr>
            <tr>
              <td>4</td>
              <td>Cross consultation</td>
              <td>{input4}</td>
              
            </tr>
            <tr>
              <td>5</td>
              <td>Investigations</td>
              <td>{input5}</td>
              
            </tr>
            <tr>
              <td>6</td>
              <td>Procedures</td>
              <td>{input6}</td>
              
            </tr> 

            <tr>
              <td>7</td>
              <td>OT Charges</td>
              <td>{input7}</td>
              
            </tr>
            <tr>
              <td>8</td>
              <td>General Equipment</td>
              <td>{input8}</td>
              
            </tr>
            <tr>
              <td>9</td>
              <td>OT Equipment / Instruments</td>
              <td>{input9}</td>
              
            </tr>
            
            <tr>
              <td>10</td>
              <td>F & B and Dietician</td>
              <td>{input10}</td>
              
            </tr>
            <tr>
              <td>11</td>
              <td>Physiotherapy</td>
              <td>{input11}</td>
              
            </tr>
            <tr>
              <td>12</td>
              <td>Medical Records and MLC</td>
              <td>{input12}</td>
              
            </tr>

            <tr>
              <td>13</td>
              <td>Blood Blank</td>
              <td>{input13}</td>
              
            </tr>
            <tr>
              <td>14</td>
              <td>Hospital Services</td>
              <td>{input14}</td>
              
            </tr>
            <tr>
              <td>9</td>
              <td>Ambulance Service</td>
              <td>{input15}</td>
              
            </tr>
            
            
          </tbody>
        </Table>


        

      </div>
        


      <FooterDocument/>
      <button type='button' onClick={handlePrint}>print</button>
    </div>
  )
}

export default PrintDocument
