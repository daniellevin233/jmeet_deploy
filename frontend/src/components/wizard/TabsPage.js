import { Tabs, Tab } from "react-bootstrap";
import Matches from "./Matches";

const TabsPage = ({ data }) => {
  return (
    <div className="content" style={{ width: "600px" }}>
      <Tabs defaultActiveKey="oneonone" id="uncontrolled-tab-example">
        <Tab eventKey="oneonone" title="1 on 1 matches">
          <Matches data={data} />
        </Tab>
        <Tab eventKey="groupmatches" title="Group matches">
          hi
        </Tab>
        <Tab eventKey="chats" title="Chats">
          ma
        </Tab>
        <Tab eventKey="preferences" title="Preferences">
          kore
        </Tab>
      </Tabs>
    </div>
  );
};

export default TabsPage;
