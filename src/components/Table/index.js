import { Component } from 'react';
import Table from 'react-bootstrap/Table';
import './index.css'


class BasicExample extends Component { 

  state = {bill:0, input1: '',input2: '',input3: '',input4: '',input5: '',input6: '',input7: '',input8: '',input9: '', input10: '',input11: ''} 

  onChangeInput = e => {  
    
    this.setState({input1:e.target.value.replace(/\D/g, '')});
    
    

  } 

  onChangeInput2 = e => { 
    this.setState({input2:e.target.value.replace(/\D/g, '')});

  } 

  onChangeInput3 = e => { 
    this.setState({input3:e.target.value.replace(/\D/g, '')});

  }  

  onChangeInput4 = e => { 
    this.setState({input4:e.target.value.replace(/\D/g, '')});

  } 

  onChangeInput5 = e => { 
    this.setState({input5:e.target.value.replace(/\D/g, '')});

  } 

  onChangeInput6 = e => { 
    this.setState({input6:e.target.value.replace(/\D/g, '')});

  }  

  onChangeInput7 = e => { 
    this.setState({input7:e.target.value.replace(/\D/g, '')});

  } 

  onChangeInput8 = e => { 
    this.setState({input8:e.target.value.replace(/\D/g, '')});

  } 

  onChangeInput9 = e => { 
    this.setState({input9:e.target.value.replace(/\D/g, '')});

  }  

  onChangeInput10 = e => { 
    this.setState({input10:e.target.value.replace(/\D/g, '')});

  } 

  onChangeInput11 = e => { 
    this.setState({input11:e.target.value.replace(/\D/g, '')});

  } 


  onChangeInput12 = e => { 
    this.setState({input12:e.target.value.replace(/\D/g, '')});

  } 

  onChangeInput13 = e => { 
    this.setState({input13:e.target.value.replace(/\D/g, '')});

  } 

  onChangeInput14 = e => { 
    this.setState({input14:e.target.value.replace(/\D/g, '')});

  }  

  onChangeInput15 = e => { 
    this.setState({input15:e.target.value.replace(/\D/g, '')});

  } 

  onChangeInput16 = e => { 
    this.setState({input16:e.target.value.replace(/\D/g, '')});

  } 


  addinput1 = e => { 
    const {input1} = this.state
    if (e.target.checked) { 
      if (input1 === '') {
        this.setState((prevState => ({bill: prevState.bill + 0})))
      } else {
        this.setState((prevState => ({bill: prevState.bill + parseInt(input1)})))
      }
      
    } 
    else {
      this.setState((prevState => ({bill: prevState.bill - parseInt(input1)}))) 
      this.setState({input1 : ''})
    }
  }

  addinput2 = e => { 
    const {input2} = this.state
    if (e.target.checked) { 

      if (input2 === '') {
        this.setState((prevState => ({bill: prevState.bill + 0})))
      } else {
        this.setState((prevState => ({bill: prevState.bill + parseInt(input2)})))
      }
    } 
    else {
      this.setState((prevState => ({bill: prevState.bill - parseInt(input2)})))
      this.setState({input2 : ''})
    }
  }

  addinput3 = e => { 
    const {input3} = this.state
    if (e.target.checked) {
      if (input3 === '') {
        this.setState((prevState => ({bill: prevState.bill + 0})))
      } else {
        this.setState((prevState => ({bill: prevState.bill + parseInt(input3)})))
      }
    } 
    else {
      this.setState((prevState => ({bill: prevState.bill - parseInt(input3)})))
      this.setState({input3 : ''})
    }
  }


  addinput4 = e => { 
    const {input4} = this.state
    if (e.target.checked) {
      if (input4 === '') {
        this.setState((prevState => ({bill: prevState.bill + 0})))
      } else {
        this.setState((prevState => ({bill: prevState.bill + parseInt(input4)})))
      }
    } 
    else {
      this.setState((prevState => ({bill: prevState.bill - parseInt(input4)})))
      this.setState({input4 : ''})
    }
  }

  addinput5 = e => { 
    const {input5} = this.state
    if (e.target.checked) {
      if (input5 === '') {
        this.setState((prevState => ({bill: prevState.bill + 0})))
      } else {
        this.setState((prevState => ({bill: prevState.bill + parseInt(input5)})))
      }
    } 
    else {
      this.setState((prevState => ({bill: prevState.bill - parseInt(input5)})))
      this.setState({input5 : ''})
    }
  }


  addinput6 = e => { 
    const {input6} = this.state
    if (e.target.checked) {
      if (input6 === '') {
        this.setState((prevState => ({bill: prevState.bill + 0})))
      } else {
        this.setState((prevState => ({bill: prevState.bill + parseInt(input6)})))
      }
    } 
    else {
      this.setState((prevState => ({bill: prevState.bill - parseInt(input6)})))
      this.setState({input6 : ''})
    }
  }


  addinput7 = e => { 
    const {input7} = this.state
    if (e.target.checked) {
      if (input7 === '') {
        this.setState((prevState => ({bill: prevState.bill + 0})))
      } else {
        this.setState((prevState => ({bill: prevState.bill + parseInt(input7)})))
      }
    } 
    else {
      this.setState((prevState => ({bill: prevState.bill - parseInt(input7)})))
      this.setState({input7 : ''})
    }
  }

  addinput8 = e => { 
    const {input8} = this.state
    if (e.target.checked) {
      if (input8 === '') {
        this.setState((prevState => ({bill: prevState.bill + 0})))
      } else {
        this.setState((prevState => ({bill: prevState.bill + parseInt(input8)})))
      }
    } 
    else {
      this.setState((prevState => ({bill: prevState.bill - parseInt(input8)})))
      this.setState({input8 : ''})
    }
  }


  addinput9 = e => { 
    const {input9} = this.state
    if (e.target.checked) {
      if (input9 === '') {
        this.setState((prevState => ({bill: prevState.bill + 0})))
      } else {
        this.setState((prevState => ({bill: prevState.bill + parseInt(input9)})))
      }
    } 
    else {
      this.setState((prevState => ({bill: prevState.bill - parseInt(input9)})))
      this.setState({input9 : ''})
    }
  }


  addinput10 = e => { 
    const {input10} = this.state
    if (e.target.checked) {
      if (input10 === '') {
        this.setState((prevState => ({bill: prevState.bill + 0})))
      } else {
        this.setState((prevState => ({bill: prevState.bill + parseInt(input10)})))
      }
    } 
    else {
      this.setState((prevState => ({bill: prevState.bill - parseInt(input10)})))
      this.setState({input10 : ''})
    }
  }

  addinput11 = e => { 
    const {input11} = this.state
    if (e.target.checked) {
      if (input11 === '') {
        this.setState((prevState => ({bill: prevState.bill + 0})))
      } else {
        this.setState((prevState => ({bill: prevState.bill + parseInt(input11)})))
      }
    } 
    else {
      this.setState((prevState => ({bill: prevState.bill - parseInt(input11)})))
      this.setState({input11 : ''})
    }
  } 


  addinput12 = e => { 
    const {input12} = this.state
    if (e.target.checked) {
      if (input12 === '') {
        this.setState((prevState => ({bill: prevState.bill + 0})))
      } else {
        this.setState((prevState => ({bill: prevState.bill + parseInt(input12)})))
      }
    } 
    else {
      this.setState((prevState => ({bill: prevState.bill - parseInt(input12)})))
      this.setState({input12 : ''})
    }
  }

  addinput13 = e => { 
    const {input13} = this.state
    if (e.target.checked) {
      if (input13 === '') {
        this.setState((prevState => ({bill: prevState.bill + 0})))
      } else {
        this.setState((prevState => ({bill: prevState.bill + parseInt(input13)})))
      }
    } 
    else {
      this.setState((prevState => ({bill: prevState.bill - parseInt(input13)}))) 
      this.setState({input13 : ''})
    }
  }


  addinput14 = e => { 
    const {input14} = this.state
    if (e.target.checked) {
      if (input14 === '') {
        this.setState((prevState => ({bill: prevState.bill + 0})))
      } else {
        this.setState((prevState => ({bill: prevState.bill + parseInt(input14)})))
      }
    } 
    else {
      this.setState((prevState => ({bill: prevState.bill - parseInt(input14)}))) 
      this.setState({input14 : ''})
    }
  }


  addinput15 = e => { 
    const {input15} = this.state
    if (e.target.checked) {
      if (input15 === '') {
        this.setState((prevState => ({bill: prevState.bill + 0})))
      } else {
        this.setState((prevState => ({bill: prevState.bill + parseInt(input15)})))
      }
    } 
    else {
      this.setState((prevState => ({bill: prevState.bill - parseInt(input15)})))
      this.setState({input15 : ''})
    }
  }

  addinput16 = e => { 
    const {input16} = this.state
    if (e.target.checked) {
      if (input16 === '') {
        this.setState((prevState => ({bill: prevState.bill + 0})))
      } else {
        this.setState((prevState => ({bill: prevState.bill + parseInt(input16)})))
      }
    } 
    else {
      this.setState((prevState => ({bill: prevState.bill - parseInt(input16)})))
      this.setState({input16 : ''})
    }
  }

  render() { 

    const {bill, input1, input2, input3, input4, input5, input6,input7, input8,input9,input10, input11, input12, input13,input14,input15, input16} = this.state
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
                  <li className='table-li'><input type="text" value = {input1} onChange={this.onChangeInput} id="input1" pattern="[0-9]*"/></li>
                  <li className='table-li'><input type="text" value = {input2} onChange={this.onChangeInput2} id="input2"/></li>
                  <li className='table-li'><input type="text" value = {input3} onChange={this.onChangeInput3} id="input3"/></li>
                </ul>
                
                   
                </td> 
                <td>
                <ul>
                  <li className='table-li2'><input type="checkbox" onClick={this.addinput1} id="check1"/></li>
                  <li className='table-li2'><input type="checkbox" onClick={this.addinput2} id="check2"/></li>
                  <li className='table-li2'><input type="checkbox" onClick={this.addinput3} id="check3"/></li>
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
                  <li className='table-li'><input type="text" value = {input4} onChange={this.onChangeInput4} id="input4"/></li>
                  <li className='table-li'><input type="text" value = {input5} onChange={this.onChangeInput5} id="input5"/></li>
                  <li className='table-li'><input type="text" value = {input6} onChange={this.onChangeInput6} id="input6"/></li>
                  <li className='table-li'><input type="text" value = {input7} onChange={this.onChangeInput7} id="input7"/></li>
                  <li className='table-li'><input type="text" value = {input8} onChange={this.onChangeInput8} id="input8"/></li>
                </ul></td> 
                <td>
                <ul>
                  <li className='table-li2'><input type="checkbox" onClick={this.addinput4} id="check4"/></li>
                  <li className='table-li2'><input type="checkbox" onClick={this.addinput5} id="check5"/></li>
                  <li className='table-li2'><input type="checkbox" onClick={this.addinput6} id="check6"/></li>
                  <li className='table-li2'><input type="checkbox" onClick={this.addinput7} id="check7"/></li>
                  <li className='table-li2'><input type="checkbox" onClick={this.addinput8} id="check8"/></li>
                  
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
                  <li className='table-li'><input type="text" value = {input9} onChange={this.onChangeInput9} id="input9"/></li>
                  <li className='table-li'><input type="text" value = {input10} onChange={this.onChangeInput10} id="input10"/></li>
                  <li className='table-li'><input type="text" value = {input11} onChange={this.onChangeInput11} id="input11"/></li>
                </ul></td> 
                <td>
                <ul>
                  <li className='table-li2' ><input type="checkbox" onClick={this.addinput9} id="check9"/></li>
                  <li className='table-li2'><input type="checkbox" onClick={this.addinput10} id="check10"/></li>
                  <li className='table-li2'><input type="checkbox" onClick={this.addinput11} id="check11"/></li>
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
                  <li className='table-li'><input type="text" value = {input12} onChange={this.onChangeInput12} id="input12"/></li>
                  <li className='table-li'><input type="text" value = {input13} onChange={this.onChangeInput13} id="input13"/></li>
                  <li className='table-li'><input type="text" value = {input14} onChange={this.onChangeInput14} id="input14"/></li>
                  <li className='table-li'><input type="text" value = {input15} onChange={this.onChangeInput15} id="input15"/></li>
                  <li className='table-li'><input type="text" value = {input16} onChange={this.onChangeInput16} id="input16"/></li>
                </ul></td> 
                <td>
                <ul>
                  <li className='table-li2'><input type="checkbox" onClick={this.addinput12} id="check12"/></li>
                  <li className='table-li2'><input type="checkbox" onClick={this.addinput13} id="check13"/></li>
                  <li className='table-li2'><input type="checkbox" onClick={this.addinput14} id="check14"/></li>
                  <li className='table-li2'><input type="checkbox" onClick={this.addinput15} id="check15"/></li>
                  <li className='table-li2'><input type="checkbox" onClick={this.addinput16} id="check16"/></li>
                </ul></td>
            </tr>
            
          </tbody>
          </Table>
      </div>
      
    )
  }
}
export default BasicExample;