import EditRecord from "../EditRecord";

const NewRecordAndUpload = () => {
  return (
    //Margin bottom maybe or not//
    <div className="container-fluid record-and-upload py-4 px-4 mb-5">
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

      <div className="upload">
        <img
          className="batch-upload-icon"
          src="../images/batchUploadIcon.png"
          alt="icon"
        />
        <p className="batch-upload">Batch Upload</p>
      </div>

      {/* The sideBar Modal content */}

      <div
        class="modal left fade" /*Check this fade thing*/
        id="exampleModalside"
        tabindex=""
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content slider-modal-content">
            <div class="modal-body slider-modal-body">
              {/* Started the layout here */}
              <EditRecord />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRecordAndUpload;
