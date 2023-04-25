import Table from 'react-bootstrap/Table';
import './index.css'

function BasicExample() {
  return (
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
              <li className='table-li'>1000</li>
              <li className='table-li'>1000</li>
              <li className='table-li'>1000</li>
            </ul></td> 
            <td>
            <ul>
              <li className='table-li'><input type="checkbox"/></li>
              <li className='table-li'><input type="checkbox"/></li>
              <li className='table-li'><input type="checkbox"/></li>
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
              <li className='table-li'>1000</li>
              <li className='table-li'>1000</li>
              <li className='table-li'>1000</li>
              <li className='table-li'>1000</li>
              <li className='table-li'>1000</li>
            </ul></td> 
            <td>
            <ul>
              <li className='table-li'><input type="checkbox"/></li>
              <li className='table-li'><input type="checkbox"/></li>
              <li className='table-li'><input type="checkbox"/></li>
              <li className='table-li'><input type="checkbox"/></li>
              <li className='table-li'><input type="checkbox"/></li>
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
              <li className='table-li'>1000</li>
              <li className='table-li'>1000</li>
              <li className='table-li'>1000</li>
            </ul></td> 
            <td>
            <ul>
              <li className='table-li'><input type="checkbox"/></li>
              <li className='table-li'><input type="checkbox"/></li>
              <li className='table-li'><input type="checkbox"/></li>
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
              <li className='table-li'>1000</li>
              <li className='table-li'>1000</li>
              <li className='table-li'>1000</li>
              <li className='table-li'>1000</li>
              <li className='table-li'>1000</li>
            </ul></td> 
            <td>
            <ul>
              <li className='table-li'><input type="checkbox"/></li>
              <li className='table-li'><input type="checkbox"/></li>
              <li className='table-li'><input type="checkbox"/></li>
              <li className='table-li'><input type="checkbox"/></li>
              <li className='table-li'><input type="checkbox"/></li>
            </ul></td>
        </tr>
        
      </tbody>
    </Table>
  );
}

export default BasicExample;