import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import * as actions from "../../actions";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom"; //withrouter to allow to navi userss

const FIELDS = [
  { label: "Title", name: "title" },
  { label: "Subject", name: "subject" },
  { label: "Body", name: "body" },
  { label: "Recipeint", name: "recipients" },
  { label: "sender", name: "sender" }
];
const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  //we received the actions as a props
  // so pass it here submitSurvey as a prop to use it
  const reviewField = _.map(FIELDS, field => {
    return (
      <div key={field.name}>
        <label>{field.label}</label>
        <div>{formValues[field.name]}</div>
      </div>
    );
  });
  return (
    <div>
      <h5>Please comfirm</h5>
      {reviewField}

      <button
        onClick={() => submitSurvey(formValues)}
        onClick={onCancel}
        className="waves-effect left waves-circle waves-light btn-floating secondary-content"
      >
        <i className="material-icons">edit</i>
      </button>

      <button
        className=" white-text darken-1 btn-flat right light-blue "
        onClick={() => submitSurvey(formValues, history)} //()=> was used to make sure fucntion only excecute when
        //user click on it
      >
        Send
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};
function mapStateToProps(state) {
  return {
    formValues: state.form.SurveyForm.values
  };
}
export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
