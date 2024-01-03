import React from 'react'

const ProjectCard = (props) => {
  return (
	<div className='card-box'>
		<div className="image-card">
			<img src={props.src} alt="" id='card-image'/>
		</div>
		<div className='footer'>
			<div className="title">
				{props.title}
			</div>
			<div className="description">
				{props.description}
			</div>
			<div className="call-to-action">
				<button className="call-2-action-button">View Project</button>
				<button className="call-2-action-button">View Code</button>
			</div>


		</div>
	  
	</div>
  )
}

export default ProjectCard
