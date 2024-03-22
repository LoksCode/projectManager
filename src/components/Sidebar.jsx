export default function Sidebar({ projectsList, onAddNewProject, onSelect }) {
  return (
    <aside className='w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl'>
      <h2 className='text-xl font-bold text-stone-600 my-4'>YOUR PROJECTS</h2>
      <div>
        <button
          className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'
          onClick={onAddNewProject}>
          + Add Project
        </button>
      </div>
      <ul className='mt-4'>
        {projectsList.map((project) => {
          return (
            <li key={project.id}>
              <button
                className='w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800'
                onClick={() => onSelect(project.id)}
                id={project.id}>
                {project.title} {project.id}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
