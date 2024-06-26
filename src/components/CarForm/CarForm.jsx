import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { setName, setCost, addCar } from '../../store';

const CarForm = () => {
  // Never destructure using useSelector as it will cause
  // rerendering bugs. Instead set values individually
  // WRONG! - const { name, cost } = useSelector(({ cars: { name, cost } }) => ({ name, cost }));
  const name = useSelector(({ form: { name } }) => name);
  const cost = useSelector(({ form: { cost } }) => cost);

  const dispatch = useDispatch();

  const handleCarChange = ({ target: { value } }) => {
    dispatch(setName(value));
  };

  const handleCostChange = ({ target: { value } }) => {
    dispatch(setCost(Number(value)));
  };

  const handleSubmit = e => {
    e.preventDefault();
    name === '' || cost === 0
      ? alert('Please fill in both form fields')
      : dispatch(addCar({ name, cost, id: nanoid() }));
  };

  return (
    <form className='bg-slate-400 p-4 flex items-end gap-4 rounded mb-4' onSubmit={handleSubmit}>
      <div className='flex flex-col flex-1'>
        <label className='cursor-text' htmlFor='car-name'>
          Car Name
        </label>
        <input
          className='px-2 py-1 rounded shadow-sm outline-none'
          value={name}
          onChange={handleCarChange}
          type='text'
          name='car-name'
          id='car-name'
        />
      </div>
      <div className='flex flex-col flex-1'>
        <label className='cursor-text' htmlFor='car-value'>
          Car Value
        </label>
        <input
          className='px-2 py-1 rounded shadow-sm outline-none'
          value={cost || ''}
          onChange={handleCostChange}
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
