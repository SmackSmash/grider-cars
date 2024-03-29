import { useSelector } from 'react-redux';

const CarList = () => {
  const cars = useSelector(({ cars: { cars } }) => cars);

  return (
    <div className='bg-slate-400 p-4 rounded mb-4 flex flex-col gap-3'>
      {cars.length
        ? cars.map(({ carName, carValue }) => (
            <div className='bg-slate-200 px-4 py-2 rounded shadow-sm flex justify-between items-center' key={carName}>
              <p>
                {carName} - £{carValue}
              </p>
              <button className='flex-none bg-red-700 px-6 py-1 rounded text-slate-200 font-bold uppercase pointer shadow-sm hover:bg-red-600 active:relative active:top-[1px]'>
                Delete
              </button>
            </div>
          ))
        : 'No cars in list'}
    </div>
  );
};

export default CarList;
