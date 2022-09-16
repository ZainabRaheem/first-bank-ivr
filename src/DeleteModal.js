const DeleteModal = () => {
  return (
    // {/* The delete record modal content */}
    <div
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
    </div>
  );
};

export default DeleteModal;
