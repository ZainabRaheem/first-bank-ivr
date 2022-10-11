import BatchUploadIncompleteModal from "../components/modals/BatchUploadIncompleteModal";
import BatchUploadModal from "../components/modals/BatchUploadModal";

const NewRecordAndUpload = () => {
  return (
    //Margin bottom maybe or not//
    <div className="container-fluid record-and-upload py-4 px-4">
      <div
        className="record"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#exampleModalside"
      >
        <img
          className="new-record-icon"
          src="../images/recordIconDeepBlue.png"
          alt="icon"
        />
        <p className="new-record">New record</p>
      </div>

      <div
        className="upload"
        data-bs-toggle="modal"
        data-bs-target="#exampleModalside"
      >
        <img
          className="batch-upload-icon"
          src="../images/batchUploadIcon.png"
          alt="icon"
        />
        <p className="batch-upload">Batch Upload</p>
      </div>

      {/* The sideBar Modal content */}

      <div
        className="modal left fade" /*Check this fade thing*/
        id="exampleModalside"
        tabIndex=""
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content slider-modal-content">
            <div className="modal-body slider-modal-body">
              {/* Started the layout here */}
              <BatchUploadIncompleteModal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRecordAndUpload;
