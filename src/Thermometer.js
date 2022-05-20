import React, { useEffect, useState } from 'react'

export const Thermometer = ( props ) => {

    const [goal, setGoal] = useState(props.goal)
    const [raised, setRaised] = useState(props.raised)
    const [value, setValue] = useState(1)
    const [modal, setModal] = useState(false)
 
    
 
    const getProgressBarWidth = (amountRaised, goal) => {

        // if amount raised is LESS than our goal, then RETURN (amountRaised/goal * 100) .toFixed(1)
        if((amountRaised / goal) * 100 <= 100) {
            return ((amountRaised/goal) * 100).toFixed(1)

        }
        
        // if our goal is reached, return 100 
        else {

            return 100            
        }

    }
  
    const handleChange = (event) => {

        setValue(parseInt(event.target.value));
    }

    const handleDonation = () => {

        setRaised(raised + value);
    }


    return (
    <div>
        <>
            <div className='thermometer'>
                <div className='thermometer-raised'>${raised.toFixed(2)}</div>
                <div className='progress'>
                    <div className='progress-labels'>
                        <div>0%</div>
                        <div>RAISED</div>
                        <div>100%</div>
                    </div>
                    <div className='progress-bar'>
                        <div 
                            className='progress-inner' 
                            style={{ width: `${getProgressBarWidth(raised, goal)}%` }}
                        ></div>
                    </div>
                </div>
            </div>
            <form className='donation-group'>
                <label>
                    <input 
                    type = "radio" 
                    checked = {value === 1} 
                    onChange = {handleChange} 
                    value = {1} 
                    />
                    $1
                </label>

                <label>
                    <input 
                    type = "radio" 
                    checked = {value === 5} 
                    onChange = {handleChange} 
                    value = {5} 
                    />
                    $5
                </label>

                <label>
                    <input 
                    type = "radio" 
                    checked = {value === 20} 
                    onChange = {handleChange} 
                    value = {20} 
                    />
                    $20
                </label>

            </form>
            <form className='donation-group'>
                <label>
                    <input 
                    type = "radio" 
                    checked = {value === 50} 
                    onChange = {handleChange} 
                    value = {50} 
                    />
                    $50
                </label>

                <label>
                    <input 
                    type = "radio" 
                    checked = {value === 100} 
                    onChange = {handleChange} 
                    value = {100} 
                    />
                    $100
                </label>

                <label>
                    <input 
                    type = "radio" 
                    checked = {value === 500} 
                    onChange = {handleChange} 
                    value = {500} 
                    />
                    $500
                </label>

            </form>
            <button onClick={() => handleDonation()} className = "give-btn">Gimme</button>
            


        </>

    </div>
  )
}

export default Thermometer