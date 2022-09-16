// import NewRecordAndUpload from "./Layout/NewRecordAndUpload";
// import Search from "./Layout/Search";
import DeleteModal from "./DeleteModal";

const Records = () => {
  return (
    <div className="records-page">
      <div className="container-fluid ivr-records-table my-5 mx-4">
        <table className="records-table">
          <h6 className="ivr-records-title py-3 px-3">IVR Records</h6>
          <tr className="px-5">
            <th>FORACID</th>
            <th>CUST ID</th>
            <th>Account name</th>
            <th>Account number</th>
            <th>Phone number</th>
            <th>Additional Phone number</th>
          </tr>
          <tr className="row-data">
            <td>345353</td>
            <td>12324</td>
            <td>Jide Owo</td>
            <td>12243535355</td>
            <td>0890 4949 4494</td>
            <td>0890 2393 9393</td>
            <td>
              <div className="dropdown">
                <img
                  src="/images/optionsIcon.png"
                  alt=""
                  class="btn dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                />
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a class="dropdown-item" href="#">
                      Add number
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Edit record
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Delete record
                    </a>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
          <tr className="row-data">
            <td>897886</td>
            <td>65645</td>
            <td>Mike Jones</td>
            <td>24245465567</td>
            <td>0989 2383 3390</td>
            <td>N/A</td>
            <td>
              <div className="dropdown">
                <img
                  src="/images/optionsIcon.png"
                  alt=""
                  class="btn dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                />
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a class="dropdown-item" href="#">
                      Add number
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Edit record
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Delete record
                    </a>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
          <tr className="row-data">
            <td>829348</td>
            <td>77878</td>
            <td>Dele Ini</td>
            <td>67687982123</td>
            <td>0899 3933 3939</td>
            <td>N/A</td>
            <td>
              <div className="dropdown">
                <img
                  src="/images/optionsIcon.png"
                  alt=""
                  class="btn dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                />
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a class="dropdown-item" href="#">
                      Add number
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Edit record
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item"
                      href="#"
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      Delete record
                    </a>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
        </table>

        <DeleteModal />

        {/* The delete record modal content */}
        {/* <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content delete-modal-content">
              <div class="modal-header text-center">
                <h5 class="modal-title text-center" id="exampleModalLabel">
                  Delete Record
                </h5>
              </div>
              <div class="modal-body delete-modal-body">
                Are you sure you want to delete Jide Owo from your records?
              </div>
              <div class="modal-footer py-5">
                <button type="button" class="button" data-bs-dismiss="modal">
                  Cancel
                </button>
                <button type="button" class="button">
                  Delete record
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Records;
