export default function AddingModal({}) {
  const classes =
    'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600';
  return (
    <div className='w-[35rem] mt-16'>
      <menu className='flex items-center justify-end gap-4 my-4'>
        <li>
          <button className='text-stone-800 hover:text-stone-950'>
            Cancel
          </button>
        </li>
        <li>
          <button className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'>
            Save
          </button>
        </li>
      </menu>
      <form>
        <p>
          <label className='text-sm font-bold uppercase text-stone-500'>
            Project Name
          </label>
          <input type='text' className={classes} />
        </p>
        <p>
          <label className='text-sm font-bold uppercase text-stone-500'>
            Description
          </label>
          <textarea className={classes} />
        </p>{' '}
        <p>
          <label className='text-sm font-bold uppercase text-stone-500'>
            Due Date
          </label>
          <input type='date' className={classes} />
        </p>
      </form>
    </div>
  );
}
