import CustomInputSmall from "../fragments/custom_input_small";
import TitleFragment from "../fragments/title_fragment";
import SingleLineButton from "../commons/others/SingleLineButton";

const NewRecordModal = () => {
  const submitstyle = {
    color: "white",
    backgroundColor: '#002855'
  }
  return (
    <div className="new-record-slider">
      <TitleFragment title={"New record"} />
      <form>
        <CustomInputSmall
          title="Account Name"
          label="Please enter account name"
        ></CustomInputSmall>
        <CustomInputSmall
          title="Account Number"
          label="Please enter account number"
        ></CustomInputSmall>
        <CustomInputSmall
          title="Phone Number"
          label="Please enter phone number"
        ></CustomInputSmall>
        <CustomInputSmall
          title="Additional Phone Number"
          label="Please enter additional phone number"
        ></CustomInputSmall>
        <div className="flex justify-between">
          <div className="w-1/2">
            <SingleLineButton label="Cancel" type="button"></SingleLineButton>
          </div>
          <div className="mx-1"></div>
          <div className="w-1/2">
            <SingleLineButton label="Save record" type="submit" style={submitstyle}></SingleLineButton>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewRecordModal;
