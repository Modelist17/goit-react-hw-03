const SearchBox = ({ filter, onChangeFilter }) => {
  return (
    <section>
      <h3>Search by username</h3>
      <input
        type="text"
        placeholder="Search..."
        onChange={onChangeFilter}
        value={filter}
      />
    </section>
  );
};
export default SearchBox;
