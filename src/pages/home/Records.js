// import NewRecordAndUpload from "./Layout/NewRecordAndUpload";
// import Search from "./Layout/Search";
import records from "../../mock_data/records.ts";
import RecordItem from "./RecordItem.tsx";

const Records = () => {
  return (
    <div className="overflow-x-auto relative">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              Foracid
            </th>
            <th scope="col" className="py-3 px-6">
              custid
            </th>
            <th scope="col" className="py-3 px-6">
              account name
            </th>
            <th scope="col" className="py-3 px-6">
              account number
            </th>
            <th scope="col" className="py-3 px-6">
              Phone number
            </th>
            <th scope="col" className="py-3 px-6">
              Additional phone number
            </th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => {
            return <RecordItem key={record.custId} record={record} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Records;
