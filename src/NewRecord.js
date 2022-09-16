const NewRecord = () => {
  return (
    <div className="new-record-slider">
      <h2 className="slider-title py-4 px-3">New record</h2>
      {/* check this padding, want it at the left side only */}
      <form className="">
        <h3 className="label-title">Account name</h3>
        <label className="input-label" for="AccountName">
          Please enter account name
        </label>
        <br />
        <input
          className="input-field mt-2 mb-4 py-1"
          type="text"
          id="AccountName"
          name="AccountName"
        />
        <br />
        <h3 className="label-title">Account Number</h3>
        <label className="input-label" for="AccountNumber">
          Please select acount number
        </label>
        <br />
        <input
          className="input-field mt-2 mb-4 py-1"
          type="text"
          id="AccountNumber"
          name="AccountNumber"
        />
        <br />
        <h3 className="label-title">Phone number</h3>
        <label className="input-label" for="PhoneNumber">
          Please enter customer phone number
        </label>
        <br />
        <input
          className="input-field mt-2 mb-4 py-1"
          type="text"
          id="PhoneNumber"
          name="PhoneNumber"
        />
        <br />
        <h3 className="label-title">Additional phone number</h3>
        <label className="input-label" for="AdditionalPhoneNumber">
          Please enter additional customer phone number
        </label>
        <br />
        <input
          className="input-field mt-2 mb-4 py-1"
          type="text"
          id="AdditionalPhoneNumber"
          name="AdditionalPhoneNumber"
        />
        <br />
        <br />
      </form>
      <div className="buttons">
        <button className="cancel-button px-5 py-2">Cancel</button>
        <button className="button mx-5 py-2">Save record</button>
      </div>
    </div>
  );
};

export default NewRecord;
