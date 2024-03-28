import CarForm from './components/CarForm/CarForm';
import CarSearch from './components/CarSearch/CarSearch';
import CarList from './components/CarList/CarList';
import CarValue from './components/CarValue/CarValue';

const App = () => {
  return (
    <div className='w-full max-w-screen-lg mx-auto p-4'>
      <CarForm />
      <CarSearch />
      <CarList />
      <CarValue />
    </div>
  );
};

export default App;
