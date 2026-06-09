import React from 'react'

function handleChange(event) {
	console.log('Entering password...');
}

function Keypad() {
    return (
			<div>
        <input onChange={handleChange} type='password'></input>
			</div>
		);
}

export default Keypad;