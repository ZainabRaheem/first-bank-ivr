import Records from "../Records";
import NewRecordAndUpload from "./NewRecordAndUpload";
import Search from "./Search";

const Main = () => {
  return (
    <div className="main">
      <NewRecordAndUpload />
      <Search />
      <Records />
    </div>
  );
};

export default Main;
