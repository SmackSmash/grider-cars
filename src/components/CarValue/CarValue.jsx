import { useSelector } from 'react-redux';

const CarValue = () => {
  const list = useSelector(({ cars: { list } }) => list);

  return (
    <div className='bg-green-100 p-4 rounded text-end'>
      <h2 className='font-semibold text-2xl'>
        Total Value: £
        {list
          .reduce((acc, car) => acc + car.cost, 0)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      </h2>
    </div>
  );
};

export default CarValue;
