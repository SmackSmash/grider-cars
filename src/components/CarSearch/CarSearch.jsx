import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../../store';

const CarSearch = () => {
  const searchTerm = useSelector(({ cars: { searchTerm } }) => searchTerm);

  const dispatch = useDispatch();

  const handleChange = ({ target: { value } }) => {
    dispatch(setSearchTerm(value));
  };

  return (
    <div className='bg-slate-400 p-4 flex justify-between items-center rounded mb-4'>
      <h1 className='uppercase font-extrabold text-xl'>My Cars</h1>
      <form>
        <input
          className='px-2 py-1 rounded-l shadow-sm outline-none'
          value={searchTerm}
          onChange={handleChange}
          type='search'
          name='car-search'
          id='car-search'
          placeholder='Find a car'
        />
        <button
          className='flex-none bg-slate-800 px-6 py-1 rounded-r text-slate-200 font-bold uppercase pointer shadow-sm hover:bg-slate-700 active:relative active:top-[1px]'
          type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CarSearch;
