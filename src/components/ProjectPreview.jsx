export default function ProjectPreview({ selectedProject, ...props }) {
  function checker() {
    console.log('CLICKED');
  }

  return (
    <div>
      <h2>Project Name</h2>
      <h3>{selectedProject.title}</h3>
      <h2>Description</h2>
      <p className='whitespace-pre-wrap'>{selectedProject.description}</p>
      <h2>Due Date</h2>
      <p>{selectedProject.dueDate}</p>
      <button onClick={checker}>CHECK</button>
    </div>
  );
}
