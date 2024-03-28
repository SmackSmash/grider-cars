const CarForm = () => {
  return (
    <form className=''>
      <div className=''>
        <label htmlFor='car-name'>Car Name</label>
        <input className='' type='text' name='car-name' id='car-name' />
      </div>
      <div className=''>
        <label htmlFor='car-value'>Car Value</label>
        <input className='' type='text' name='car-value' id='car-value' />
      </div>
      <button className='' type='submit'>
        Submit
      </button>
    </form>
  );
};

export default CarForm;
