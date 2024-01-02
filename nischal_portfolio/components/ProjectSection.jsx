import React from 'react'
import ProjectCard from './ProjectCard'
import { projectData } from '@/public/constants'

const projectSection = () => {
  return (
    <section id="projectSection">
      <h2>My Projects</h2>
      <div>
        {projectData.map((object)=>
        <ProjectCard key={object.id} title={object.title} description={object.description} imgUrl={object.imgUrl}/>
        )}
      </div>
    </section>
  )
}

export default projectSection
