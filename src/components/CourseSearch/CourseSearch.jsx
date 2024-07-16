export const CourseSearch = ({ searchTerm, setSearchTerm }) => {
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search">
      <form>
        <input
          className="form-control"
          type="search"
          placeholder="Search"
          onChange={handleSearchChange}
          value={searchTerm}
        />
        <span>
          <i className="fa-solid fa-magnifying-glass" />
        </span>
      </form>
    </div>
  );
};
