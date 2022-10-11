import ActionTab from "../../components/commons/action_tab";
import Layout from "../../components/layout";
import SuccessInfoFragment from "../../components/fragments/success_info_fragment";
import NewRecordAndUpload from "../../layout/NewRecordAndUpload";
import EmptySearch from "./EmptySearch";
import Records from "./Records";
import DropDownRadioFragment from "../../components/fragments/dropdown_radio_fragment";

const Home = () => {
  const submitbutton = {
    label: "Submit",
    style: {
      backgroundColor: "#002855",
      fontSize: "12px",
      color: "white",
    },
    iconImagePath: "../images/searchIcon.png",
  };
  const datebutton = {
    label: "Select date",
    style: {
      backgroundColor: "#f8fbfd",
      fontSize: "12px",
      color: "black",
    },
    id: "dropdownRadioButton",
    modalId: "dropdownRadio",
    iconImagePath: "../images/selectDateIcon.png",
  };
  const downloadbutton = {
    label: "Download records",
    style: {
      backgroundColor: "#f8fbfd",
      fontSize: "12px",
      color: "black",
    },
    iconImagePath: "../images/downloadRecordsIcon.png",
  };

  const infostyle = {
    color: "#3FC59D",
    
  }
  return (
    <>
      <Layout>
        <div>
          <div className="flex">
            <NewRecordAndUpload />
            <SuccessInfoFragment style={infostyle} message="Record deleted" />
          </div>
          <div className="ml-3">
            <ActionTab
              submitbutton={submitbutton}
              datebutton={datebutton}
              downloadbutton={downloadbutton}
            />
          </div>
          <div className="home-page">
            <div className="ivr-records mt-4 mx-4">
              <h6 className="ivr-records-title py-3 px-4">IVR Records</h6>
              {/* <EmptySearch /> */}
              <Records />
            </div>
          </div>
        </div>
        <DropDownRadioFragment />
      </Layout>
    </>
  );
};

export default Home;
