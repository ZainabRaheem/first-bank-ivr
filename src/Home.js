const Home = () => {
  return (
    <div className="home-page">
      <div className="ivr-records mt-4 mx-4">
        <h6 className="ivr-records-title py-3 px-4">IVR Records</h6>
        <div className="centered-content">
          <div className="record-double-icon">
            <img src="/images/recordDoubleIcon.png" alt="icon" />
          </div>
          <span className="centered-content-text my-3">
            Search for a record to
            <br /> display details
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
