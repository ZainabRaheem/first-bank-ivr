import TitleFragment from "../fragments/title_fragment";
import SingleLineButton from "../commons/others/SingleLineButton";

const BatchUploadIncompleteModal = () => {
  const dismissstyle = {
    color: "white",
    backgroundColor: "#002855",
  };
  return (
    <div className="new-record-slider w-100">
      <TitleFragment title={"Batch upload incomplete"} />
      <p className="text-xs">The following records failed and were not uploaded. Please try again later!</p>
      <div className="mt-4">
      <table className="table">
        <thead>
          <tr>
            <th>FORACID</th>
            <th>CUST ID</th>
            <th>ACCOUNT NAME</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-danger">
            <td>34567</td>
            <td>123123</td>
            <td>John Doe</td>
          </tr>
          <tr className="bg-danger">
            <td>78909</td>
            <td>345345</td>
            <td>Peter Doe</td>
          </tr>
        </tbody>
      </table>
      </div>
      <form>
        <div className="flex justify-between">
          <div className="w-1/2">
            <SingleLineButton
              label="Dismiss"
              type="button"
              style={dismissstyle}
            ></SingleLineButton>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BatchUploadIncompleteModal;
