import './index.css' 

const FooterDocument = () => {
    return(
        <div>
            <h3 className='h3-head'>Insurance:</h3> 
            <div>
                <p className='s-para'>1.  Insurance processing charges(one time charge) will be billed in addition ot the above charges for every patient admission</p>
                <p className='s-para'>2.  In case a higher category room (beyond eligibility) is opted for, pro rata charges will be levied to you for all services availed</p>
                <p className='s-para'>3.  List of Non-Medical Expenses & Insurance Checklist have been provided to you.</p>
            </div> 
            <h6 className='h6-para'>Please note that all the above costs are quoted for the stipulated /  tentative length of stay. Increase in length of stay or increase in OT time due to clinical complications/comorbidities will wlict additional charges, depending on the complexity of condition / extension of treatment / period.</h6>
            <div>
                <p className='s-para'>1.  For cash paying patients, an advance of 80% of the total estimated amount shall be paid at the time of admission by cash/card</p>
                <p className='s-para'>2.  All cash paying patients shall maintain a positive cash balance at any time during their stay for medical treatment in the hospital.</p>
                <p className='s-para'>3.  Excess Amount paid (up to Rs10,000) will be refunded to you in cash immediately at the time of final bill clearance. </p>
                <p className='s-para'>4.  As per IT section 269 ST, amount up to Rs 1,99,999 only will be accepted in cash.Payment above Rs 2,00,000 can be paid through NET/DD/Card.</p>
            </div> 
            <h3 className='h3-head'>Declaration:</h3> 
            <p className='h-para'>I hereby accept that all the above tariff and breakup was explained to me /us in a language  i/we understand in detail. I understand that the amount quoted is only an estimate and the actual charges incurred at the time of the final bill may vary. I take full responsibility of clearing all dues payable to the hospital by arranging payment either by myself or through immediate family of the patient, at the time of discharge / leaving the hospital. </p>
            <div className='ro-card'>
                <div className='sign-ro'>
                    <p className='h6-para'>Signature: </p> 
                    <hr className='dash-line'/>
                </div>
                <div className='sign-ro'>
                    <p className='h6-para'>Signature: </p> 
                    <hr className='dash-line'/>
                </div>
            </div> 

            <div className='ro-card'>
                <div>
                    <p>Patinet/ Attendant Name:</p> 
                    <p></p>
                </div>

                <div>
                    <p>Financial Counselor: </p> 
                    <p></p>
                </div>
            </div>
            
        </div>
    )
} 

export default FooterDocument