import React, { Component } from 'react'

function ModalComponent(props) {


    return (
        
<div id="popup1" className="overlay">
	<div className="popup">
		<h2>Total Price : {props.totalprice} INR</h2>
		<a className="close" href="#">&times;</a>
		<div className="content">
			Transaction Succesful!
		</div>
	</div>
</div>

    )


}


export default ModalComponent;