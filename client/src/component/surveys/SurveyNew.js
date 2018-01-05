import React, { Component } from "react";
import SurveyForm from "./SurveyForm";
import { reduxForm } from "redux-form";
import SurveyFormReview from "./SurveyFormReview";
import { Link } from "react-router-dom";
class SurveyNew extends Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <SurveyFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }
    return (
      <div>
        <SurveyForm
          onSurveySubmit={() => this.setState({ showFormReview: true })}
        />
      </div>
    );
  }

  render() {
    return (
      <div>
        <br />
        <nav style={{ padding: -15 }}>
          <div
            className="nav-wrapper light-blue lighten-3"
            style={{ padding: -15 }}
          >
            <div className="col s12">
              <Link to="/surveys" className="breadcrumb ">
                Home
              </Link>
              <a href="#!" className="breadcrumb">
                Create Form
              </a>
            </div>
          </div>
        </nav>
        <hr />
        {this.renderContent()}
      </div>
    );
  }
}
export default reduxForm({
  form: "SurveyForm"
})(SurveyNew);
