import React from "react"

function ContactCard(props) {
	return (
		<div className="contact-card">
			<img src={props.imgURL}/>
			<h3>{props.name}</h3>
			<p>{props.email}</p>
		</div>
		)
}

export default ContactCard