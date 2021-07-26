import { memo } from "react";
import { Route, Switch } from "react-router-dom";
// import Sidebar from "../components/Sidebar";
import DashboardPages from "./Dashboard.pages";
import LecturePages from "./Lecture.pages";
import RecordingPages from "./Recording.pages";

interface Props {
}

const Appcontainer: React.FC<Props> = (props) => {
 return(
    <div className="flex flex-row">
    {/* <Sidebar/> */}
     <Switch>
          <Route path="/recordings">
            <RecordingPages />
          </Route>
          <Route path="/dashboard">
            <DashboardPages />
          </Route>
          <Route path="/batch/:batchnumber/lecture/:lecturenumber">
            <LecturePages />
          </Route>
     </Switch>
    </div>
 );
};
Appcontainer.defaultProps = {
}
export default memo(Appcontainer);