const CarForm = () => {
  return (
    <form className='bg-slate-200 p-4 flex items-end gap-4 rounded mb-4'>
      <div className='flex flex-col flex-1'>
        <label htmlFor='car-name'>Car Name</label>
        <input
          className='p-1 rounded border border-slate-400 shadow-sm outline-none'
          type='text'
          name='car-name'
          id='car-name'
        />
      </div>
      <div className='flex flex-col flex-1'>
        <label htmlFor='car-value'>Car Value</label>
        <input
          className='p-1 rounded border border-slate-400 shadow-sm outline-none'
          type='text'
          name='car-value'
          id='car-value'
        />
      </div>
      <button
        className='flex-none bg-slate-800 px-6 py-1 rounded text-slate-200 font-bold uppercase pointer hover:bg-slate-700'
        type='submit'>
        Submit
      </button>
    </form>
  );
};

export default CarForm;
