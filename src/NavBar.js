const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid px-5">
        <div className="navbar-brand" href="#">
          <img src="/images/projectLogoOriginal.svg" alt="" />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <div className="navbar-nav">
            <img
              className="profile-picture"
              src="/images/profileImage.png"
              alt="Profile"
            />
            <div className="profile-name">
              <span className="profile-text pt-3">Welcome, Deji</span>
              <div className="arrow-down pt-3">
                <img src="/images/arrowDown.png" alt="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
