import CustomInputSmall from "../fragments/custom_input_small";
import TitleFragment from "../fragments/title_fragment";
import SingleLineButton from "../commons/others/SingleLineButton";

const BatchUploadModal = () => {
  const submitstyle = {
    color: "white",
    backgroundColor: "#002855",
  };
  return (
    <div className="new-record-slider">
      <TitleFragment title={"Batch upload"} />
      <p className="text-sm font-semibold">Add batch file</p>
      <div className="flex flex-col justify-center border py-4 items-center my-3 rounded-lg">
        <div className="my-2">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.99792 4.84271C9.08229 5.78698 8.33333 6.84167 8.33333 7.18646C8.33333 7.99583 10.024 7.99688 10.8333 7.1875C11.3193 6.70156 11.4583 7.80104 11.4583 12.1354C11.4583 17.3609 11.5234 17.7083 12.5 17.7083C13.4766 17.7083 13.5417 17.3609 13.5417 12.1354C13.5417 7.80104 13.6807 6.70156 14.1667 7.1875C15.0005 8.02135 16.6667 7.98542 16.6667 7.13333C16.6667 6.20885 13.4208 3.125 12.4474 3.125C12.0156 3.125 10.9135 3.89792 9.99792 4.84271ZM3.75 9.47917C2.89583 10.3333 2.89583 20.3958 3.75 21.25C4.625 22.125 20.375 22.125 21.25 21.25C22.1042 20.3958 22.1042 10.3333 21.25 9.47917C20.4932 8.7224 17.3766 8.64792 16.9266 9.37604C16.749 9.66302 17.2578 10.1464 18.0568 10.45C20.0495 11.2078 20.2953 11.7552 20.3047 15.4578C20.3161 20.125 20.0151 20.3125 12.5 20.3125C4.96302 20.3125 4.6875 20.138 4.6875 15.3646C4.6875 11.9859 5.44271 10.4167 7.06823 10.4167C7.4776 10.4167 7.8125 10.0651 7.8125 9.63542C7.8125 8.67083 4.67865 8.55052 3.75 9.47917Z"
              fill="#828282"
            />
          </svg>
        </div>
        <div className="my-2">
          <p className="text-sm">Click to upload file</p>
        </div>
      </div>
      <form>
        <div className="flex justify-between">
          <div className="w-1/2">
            <SingleLineButton label="Cancel" type="button"></SingleLineButton>
          </div>
          <div className="mx-1"></div>
          <div className="w-1/2">
            <SingleLineButton
              label="Upload batch file"
              type="submit"
              style={submitstyle}
            ></SingleLineButton>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BatchUploadModal;
