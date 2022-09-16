const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid px-5">
        <div class="navbar-brand" href="#">
          <img src="/images/projectLogoOriginal.svg" alt="" />
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <div class="navbar-nav">
            <img
              class="profile-picture"
              src="/images/profileImage.png"
              alt="Profile"
            />
            <div className="profile-name">
              <span class="profile-text pt-3">Welcome, Deji</span>
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
