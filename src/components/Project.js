import React from "react"

const Project = ({ project }) => {
  return (
    <div className="card">
      <img className="card__img" src={project.image} alt="" />
      <div style={{ marginTop: "1rem" }}>
        <h5 className="card-title"> {project.title}</h5>
        <a href={project.link} target="_blank" className="card-link">
          Link
        </a>
      </div>
    </div>
  )
}

export default Project
