const EditRecord = () => {
  return (
    <div className="edit-record-slider">
      <h2 className="slider-title py-4 px-3">Edit record</h2>
      {/* check this padding, want it at the left side only */}
      <div className="edit-record-details">
        <div className="account-name">
          <h3 className="details-title">Account name</h3>
          <p className="details">Jide Owo</p>
        </div>
        <div className="customer-id">
          <h3 className="details-title">Customer ID</h3>
          <p className="details">3535353535</p>
        </div>
        <div className="account-number">
          <h3 className="details-title">Account number</h3>
          <p className="details">08298429829</p>
        </div>
        <form className="">
          <h3 className="label-title pt-3">Phone number</h3>
          <label className="input-label" for="PhoneNumber">
            Please enter customer phone number
          </label>
          <br />
          <input
            className="input-field mt-2 mb-4 py-1 px-4"
            type="text"
            id="PhoneNumber"
            name="PhoneNumber"
            placeholder="0814 345 3485"
          />
          <br />
          <h3 className="label-title">Additional phone number</h3>
          <label className="input-label" for="AdditionalPhoneNumber">
            Please enter additional customer phone number
          </label>
          <br />
          <input
            className="input-field mt-2 mb-4 py-1 px-4"
            type="text"
            id="AdditionalPhoneNumber"
            name="AdditionalPhoneNumber"
            placeholder="0814 345 3485"
          />
          <br />
          <br />
        </form>
        <div className="buttons">
          <button className="cancel-button px-5 py-2">Cancel</button>
          <button className="button mx-5 py-2">Update record</button>
        </div>
      </div>
    </div>
  );
};

export default EditRecord;
