import React, { useEffect, useState } from "react";
import styles from "./Projects.module.css";
import { ProjectCard } from "./ProjectCard";
import projectsData from "../../data/projects.json"; // Direct import if in src/data

export const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // You can directly set the imported data as state
    setProjects(projectsData);
  }, []);

  return (
    <section className={styles.container} id="Projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};
