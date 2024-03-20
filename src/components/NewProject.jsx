export default function NewProject({ onAddNewProject }) {
  return (
    <div className='mt-24 text-center w-2/3'>
      <img
        src='../src/assets/no-projects.png'
        alt='a note with a pen'
        className='w-16 h-16 object-contain mx-auto'
      />
      <h2 className='text-xl font-bold text-stone-500 my-4'>
        {' '}
        No Project Selected
      </h2>
      <button
        className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'
        onClick={onAddNewProject}>
        Add new project
      </button>
    </div>
  );
}
