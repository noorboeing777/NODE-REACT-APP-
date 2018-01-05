import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";
class Header extends Component {
  renderContent() {
    if (this.props.auth == null) {
      return;
    } else if (this.props.auth === false) {
      return (
        <li>
          <a href="/auth/google"> Login </a>
        </li>
      );
    } else {
      return [
        <li style={{ marginRight: 30 }} key="0">
          Welcome {this.props.auth.name}!
        </li>,
        <li key="1">
          <Payments />
        </li>,
        <li style={{ marginRight: 10, marginLeft: 10, fontSize: 20 }} key="2">
          Credits : {this.props.auth.credit}
        </li>,

        <li style={{ marginRight: -5 }} key="3">
          <a href="/api/logout">Log Out</a>
        </li>
      ];
    }
  }
  render() {
    console.log(this.props);
    return (
      <nav>
        <div className="nav-wrapper light-blue lighten-3">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo"
          >
            SurveyApp
          </Link>

          <ul className="right n">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}
function mapStateToProps(state) {
  return { auth: state.auth };
}
export default connect(mapStateToProps)(Header);
