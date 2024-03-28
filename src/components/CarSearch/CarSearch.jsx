const CarSearch = () => {
  return (
    <div className='bg-slate-500'>
      <h1 className=''>My Cars</h1>
      <form className=''>
        <input className='' type='search' name='car-search' id='car-search' placeholder='Find a car' />
        <button className='' type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CarSearch;
