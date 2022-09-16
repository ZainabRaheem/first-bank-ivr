const Search = () => {
  return (
    <>
      <div className="container-fluid search-date-download px-4">
        <div class="input-search">
          <div class="search-icon">
            <img src="../images/searchIcon.png" alt="icon" />
          </div>
          <input
            class="input-box px-1"
            type="text"
            placeholder="Search for an account"
          />
        </div>

        <div class="submit">
          <button className="button">Save record</button>
        </div>

        <div className="select-date">
          <div className="select-date-icon px-2">
            <img src="../images/selectDateIcon.png" alt="icon" />
          </div>
          <p className="date">Select Date</p>
        </div>

        <div className="download-records">
          <div className="download-records-icon px-2">
            <img src="../images/downloadRecordsIcon.png" alt="icon" />
          </div>
          <p className="download">Download records</p>
        </div>
      </div>
    </>
  );
};

export default Search;
