import { useDispatch, useSelector } from 'react-redux';
import { removeCar } from '../../store';

const CarList = () => {
  const nameToAdd = useSelector(({ form: { name } }) => name);
  const cars = useSelector(({ cars: { cars } }) => cars);

  const dispatch = useDispatch();

  const handleClick = id => {
    dispatch(removeCar(id));
  };

  const str = 'This is only a test';
  const match = 'on';

  console.log(str.slice(0, str.lastIndexOf(match)) + match + str.slice(str.indexOf(match) + match.length));

  return (
    <div className='bg-slate-400 p-4 rounded mb-4 flex flex-col gap-3'>
      {cars.length
        ? cars.map(({ name, cost, id }) => (
            <div className='bg-slate-200 px-4 py-2 rounded shadow-sm flex justify-between items-center' key={id}>
              <p>
                {name.includes(nameToAdd) && nameToAdd !== '' ? name.slice(0, name.lastIndexOf(nameToAdd)) : name}
                {name.includes(nameToAdd) && nameToAdd !== '' && <strong>{nameToAdd}</strong>}
                {name.includes(nameToAdd) && nameToAdd !== '' && name.slice(name.indexOf(nameToAdd) + nameToAdd.length)}
                - £{cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </p>
              <button
                className='flex-none bg-red-700 px-6 py-1 rounded text-slate-200 font-bold uppercase pointer shadow-sm hover:bg-red-600 active:relative active:top-[1px]'
                onClick={() => handleClick(id)}>
                Delete
              </button>
            </div>
          ))
        : 'No cars in list'}
    </div>
  );
};

export default CarList;
