import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";
import Chart from "./Chart";
import { Link } from "react-router-dom";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return this.props.surveys.map(survey => {
      if (survey.lastResponded) {
        return (
          <div
            className=" z-depth-5 card-panel hoverable card  light-blue lighten-4"
            key={survey.id}
            style={{ paddingBottom: 40 }}
          >
            <div className="card-content ">
              {" "}
              <h5
                style={{
                  backgroundColor: "#4fc3f7",
                  padding: 20,
                  marginTop: -20
                }}
                className="center-align "
              >
                {survey.title}
              </h5>
              <p>{survey.body}</p>
              <p className="right">
                Sent On {new Date(survey.dateSent).toLocaleDateString()}
              </p>
              <br />
              <p className="right">
                {" "}
                Last Responded:{" "}
                {new Date(survey.lastResponded).toLocaleTimeString()}
              </p>
            </div>
            <div className="card-action" style={{ paddingBottom: 40 }}>
              <span
                className="new badge left blue"
                data-badge-caption=" users Liked it! "
              >
                {survey.yes}
              </span>
              <span
                className="new badge center red"
                data-badge-caption=" users Didnt it! "
              >
                {survey.no}
              </span>
            </div>
          </div>
        );
      } else {
        return (
          <div
            className=" z-depth-5 card-panel hoverable card  light-blue lighten-4"
            key={survey.id}
            style={{ paddingBottom: 40 }}
          >
            <div className="card-content ">
              <h5
                style={{
                  backgroundColor: "#4fc3f7",
                  padding: 20,
                  marginTop: -20
                }}
                className="center-align"
              >
                {survey.title}
              </h5>
              <p>{survey.body}</p>
              <p className="right">
                Sent On {new Date(survey.dateSent).toLocaleDateString()}
              </p>
              <br />
              <p className="right"> Last Responded: No one so far</p>
            </div>
            <div className="card-action">
              <span
                className="new badge left blue"
                data-badge-caption=" users Liked it! "
              >
                {survey.yes}
              </span>
              <span
                className="new badge right red"
                data-badge-caption=" users Didnt it! "
              >
                {survey.no}
              </span>
            </div>
          </div>
        );
      }
    });
  }

  render() {
    return (
      <div>
        <Chart />
        {this.renderSurveys()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return { surveys: state.surveys };
}
export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
