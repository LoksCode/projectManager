export default function ProjectPreview({ project, ...props }) {
  return (
    <div>
      <h2>Project Name</h2>
      <h3>{project.title}</h3>
      <h2>Description</h2>
      <p>{project.description}</p>
      <h2>Due Date</h2>
      <p>{project.dueDate}</p>
    </div>
  );
}
