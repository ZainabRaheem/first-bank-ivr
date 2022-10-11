import SingleLineButton from "../commons/others/SingleLineButton";

const DeleteRecordModal = () => {
  const cancelstyle = {
    color: "black",
    backgroundColor: "white",
  };

  const deletercordstyle = {
    color: "white",
    backgroundColor: "#002855",
  };
  return (
    // {/* The delete record modal content */}
    <div
      className="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content delete-modal-content">
          <div className="text-center my-4">
            <h5 className="modal-title text-center" id="exampleModalLabel">
              Delete Record
            </h5>
          </div>
          <div className="delete-modal-body">
            Are you sure you want to delete Jide Owo from your records?
          </div>
          <div className="custom-modal-footer py-5">
            <div className="w-1/3">
              <SingleLineButton
                label="Cancel"
                style={cancelstyle}
                type="cancel"
              />
            </div>
            <div className="w-1/3">
              <SingleLineButton
                label="Delete record"
                style={deletercordstyle}
                type="button"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteRecordModal;
