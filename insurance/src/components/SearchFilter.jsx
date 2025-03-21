const SearchFilter = ({ setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search policies..."
      onChange={(e) => setSearchTerm(e.target.value)}
      className="w-full p-2 border rounded my-4"
    />
  );
};

export default SearchFilter;
