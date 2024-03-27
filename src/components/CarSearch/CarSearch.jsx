const CarSearch = () => {
  return (
    <form className='field is-grouped is-align-items-flex-end'>
      <div className='control'>
        <label htmlFor='car-name'>Car Name</label>
        <input className='input' type='text' name='car-name' id='car-name' />
      </div>
      <div className='control'>
        <label htmlFor='car-value'>Car Value</label>
        <input className='input' type='text' name='car-value' id='car-value' />
      </div>
      <div className='control'>
        <button className='button is-primary' type='submit'>
          Submit
        </button>
      </div>
    </form>
  );
};

export default CarSearch;
