import { useSelector } from 'react-redux';

const CarValue = () => {
  const cars = useSelector(({ cars: { cars } }) => cars);

  return (
    <div className='bg-green-100 p-4 rounded text-end'>
      <h2 className='font-semibold text-2xl'>Total Value: £{cars.reduce((acc, car) => acc + car.cost, 0)}</h2>
    </div>
  );
};

export default CarValue;
