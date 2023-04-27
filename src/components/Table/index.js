import React,  {useState} from 'react'; 
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import './index.css'



const BasicExample = () => {
  
  const [bill, setBill] = useState() 
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')
  const [input3, setInput3] = useState('')
  const [input4, setInput4] = useState('')
  const [input5, setInput5] = useState('')
  const [input6, setInput6] = useState('')
  const [input7, setInput7] = useState('')
  const [input8, setInput8] = useState('')
  const [input9, setInput9] = useState('')
  const [input10, setInput10] = useState('')
  const [input11, setInput11] = useState('')
  const [input12, setInput12] = useState('')
  const [input13, setInput13] = useState('')
  const [input14, setInput14] = useState('')
  const [input15, setInput15] = useState('')
  const [input16, setInput16] = useState('')  

  const navigate = useNavigate(); 

  navigate("/document", {state: {bill}})

  const onChangeInput = e => {  
    
    setInput1(e.target.value.replace(/\D/g, ''));
    
    

  } 

  const onChangeInput2 = e => { 
    setInput2(e.target.value.replace(/\D/g, ''));

  } 

  const onChangeInput3 = e => { 
    setInput3(e.target.value.replace(/\D/g, ''));

  }  

  const onChangeInput4 = e => { 
    setInput4(e.target.value.replace(/\D/g, ''));

  } 

  const onChangeInput5 = e => { 
    setInput5(e.target.value.replace(/\D/g, ''));

  } 

  const onChangeInput6 = e => { 
    setInput6(e.target.value.replace(/\D/g, ''));

  }  

  const onChangeInput7 = e => { 
    setInput7(e.target.value.replace(/\D/g, ''));

  } 

  const onChangeInput8 = e => { 
    setInput8(e.target.value.replace(/\D/g, ''));

  } 

  const onChangeInput9 = e => { 
    setInput9(e.target.value.replace(/\D/g, ''));

  }  

  const onChangeInput10 = e => { 
    setInput10(e.target.value.replace(/\D/g, ''));
  } 

  const onChangeInput11 = e => { 
    setInput11(e.target.value.replace(/\D/g, ''));

  } 


  const onChangeInput12 = e => { 
    setInput12(e.target.value.replace(/\D/g, ''));

  } 

  const onChangeInput13 = e => { 
    setInput13(e.target.value.replace(/\D/g, ''));

  } 

  const onChangeInput14 = e => { 
    setInput14(e.target.value.replace(/\D/g, ''));

  }  

  const onChangeInput15 = e => { 
    setInput15(e.target.value.replace(/\D/g, ''));

  } 

  const onChangeInput16 = e => { 
    setInput16(e.target.value.replace(/\D/g, ''));
  } 


  const addinput1 = e => { 
    
    if (e.target.checked) { 
      if (input1 === '') {
        setBill(prevBill => prevBill+0)
      } else {
        setBill(prevBill => prevBill+parseInt(input1))
      }
      
    } 
    else {
      setBill(prevBill => prevBill-parseInt(input1))
      
    }
  }

  const addinput2 = e => { 
    if (e.target.checked) { 
      if (input2 === '') {
        setBill(prevBill => prevBill+0)
      } else {
        setBill(prevBill => prevBill+parseInt(input2))
      }
      
    } 
    else {
      setBill(prevBill => prevBill-parseInt(input2))
      
    }
  }
  

  const addinput3 = e => { 
    if (e.target.checked) { 
      if (input3 === '') {
        setBill(prevBill => prevBill+0)
      } else {
        setBill(prevBill => prevBill+parseInt(input3))
      }
      
    } 
    else {
      setBill(prevBill => prevBill-parseInt(input3))
      
    }
  }
  


  const addinput4 = e => { 
    if (e.target.checked) { 
      if (input4 === '') {
        setBill(prevBill => prevBill+0)
      } else {
        setBill(prevBill => prevBill+parseInt(input4))
      }
      
    } 
    else {
      setBill(prevBill => prevBill-parseInt(input4))
      
    }
  }
  

  const addinput5 = e => { 
    if (e.target.checked) { 
      if (input5 === '') {
        setBill(prevBill => prevBill+0)
      } else {
        setBill(prevBill => prevBill+parseInt(input5))
      }
      
    } 
    else {
      setBill(prevBill => prevBill-parseInt(input5))
      
    }
  }


  const addinput6 = e => { 
    if (e.target.checked) { 
      if (input6 === '') {
        setBill(prevBill => prevBill+0)
      } else {
        setBill(prevBill => prevBill+parseInt(input6))
      }
      
    } 
    else {
      setBill(prevBill => prevBill-parseInt(input6))
      
    }
  }


  const addinput7 = e => { 
    if (e.target.checked) { 
      if (input7 === '') {
        setBill(prevBill => prevBill+0)
      } else {
        setBill(prevBill => prevBill+parseInt(input7))
      }
      
    } 
    else {
      setBill(prevBill => prevBill-parseInt(input7))
      
    }
  }

  const addinput8 = e => { 
    if (e.target.checked) { 
      if (input8 === '') {
        setBill(prevBill => prevBill+0)
      } else {
        setBill(prevBill => prevBill+parseInt(input8))
      }
      
    } 
    else {
      setBill(prevBill => prevBill-parseInt(input8))
      
    }
  }


  const addinput9 = e => { 
    if (e.target.checked) { 
      if (input9 === '') {
        setBill(prevBill => prevBill+0)
      } else {
        setBill(prevBill => prevBill+parseInt(input9))
      }
      
    } 
    else {
      setBill(prevBill => prevBill-parseInt(input9))
      
    }
  }


  const addinput10 = e => { 
    if (e.target.checked) { 
      if (input10 === '') {
        setBill(prevBill => prevBill+0)
      } else {
        setBill(prevBill => prevBill+parseInt(input10))
      }
      
    } 
    else {
      setBill(prevBill => prevBill-parseInt(input10))
      
    }
  }

  const addinput11 = e => { 
    if (e.target.checked) { 
      if (input11 === '') {
        setBill(prevBill => prevBill+0)
      } else {
        setBill(prevBill => prevBill+parseInt(input11))
      }
      
    } 
    else {
      setBill(prevBill => prevBill-parseInt(input11))
      
    }
  }


  const addinput12 = e => { 
    if (e.target.checked) { 
      if (input12 === '') {
        setBill(prevBill => prevBill+0)
      } else {
        setBill(prevBill => prevBill+parseInt(input12))
      }
      
    } 
    else {
      setBill(prevBill => prevBill-parseInt(input12))
      
    }
  }

  const addinput13 = e => { 
    if (e.target.checked) { 
      if (input13 === '') {
        setBill(prevBill => prevBill+0)
      } else {
        setBill(prevBill => prevBill+parseInt(input13))
      }
      
    } 
    else {
      setBill(prevBill => prevBill-parseInt(input13))
      
    }
  }


  const addinput14 = e => { 
    if (e.target.checked) { 
      if (input14 === '') {
        setBill(prevBill => prevBill+0)
      } else {
        setBill(prevBill => prevBill+parseInt(input14))
      }
      
    } 
    else {
      setBill(prevBill => prevBill-parseInt(input14))
      
    }
  }


  const addinput15 = e => { 
    if (e.target.checked) { 
      if (input15 === '') {
        setBill(prevBill => prevBill+0)
      } else {
        setBill(prevBill => prevBill+parseInt(input15))
      }
      
    } 
    else {
      setBill(prevBill => prevBill-parseInt(input15))
      
    }
  }

  const addinput16 = e => { 
    if (e.target.checked) { 
      if (input16 === '') {
        setBill(prevBill => prevBill+0)
      } else {
        setBill(prevBill => prevBill+parseInt(input16))
      }
      
    } 
    else {
      setBill(prevBill => prevBill-parseInt(input16))
      
    }
  }
  
  return(
    <div>
    <div className='head-card'>
      <h2 className='second-head'>Total Estimated Amount</h2>
      <h2 className='second-head'>Rs. {bill}</h2> 

    </div> 
    <Table striped bordered  className='table-card'>
    <thead>
      <tr className='bg-secondary'>
        <th className='text-white'>S.No</th>
        <th className='text-white'>Service Groups</th>
        <th className='text-white'> Specification</th>
        <th className='text-white'>Approx Amount</th>
        <th className='text-white'>Select</th>
      </tr>
    </thead>
    <tbody >
      <tr >
        <td>01</td>
        <td>Room Charges</td>
        <td>
          <ul>
            <li className='un-pa'>Room charges include bed charges, daily patient meals (as advised by Dietician).</li>
            <li className='un-pa'>calculated for 24 hours from time of admission with grace period of 3 hrs.</li>
            <li className='un-pa'>Additional room charges will be levied if attendant uses/ continues to accupy the patient room when patient is in OT/ICU.</li>
          </ul>
        </td>
        <td> 
          <ul>
            <li className='table-li'><input type="text" value = {input1} onChange={onChangeInput} id="input1" pattern="[0-9]*"/></li>
            <li className='table-li'><input type="text" value = {input2} onChange={onChangeInput2} id="input2"/></li>
            <li className='table-li'><input type="text" value = {input3} onChange={onChangeInput3} id="input3"/></li>
          </ul>
          
             
          </td> 
          <td>
          <ul>
            <li className='table-li2'><input type="checkbox" onClick={addinput1} id="check1"/></li>
            <li className='table-li2'><input type="checkbox" onClick={addinput2} id="check2"/></li>
            <li className='table-li2'><input type="checkbox" onClick={addinput3} id="check3"/></li>
          </ul></td>
      </tr> 

      <tr >
        <td>02</td>
        <td>Pharmacy</td>
        <td>
          <ul>
            <li className='un-pa'>All pharmacy will be billed as per MRP</li>
            <li className='un-pa'>Unsued pharmacy items will be returned to pharmacy</li>
            <li className='un-pa'>Implants/stents will be charged additionally as per usage</li>
            <li className='un-pa'>Drug Administration Charges will be billed for handling drugs. Those charges depend on the pharmacy items used.</li>
            <li className='un-pa'>Discharge Medication are not part of the in patient bill. Patient attendant is suggested to buy the medications at our OP pharmacy.</li>
          </ul>
        </td>
        <td>
          <ul>
            <li className='table-li'><input type="text" value = {input4} onChange={onChangeInput4} id="input4"/></li>
            <li className='table-li'><input type="text" value = {input5} onChange={onChangeInput5} id="input5"/></li>
            <li className='table-li'><input type="text" value = {input6} onChange={onChangeInput6} id="input6"/></li>
            <li className='table-li'><input type="text" value = {input7} onChange={onChangeInput7} id="input7"/></li>
            <li className='table-li'><input type="text" value = {input8} onChange={onChangeInput8} id="input8"/></li>
          </ul></td> 
          <td>
          <ul>
            <li className='table-li2'><input type="checkbox" onClick={addinput4} id="check4"/></li>
            <li className='table-li2'><input type="checkbox" onClick={addinput5} id="check5"/></li>
            <li className='table-li2'><input type="checkbox" onClick={addinput6} id="check6"/></li>
            <li className='table-li2'><input type="checkbox" onClick={addinput7} id="check7"/></li>
            <li className='table-li2'><input type="checkbox" onClick={addinput8} id="check8"/></li>
            
          </ul></td>
      </tr>
      
      <tr >
        <td>03</td>
        <td>Lorem Ipsum</td>
        <td>
          <ul>
            <li className='un-pa'>Lorem ipsum is simpky dummy text of the printing and typesetting industry . Loreum Ipsum has been the industry standard dummy text ever.</li>
            <li className='un-pa'>It was popularised in the 1960s with release of Letraset sheets containing.</li>
            <li className='un-pa'>It was popularised in the 1960s with release of Letraset sheets containing Loreum Ipsum passages, and more recently with.</li>
          </ul>
        </td>
        <td>
          <ul>
            <li className='table-li'><input type="text" value = {input9} onChange={onChangeInput9} id="input9"/></li>
            <li className='table-li'><input type="text" value = {input10} onChange={onChangeInput10} id="input10"/></li>
            <li className='table-li'><input type="text" value = {input11} onChange={onChangeInput11} id="input11"/></li>
          </ul></td> 
          <td>
          <ul>
            <li className='table-li2' ><input type="checkbox" onClick={addinput9} id="check9"/></li>
            <li className='table-li2'><input type="checkbox" onClick={addinput10} id="check10"/></li>
            <li className='table-li2'><input type="checkbox" onClick={addinput11} id="check11"/></li>
          </ul></td>
      </tr>  


      <tr >
        <td>04</td>
        <td>Lorem Ipsum</td>
        <td>
          <ul>
            <li className='un-pa'>It is a long established fact that a reader will be distracted by the readable.</li>
            <li className='un-pa' >The paint of using Lorem Ipusm is that it has a more-or-less normal.</li>
            <li className='un-pa'>Various versions have evolved over the years, sometimes by accident.</li>
            <li className='un-pa'>There are many variations of passages of Lorem Ipsum avaulable , but the majority have suffered alteration in some form.</li>
            <li className='un-pa'>Discharge Medication are not part of the in patient bill. Patient attendant is suggested to buy the medications at our OP pharmacy.</li>
          </ul>
        </td>
        <td>
          <ul>
            <li className='table-li'><input type="text" value = {input12} onChange={onChangeInput12} id="input12"/></li>
            <li className='table-li'><input type="text" value = {input13} onChange={onChangeInput13} id="input13"/></li>
            <li className='table-li'><input type="text" value = {input14} onChange={onChangeInput14} id="input14"/></li>
            <li className='table-li'><input type="text" value = {input15} onChange={onChangeInput15} id="input15"/></li>
            <li className='table-li'><input type="text" value = {input16} onChange={onChangeInput16} id="input16"/></li>
          </ul></td> 
          <td>
          <ul>
            <li className='table-li2'><input type="checkbox" onClick={addinput12} id="check12"/></li>
            <li className='table-li2'><input type="checkbox" onClick={addinput13} id="check13"/></li>
            <li className='table-li2'><input type="checkbox" onClick={addinput14} id="check14"/></li>
            <li className='table-li2'><input type="checkbox" onClick={addinput15} id="check15"/></li>
            <li className='table-li2'><input type="checkbox" onClick={addinput16} id="check16"/></li>
          </ul></td>
      </tr>
      
    </tbody>
    </Table>
</div>
  )
}



export default BasicExample;