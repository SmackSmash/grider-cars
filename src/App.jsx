import { useSelector, useDispatch } from 'react-redux';
import { sayBye } from './store';
import CarForm from './components/CarForm/CarForm';
import CarSearch from './components/CarSearch/CarSearch';
import CarList from './components/CarList/CarList';
import CarValue from './components/CarValue/CarValue';

const App = () => {
  const test = useSelector(({ test }) => test);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(sayBye());
  };

  return (
    <div className='container'>
      <h1 onClick={handleClick}>{test}</h1>
      <CarForm />
      <CarSearch />
      <CarList />
      <CarValue />
    </div>
  );
};

export default App;
