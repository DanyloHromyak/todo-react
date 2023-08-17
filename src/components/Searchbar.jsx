const Searchbar = ({ handleSearch }) => {
  const handleChange = e => {
    handleSearch(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <section className="w-4/5 md:w-full mb-5">
      <form onSubmit={handleSubmit} className="w-full flex justify-center">
        <input className="max-w-sm w-full rounded-md p-1 md:p-2 focus:outline-none focus:shadow-md dark:focus:shadow-white" type="text" placeholder="Search" onChange={handleChange} />
      </form>
    </section>
  );
};
export default Searchbar;
