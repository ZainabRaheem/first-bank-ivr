const SideBar = () => {
  return (
    <div className="side-bar d-flex">
      <div className="records-image mx-3 my-3">
        <img
          className="record-white-icon"
          src="../images/recordIconWhite.png"
          alt="icon"
        />
      </div>
      <p className="records-named">Records</p>
    </div>
  );
};

export default SideBar;
