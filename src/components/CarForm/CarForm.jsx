import { useState } from 'react';

const CarForm = () => {
  const [carName, setCarName] = useState('');
  const [carValue, setCarValue] = useState('');

  const handleCarChange = ({ target: { value } }) => setCarName(value);

  const handleValueChange = ({ target: { value } }) => setCarValue(value);

  return (
    <form className='bg-slate-400 p-4 flex items-end gap-4 rounded mb-4'>
      <div className='flex flex-col flex-1'>
        <label htmlFor='car-name'>Car Name</label>
        <input
          className='px-2 py-1 rounded shadow-sm outline-none'
          value={carName}
          onChange={handleCarChange}
          type='text'
          name='car-name'
          id='car-name'
        />
      </div>
      <div className='flex flex-col flex-1'>
        <label htmlFor='car-value'>Car Value</label>
        <input
          className='px-2 py-1 rounded shadow-sm outline-none'
          value={carValue}
          onChange={handleValueChange}
          type='number'
          name='car-value'
          id='car-value'
        />
      </div>
      <button
        className='flex-none bg-slate-800 px-6 py-1 rounded text-slate-200 font-bold uppercase pointer shadow-sm hover:bg-slate-700 active:relative active:top-[1px]'
        type='submit'>
        Submit
      </button>
    </form>
  );
};

export default CarForm;
