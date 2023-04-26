import React, {useRef} from 'react' 
import DocData from '../DocData'
import { useReactToPrint } from 'react-to-print'
import FooterDocument from "../FooterDocument" 
import './index.css'

const PrintDocument = () => { 

  const componentRef = useRef(); 
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'emp-data',
    
  })

  return (
    <div className="print-card" ref = {componentRef}>  
      <div className="header">
        <h1 className="print-logo-head ">KIMS</h1> 
        <p className="print-logo-para">KIMS-K/BILL/F/B/03</p>
      </div>
      <h1 className="doc-main-head">FINANCIAL COUNSELLING</h1>
      <DocData/>
      <FooterDocument/>
      <button type='button' onClick={handlePrint}>print</button>
    </div>
  )
}

export default PrintDocument
