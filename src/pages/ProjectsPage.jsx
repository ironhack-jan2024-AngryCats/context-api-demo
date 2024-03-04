import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects-data.json";

function ProjectsPage() {

  return (
    <div className="ProjectsPage">
      <h1>My Projects</h1>
      <div className="projects">
        {projects.map((p) => (
          <ProjectCard key={p._id} project={p} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
