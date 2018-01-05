import React from "react";
import { Link } from "react-router-dom";
import SurveyList from "./surveys/SurveyList";
const Dashboard = () => {
  return (
    <div>
      <span class="new badge" data-badge-caption="custom caption">
        4
      </span>
      <SurveyList />
      <div className="fixed-action-btn">
        <Link
          to="/surveys/new"
          className="btn btn-floating btn-large cyan pulse"
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};
export default Dashboard;
