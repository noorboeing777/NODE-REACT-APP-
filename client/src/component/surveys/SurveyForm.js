import React, { Component } from "react";
import { Link } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
import validateEmails from "../../untils/validateEmails";
class SurveyForm extends Component {
  renderFields() {
    return (
      <div>
        <div>
          <i className="small material-icons ">border_color</i>
          <Field
            label="Survey Title"
            type="text"
            name="title"
            component={SurveyField}
          />
        </div>

        <Field
          label="Subject Line"
          type="text"
          name="subject"
          component={SurveyField}
        />

        <Field label="Body" type="text" name="body" component={SurveyField} />

        <Field
          label="Recipients"
          type="text"
          name="recipients"
          component={SurveyField}
        />
        <Field
          label="sender"
          type="text"
          name="sender"
          component={SurveyField}
        />
      </div>
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link
            to="/surveys"
            className="waves-effect waves-light btn left red "
          >
            Cancel
          </Link>
          <button
            className="waves-effect waves-light light-blue lighten-3 btn right"
            type="submit"
          >
            Submit
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    );
  }
}
function validate(values) {
  const errors = {};
  errors.recipients = validateEmails(values.recipients || "");
  if (!values.title) {
    errors.title = "you must provide a title";
  }
  if (!values.subject) {
    errors.subject = "Enter Subject";
  }
  if (!values.body) {
    errors.body = "Enter body";
  }
  if (!values.recipients) {
    errors.recipients = "Enter email to send";
  }

  return errors;
}
export default reduxForm({
  validate,
  form: "SurveyForm",
  destroyOnUnmount: false
})(SurveyForm);
