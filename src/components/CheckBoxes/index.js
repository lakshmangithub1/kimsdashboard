
import './index.css'

const CheckBoxes = () => {
  return (
    <div>
        <form className='form-card'>  
            {/*<div className='input-bg'>*/}
                <div className='input-card'>
                    <input type="checkbox" id="medicalmanagment" value="Medical Managment" name="medicalmanagment" 
                    />
                    <label for="medicalmanagment">Medical Management </label>
                </div> 
                <div className='input-card'>
                    <input type="checkbox" id="surgicalmanagment" value="Surgical Management " name="surgicalmanagment" />
                    <label for="surgicalmanagment">Surgical Management </label>
                </div> 
                <div className='input-card'>
                    <input type="checkbox" id="insurance" value="Insurance " name="insurance" />
                    <label for="insurance">Insurance </label>
                </div> 
                <div className='input-card'>
                    <input type="checkbox" id="corporate" value="Corporate" name="corporate" />
                    <label for="corporate">Corporate </label>
                </div>  
                <div className='input-card'>
                    <input type="checkbox" id="roomupgrade" value="Room Upgrade" name="roomupgrade" checked/>
                    <label for="roomupgrade">Room Upgrade </label>
                </div> 
           {/* </div> */}

            {/*<div className='input-bg'>*/}
                <div className='input-card'>
                    <input type="checkbox" id="complementaryupgrade" value="Complementary Upgrade" name="complementaryupgrade" />
                    <label for="complementaryupgrade">Complementary Upgrade </label>
                </div> 
                <div className='input-card'>
                    <input type="checkbox" id="excesschargepayable" value="Excess Charge Payable" name="excesschargepayable" />
                    <label for="corporate">Excess Charge Payable </label>
                </div> 
                <div className='input-card'>
                    <input type="checkbox" id="initialcounselling" value="Initial Counselling" name="initialcounselling" />
                    <label for="initialcounselling">Initial Counselling </label>
                </div> 
                <div className='input-card'>
                    <input type="checkbox" id="recounselling" value="Re-Counselling" name="recounselling" />
                    <label for="recounselling">Re-Counselling </label>
                </div> 
                <div className='input-card'>
                    <input type="checkbox" id="onbedcounselling" value="On Bed Counselling" name="onbedcounselling" />
                    <label for="onbedcounselling">On Bed Counselling </label>
                </div> 
            {/*</div>*/}
 

            
            

            
        </form>
    </div>
  )
}

export default CheckBoxes
