export default function ProjectPreview({
  selectedProject,
  onDelete,
  ...props
}) {
  return (
    <div className='w-[35rem] mt-16 '>
      <h2 className='text-xl font-bold text-stone-600 mb-2'>Project Name:</h2>
      <h3 className='text-stone-600 whitespace-pre-wrap'>
        {selectedProject.title}
      </h3>
      <h2 className='text-xl font-bold text-stone-600 mb-2'>Description:</h2>
      <p className='text-stone-600 whitespace-pre-wrap'>
        {selectedProject.description}
      </p>
      <h2 className='text-xl font-bold text-stone-600 mb-2'>Due Date:</h2>
      <p className='text-stone-600 whitespace-pre-wrap'>
        {selectedProject.dueDate}
      </p>
      <button
        className='mt-10 px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'
        onClick={() => onDelete(selectedProject.id)}>
        Delete
      </button>
    </div>
  );
}
