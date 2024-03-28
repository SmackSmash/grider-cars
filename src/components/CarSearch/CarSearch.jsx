const CarSearch = () => {
  return (
    <div className='block is-align-items-flex-center is-justify-content-space-between is-flex-direction-row'>
      <h1 className='title'>My Cars</h1>
      <form className='field has-addons '>
        <div className='control'>
          <input className='input' type='search' name='car-search' id='car-search' placeholder='Find a car' />
        </div>
        <div className='control'>
          <button className='button is-info' type='submit'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CarSearch;
