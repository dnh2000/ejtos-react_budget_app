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
        border: '10px' ,
    }
 


	return (
		<div>
           
			<select name="currency" id="currencySelect" onChange={(event) =>changeCurrency(event.target.value)} style={divStyle}>
              <option valu="" selected disabled hidden>Currency ({currency})</option>
              <option value="£">£ Pound</option>
              <option value="$">$ Dollar</option> 
              <option value="€">€ Euro</option>
              <option value="₹">₹ Ruppee</option>
           </select>  
		</div>
	);
};

export default Currency;