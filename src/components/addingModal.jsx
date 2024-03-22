export default function AddingModal({ onAdd, onCloseModal }) {
  const classes =
    'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600';

  function handleSubmit(e) {
    e.preventDefault();
    const inputTitle = e.target[1].value;
    const desc = e.target[2].value;
    const date = e.target[3].value;

    if (inputTitle.trim() === '' || desc.trim() === '' || date.trim() === '') {
      alert('All fields must be filled!');
      return;
    }

    onAdd({
      title: inputTitle,
      description: desc,
      dueDate: date,
      id: Math.random(),
    });

    e.target[1].value = '';
    e.target[2].value = '';
    e.target[3].value = '';

    onCloseModal();
  }

  return (
    <div className='w-[35rem] mt-16'>
      <menu className='flex items-center justify-end gap-4 my-4'>
        <li>
          <button
            className='text-stone-800 hover:text-stone-950'
            onClick={onCloseModal}>
            Cancel
          </button>
        </li>
        <li>
          <button
            className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'
            type='submit'
            onSubmit={handleSubmit}
            form='form1'>
            Save
          </button>
        </li>
      </menu>
      <form id='form1' onSubmit={handleSubmit}>
        <label
          className='text-sm font-bold uppercase text-stone-500'
          defaultValue={'Testing'}>
          Project Name
        </label>
        <input id='text-input' type='text' className={classes} />
        <label className='text-sm font-bold uppercase text-stone-500'>
          Description
        </label>
        <textarea id='description-input' className={classes} />
        <label className='text-sm font-bold uppercase text-stone-500'>
          Due Date
        </label>
        <input id='date-input' type='date' className={classes} />
      </form>
    </div>
  );
}
