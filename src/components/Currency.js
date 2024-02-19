import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
 

const Currency = () => {
	const { currency, dispatch } = useContext(AppContext);

	const changeCurrency = (val) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        })
    }
	const divStyle = {
        backgroundColor: '#a5e1a0',
        borderRadius: '4px',
        border: '20px' ,
        padding: '20px',
        color: '#ffffff'
    }

    const optionStyle =  {
        color: '#000000'
    }
        
 


	return (
		<div>
           
			<select name="currency" id="currencySelect" onChange={(event) =>changeCurrency(event.target.value)} style={divStyle}>
              <option value="" selected disabled hidden style={optionStyle}>Currency ({currency})</option>
              <option value="£"style={optionStyle}>£ Pound</option>
              <option value="$"style={optionStyle}>$ Dollar</option> 
              <option value="€"style={optionStyle}>€ Euro</option>
              <option value="₹"style={optionStyle}>₹ Rupee</option>
           </select>  
		</div>
	);
};

export default Currency;