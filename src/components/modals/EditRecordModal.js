import CustomInputSmall from "../fragments/custom_input_small";
import TitleFragment from "../fragments/title_fragment";
import SingleLineButton from "../commons/others/SingleLineButton";
import TitleValueFragment from "../fragments/title_value_fragment";

const EditRecordModal = (props) => {
  const submitstyle = {
    color: "white",
    backgroundColor: '#002855'
  }
  return (
    <div className="new-record-slider">
      <TitleFragment title={"Edit record"} />
      <form>
        <TitleValueFragment
          title="Customer ID"
          value="xxxxxxxx"
        ></TitleValueFragment>
        <TitleValueFragment
          title="Account Name"
          value="xxxxxxx yyyyy"
        ></TitleValueFragment>
        <TitleValueFragment
          title="Account Number"
          value="aaaaaaaa"
        ></TitleValueFragment>
        <CustomInputSmall
          title="Phone Number"
          label="080xxxxxxxx"
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
            <SingleLineButton label="Update record" type="submit" style={submitstyle}></SingleLineButton>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditRecordModal;
