import React from "react"

import { ProjectsWrapper } from "./Style"

import { Link } from "gatsby"

function Projects() {
  return (
    <>
      <ProjectsWrapper>
        <h1>Projects</h1>
        <ul>
          <li>
            <div className="project">
              <a href="https://www.google.nl/" target="_blank" className="project__link">
                <h3 className="project__title">Authentication using Firebase</h3>
              </a>
              <span className="project__excerpt">
                Lorem ipsum dolor sit amet.
              </span>
              <ul className="project__utilities">
                <li>
                  <div>React</div>
                </li>
                <li>
                  <div>Firebase</div>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className="project">
              <a href="https://www.google.nl/" target="_blank" className="project__link">
                <h3 className="project__title">React Todo with TypeScript</h3>
              </a>
              <span className="project__excerpt">
                Lorem ipsum dolor sit amet.
              </span>
              <ul className="project__utilities">
                <li>
                  <div>NextJS</div>
                </li>
                <li>
                  <div>Context API</div>
                </li>
                <li>
                  <div>TypeScript</div>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className="project">
              <a href="https://www.google.nl/" target="_blank" className="project__link">
                <h3 className="project__title">Project using Redux</h3>
              </a>
              <span className="project__excerpt">
                Lorem ipsum dolor sit amet.
              </span>
              <ul className="project__utilities">
                <li>
                  <div>React</div>
                </li>
                <li>
                  <div>Redux</div>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className="project">
              <a href="https://www.google.nl/" target="_blank" className="project__link">
                <h3 className="project__title">React Filter</h3>
              </a>
              <span className="project__excerpt">
                Lorem ipsum dolor sit amet.
              </span>
              <ul className="project__utilities">
                <li>
                  <div>NextJS</div>
                </li>
                <li>
                  <div>Context API</div>
                </li>
                <li>
                  <div>Styled Components</div>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className="project">
              <a href="https://www.google.nl/" target="_blank" className="project__link">
                <h3 className="project__title">Animations using React Spring</h3>
              </a>
              <span className="project__excerpt">
                Lorem ipsum dolor sit amet.
              </span>
              <ul className="project__utilities">
                <li>
                  <div>NextJS</div>
                </li>
                <li>
                  <div>Context API</div>
                </li>
                <li>
                  <div>Styled Components</div>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className="project">
              <a href="https://www.google.nl/" target="_blank" className="project__link">
                <h3 className="project__title">Todo App</h3>
              </a>
              <span className="project__excerpt">
                Simple todo app using React
              </span>
              <ul className="project__utilities">
                <li>
                  <div>ReactJS</div>
                </li>
                <li>
                  <div>Styled Components</div>
                </li>
                <li>
                  <div>Drag and Drop</div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </ProjectsWrapper>
    </>
  )
}

export default Projects
